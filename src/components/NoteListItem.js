import React from "react";
import PropTypes from "prop-types";

const MAX_LENGTH = 200;

export default function NoteListItem(props) {
    const { id } = props;
    const { text } = props;
    const { dateTimeText } = props;

    return (
        <div className="noteListItem">
            <h1>Note List Item</h1>
            <div>
                {text.length > MAX_LENGTH ?
                    (
                        <div>
                            {`${text.substring(0, MAX_LENGTH)}...`}
                        </div>
                    ) :
                    <textarea>
                        {text}
                    </textarea>          
                }
            </div>
            <div>
                {dateTimeText}
            </div>
            </div>
    );

}

NoteListItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dateTimeText: PropTypes.string.isRequired,
    onClick: PropTypes.string

};


