import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListPage from "./NoteListPage";
import NoteListItem from "./NoteListItem";

export default {
    title: "NoteListPage",
    component: NoteListPage
};

export const Basic = () => {
    return (
        <NoteListPage />
    );
};