const formatNoteItemText = (text) => {
    if (text !== undefined) {
        var newText = text.replace(/\n\s*\n/g, "\n");
        if (newText.trim() === 0) {
            newText = "No note text";
            return newText;
        }
        var newerText = newText.trim();
        newerText = newerText.replace(/\n/g, ' - ');
        let displayText = newerText.trim();
        if (displayText.length === 0 || displayText == null) {
            displayText = "No note text";
        }
        return displayText.length > 200 ? displayText.substring(0, 200) + "..." : displayText;
    } else {
        text = "No note text";
        return text;
    }
};


export default formatNoteItemText;
