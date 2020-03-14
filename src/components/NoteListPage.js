import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButtons,
    IonButton
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import { funnel } from 'ionicons/icons';
import NoteListItem from './NoteListItem';
import useNotes from '../hooks/useNotes';

export default function NoteListPage() {
    const {notes, createNote }  = useNotes();
    const history = useHistory();
    const [showAll, setShowAll] = useState(false);
    const { t } = useTranslation();
    
    const handleListItemClick = (id) => {
        history.push(`/notes/edit/${id}`);
    };
const handleNewNoteClick = () => {
    const { id } = createNote();
    history.push(`/notes/edit/${id}`);
};
    
let filteredNotes;
  if (showAll) {
    filteredNotes = notes;
  } else {
    filteredNotes = notes.filter((note) => note.isArchived !== true);
  }

const handleArchiveClick = () => {
  setShowAll(!showAll);
};
    return (
        <IonPage>
            <IonHeader>
        <IonTitle>{t("noteListPageTitle")}</IonTitle>
                <IonToolbar>
                 <IonButtons slot="primary">
                        <IonButton color="secondary" >
                            <IonIcon slot="icon-only" 
                                    icon={funnel} 
                                    onClick={handleArchiveClick}
                            />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Note List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList lines="full">
                {
                    filteredNotes.map((note, index) => {
                        return (
                            <NoteListItem
                                key={note.id}
                                id={note.id}
                                text={note.text}
                                createdAt={note.createdAt}
                                onClick={handleListItemClick}
                            />
                        );
                    })
                    }
                </IonList>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={ handleNewNoteClick }>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
}

