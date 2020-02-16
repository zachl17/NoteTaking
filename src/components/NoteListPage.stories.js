import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListPage from "./NoteListPage";
import NoteListItem from "./NoteListItem";

export default {
    title: "NoteListPage",
    component: NoteListPage
};
const fifteenMinuteAgo = Date.now() - (15 * 60 * 1000);

// fifteen min 
export const fifteenMinsAgo = () => {
        return (
            < NoteListItem
                key={1}
                id={1}
                text={"this note should be from 15 mins ago"}
                createdAt={fifteenMinuteAgo}
            />
        );
};
