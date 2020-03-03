import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';
import { IonItem, IonLabel } from '@ionic/react';
import formatDate from "../util/formatDate";
import formatNoteItemText from "../util/formatNoteItemText";

export default function NoteListItem(props) {
    const { createdAt, id, onClick, text } = props;

    const handleItemClick = (event) => {
        event.preventDefault();
        if (onClick) {
        onClick(id);
        }
    };

    return (
        <IonItem onClick={handleItemClick}>
            <IonLabel>
            <div>
                    <ReactMarkdown source={formatNoteItemText(text)} />
            </div>
                <div>
                    <p> {formatDate(createdAt)} </p>
                </div>
                </IonLabel>
        </IonItem>
    );
}

NoteListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    onClick: PropTypes.func
};


