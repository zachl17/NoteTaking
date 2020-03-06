import React, { useState } from "react";
import { IonAlert, IonButton, IonContent } from '@ionic/react';
import { useParams } from "react-router";
import { useHistory} from "react-router-dom";
import NoteEditPage from "./NoteEditPage";
import useNotes from '../hooks/useNotes';

export default function NoteEditPageController() {
    const { id } = useParams();
    const history = useHistory();
    const { notes, deleteNote, updateNote, archiveNote } = useNotes();
    const [showAlert1, setShowAlert1] = useState(false);


    const selectedNote = notes.find((note) => note.id === id);
    if (!selectedNote) return null;

    const handleSelectedNoteSave = (newText) => {
        if(newText === ""){
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
  //  const handleSelectedNoteDelete = () => {
//        return (
//      <IonContent>
//        <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
//         <IonAlert
//          isOpen={showAlert1}
//          onDidDismiss={() => setShowAlert1(false)}
//          header={'Confirm Note Deletion'}
//          message={'Message <strong>Are you sure you want to delete this note?</strong>!!!'}
//          buttons={[
//            {
//              text: 'Cancel',
//              role: 'cancel',
//              handler: back () =>{
//              history.goBack();
//}
//           },
//            {
//              text: 'Confirm',
//              handler: delete () =>{
//              deleteNote(id);
//              history.goBack();
//} 
//            }
//          ]}
//        />

//    )};
