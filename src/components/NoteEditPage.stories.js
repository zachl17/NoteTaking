import React from "react";
import { action } from "@storybook/addon-actions";
import NoteEditPage from "./NoteEditPage";
import ReactMarkdown from 'react-markdown';

export default {
    title: "NoteEditPage",
    component: NoteEditPage
};
// truncate text
export const TruncateText = () => {
    const MAX_LENGTH = 200;
    const textTest = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, felis maximus tristique ornare, felis augue blandit neque, sodales vestibulum massa orci quis tellus. Suspendisse mollis aliquam sem, ut finibus erat efficitur non. Vivamus porta dui arcu, sit amet fermentum felis aliquet metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, felis maximus tristique ornare, felis augue blandit neque, sodales vestibulum massa orci quis tellus. Suspendisse mollis aliquam sem, ut finibus erat efficitur non. Vivamus porta dui arcu, sit amet fermentum felis aliquet metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, felis maximus tristique ornare, felis augue blandit neque, sodales vestibulum massa orci quis tellus. Suspendisse mollis aliquam sem, ut finibus erat efficitur non. Vivamus porta dui arcu, sit amet fermentum felis aliquet metus.";
    return (
        <NoteEditPage id="1" createdAt={new Date()} text={textTest.length > MAX_LENGTH ? `${textTest.substring(0, MAX_LENGTH)}...` : textTest} />
    );
};

