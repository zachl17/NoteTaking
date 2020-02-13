import React, { useState } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReactMarkdown from 'react-markdown';

dayjs.extend(relativeTime);
const MAX_LENGTH = 200;

const formatDate = (date) => {
    const oneWeekAgo = Date.now() - (168 * 60 * 60 * 1000);
    if (date >= oneWeekAgo) {
        return dayjs(date).fromNow();
    }
    else {
        dayjs(date).format("h:m a on M/D/YYYY");
        return dayjs(date).format("h:m a on M/D/YYYY");
    }
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
                    <ReactMarkdown source={ text.length > MAX_LENGTH ? `${text.substring(0, MAX_LENGTH)}...` : text } />
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


