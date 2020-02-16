import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown';
import formatDate from "../util/formatDate";

const MAX_LENGTH = 200;

const checkText = (text) => {
    if (text.trim() == "" || text.trim().length == 0) {
        text = "No note text";
    }
    return text;
};

export default function NoteListItem(props) {
    const { createdAt, id, onClick, text } = props;

    const handleItemClick = (event) => {
        event.preventDefault();
        if (onClick) {
        onClick(id);
        }
    };

    return (
        <div onClick={handleItemClick}>
        <div className="noteListItem">
            <div>
                    <ReactMarkdown source={text.length > MAX_LENGTH ? `${text.substring(0, MAX_LENGTH)}...` : checkText(text)} />
            </div>
                <div>
                    <p> {formatDate(createdAt)} </p>
                </div>
            </div>
        </div>
    );
}

NoteListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    onClick: PropTypes.func
};


