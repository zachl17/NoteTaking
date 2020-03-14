import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
    IonAlert,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonActionSheet
} from '@ionic/react';
import { chevronBack, ellipsisHorizontal, trash, close, archive } from 'ionicons/icons';
import styles from "./NoteEditPage.module.css";

export default function NoteEditPage(props) {
    const { onSave, text } = props;
    const { onDelete } = props;
    const { onArchive } = props;
    const [value, setValue] = useState(text);
    const [showActions, setShowActions] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const { t } = useTranslation();
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton color="secondary" onClick={() => onSave(value)} >
                            <IonIcon slot="icon-only" icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Note Edit</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton color="secondary" onClick={() => setShowActions(true)}>
                            <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <textarea className={styles.textArea} value={value} onChange={(event) => setValue(event.target.value)} />
                <IonActionSheet
                    isOpen={showActions}
                    onDidDismiss={() => setShowActions(false)}
                    buttons={[
                        {
                            text:t("deleteText"),
                            role: "destructive",
                            icon: trash,
                            handler: onDelete
                        },
                        {
                            text: t("cancelText"),
                            role: "cancel",
                            icon: close,
                            handler: () => setShowActions(false)
                        },
                        {
                            text: t("archiveText"),
                            icon: archive,
                            handler: onArchive
                        }
                    ]}
                />
        <IonButton onClick={() => setShowAlert(true)} expand="block">Show Alert 1</IonButton>
         <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Confirm Note Deletion'}
          message={'<strong>Are you sure you want to delete this note?</strong>'}
          buttons={[
            {
              text: t("cancelText"),
              role: 'cancel',
              handler: () => setShowActions(false)
           },
            {
              text: 'Confirm',
              handler: onDelete
            }
          ]}
        />
            </IonContent>
        </IonPage>
        );
}
NoteEditPage.propTypes = {
    onArchive: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    text: PropTypes.string.isRequired
};