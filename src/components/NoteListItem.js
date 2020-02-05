import React from "react";
import PropTypes from "prop-types";

const MAX_LENGTH = 200;

export default function NoteListItem(props) {
    const { dateTimeText, id, onClick, text } = props;

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
                {text.length > MAX_LENGTH ? `${text.substring(0, MAX_LENGTH)}...` : text}
            </div>
            <div>
                {dateTimeText}
            </div>
            </div>
        </div>
    );
}

NoteListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dateTimeText: PropTypes.string.isRequired,
    onClick: PropTypes.func
};


