import React, { useState } from "react";
import { useParams } from "react-router";
import { useHistory} from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from '../hooks/useNotes';

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const { notes, deleteNote, updateNote, archiveNote } = useNotes();

    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    const handleSelectedNoteSave = (newText) => {
        if(newText.trim().length === 0){
           deleteNote(id);
           }
        else{
            updateNote(id, newText);
        }
        history.goBack();
    };

    const handleSelectedNoteDelete = () => {
        deleteNote(id);
        history.goBack();

    };
   const handleOnArchive = () => {
       archiveNote(id);
    };
    return( <NoteEditPage 
            onArchieve = { handleOnArchive }
            onDelete = { handleSelectedNoteDelete }
            onSave = { handleSelectedNoteSave }
            text = { selectedNote.text }
        />
           
    );
}

