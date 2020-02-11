import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NoteEditPage(props) {
    const { onSave, text } = props;
    const { onDelete } = props;
    const { onCancel } = props;
    const [value, setValue] = useState(text);
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="page">
            <h1>Note Edit</h1>
            <textarea value={value} onChange={handleChange} />
            <button type="button" onClick={() => onSave(value)}>Save</button>
            <button type="button" onClick={() => onDelete(value)}>Delete</button>
            <button type="button" onClick={() => onCancel(value)}>Cancel</button>
        </div>
    );
}
NoteEditPage.propTypes = {
    onSave: PropTypes.func,
    text: PropTypes.string.isRequired
};