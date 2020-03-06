import React, {
    createContext,
    useContext,
    useState
} from "react";

const NotesContext = createContext([]);

const reviver = (key, value) => {
    if(key === "createdAt"){
        return new Date(value);
    }
    return value;
}

const oneHourAgo = Date.now() - (1 * 60 * 60 * 1000);
const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);

const savedNotes = localStorage.getItem("notes");
const initialNotes = savedNotes ? JSON.parse(savedNotes, reviver) : [];

export function NotesProvider(props) {
    const [notes, setNotes] = useState(initialNotes);

    return ( <NotesContext.Provider value={[notes, setNotes]}> 
            { props.children } 
            </NotesContext.Provider>
    );
}
export default function useNotes() {
    
    const [notes, setNotes] = useContext(NotesContext);
    function  saveNotes(updatedNotes){
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    
    return {
        notes,
        createNote() {
            const id = String(notes.length + 1);
            
            const newNote = {
               id,
                createdAt: new Date(),
                text: ""
            };
            const updatedNotes = [newNote, ...notes];
            saveNotes(updatedNotes);
            
            return newNote;
        },
        deleteNote(id) {
            const updatedNotes = notes.filter((note) => note.id !== id);
            saveNotes(updatedNotes);
        },
        updateNote(id, newText) {
            const newNotes = notes.map((note) => {
                if (note.id === id) {
                    return {
                        ...note,
                        text: newText
                    };
                }
                return note;
            });
            saveNotes(newNotes);
        },
        archiveNote(id, isArchived){
            const newNotes = notes.map((note) => {
                if (note.id === id) {
                    note.isArchived = true;
                }
                return note;
            });
            saveNotes(newNotes);
        }
    };
}
