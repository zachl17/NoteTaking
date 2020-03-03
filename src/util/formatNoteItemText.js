const formatNoteItemText = (text) => {
    var newText = text.replace(/\n\n/g, '\n');
    var newerText = newText.replace(/\n/, ' - ');
    let displayText = newerText.trim();
    if (displayText.length === 0 || displayText == null) {
        displayText = "No note text";
    }
    return displayText.length > 200 ? displayText.substring(0, 200) + "..." : displayText;
};

export default formatNoteItemText;