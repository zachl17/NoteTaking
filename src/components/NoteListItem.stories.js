import React from "react";
import { action } from "@storybook/addon-actions";
import NoteListItem from "./NoteListItem";

export default {
    title: "NoteListItem",
    component: NoteListItem
};

// short text 
export const ShortText = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="This is a short note" />
    );
};
// long text
export const LongText = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat et nunc sit amet imperdiet. Curabitur volutpat sit amet est eu sodales. Nulla consequat in ligula ac varius. Vivamus augue enim, vulputate non convallis quis, hendrerit in nulla. Nam quis ligula odio. Vivamus dapibus, massa amet." />
    );
};
// markdown text
export const MarkdownText = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="This _is_ some **markdown** text" />
    );
};

const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);
const twoWeeksAgo = Date.now() - (14 * 24 * 60 * 60 * 1000);

// created less than one week ago 
export const LessThanOneWeek = () => {
    const createdAt = new Date(sixDaysAgo);
    return (
        <NoteListItem id="1" createdAt={createdAt} text="This is a note from this week" />
    );
};
// created more than one week ago
export const MoreThanOneWeek = () => {
    const createdAt = new Date(twoWeeksAgo);
    return (
        <NoteListItem id="1" createdAt={createdAt} text="This is a note from a week ago" />
    );
};
// click action
export const ClickAction = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} onClick={action("onClick")} text="This is a clickable note" />
    );
};
// Empty State 
export const EmptyText = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="" />
    );
};
// Empty State 
export const ErrorInOnClick = () => {
    const onClick = () => {
        throw new Error("simulated error");
    };
    return (
        <NoteListItem id="1" createdAt={new Date()} onClick={onClick} text="This is a clickable note" />
    );
};

// Spaces Only 
export const SpacesOnly = () => {
    return (
        <NoteListItem id="1" createdAt={new Date()} text="  " />
    );
};