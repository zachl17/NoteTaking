﻿import React from "react";
import NoteListItem from './NoteListItem';

export default function NoteListPage() {

    const handleListItemClick = (id) => {

        alert(`${id} clicked!`);
    };
    return (
        <div className="page">
            <h1>Note List</h1>
            < NoteListItem
                id="123"
                text="Taking notes is very important!"
                dateTimeText="1/25/2020 5:00 pm"
                onClick={handleListItemClick}
            />
        </div>
    );
}

