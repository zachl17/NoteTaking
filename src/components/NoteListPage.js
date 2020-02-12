import React, { useState } from "react";
import NoteListItem from './NoteListItem';
import NoteEditPage from "./NoteEditPage";

const oneHourAgo = Date.now() - (1 * 60 * 60 * 1000);
const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);

const initialNotes = [
    {
        id: "1",
        createdAt: new Date(oneHourAgo),
        text: "This is note 1"
    },
    {
        id: "2",
        createdAt: new Date(sixDaysAgo),
        text: "This is note 2"
    },
    {
        id: "3",
        createdAt: new Date(twoWeeksAgo),
        text: "This is note 3"
    }
];

export default function NoteListPage() {
    const [notes, setNotes] = useState(initialNotes)
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    const handleListItemClick = (id) => {
        setSelectedNoteId(id);
    };

    const handleSelectedNoteSave = (newText) => {
        const newNotes = notes.map((note) => {
            if (note.id === selectedNoteId) {
                return {
                    ...note,
                    text: newText
                };
            }
            return note;
        });
        setNotes(newNotes);
        setSelectedNoteId(null);
    };

    const handleSelectedNoteDelete = () => {
        const updatedNotes = notes.filter((note) => note.id !== selectedNoteId);
        setNotes(updatedNotes);
        setSelectedNoteId(null);
    };

    const handleSelectedNoteCancel = () => {
        setSelectedNoteId(null);
    };



    if (selectedNoteId) {
       const selectedNote = notes.find((note) => note.id === selectedNoteId);
        return (
            <NoteEditPage onSave={handleSelectedNoteSave} text={selectedNote.text}
                onCancel={handleSelectedNoteCancel} onDelete={handleSelectedNoteDelete} />
            );
    }
    return (
        <div className="page">
            <h1>Note List</h1>
            <div className="noteList">
                {
                    notes.map((note) => {
                        return (
                            < NoteListItem
                                key={note.id}
                                id={note.id}
                                text={note.text}
                                createdAt={note.createdAt}
                                onClick={handleListItemClick}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

