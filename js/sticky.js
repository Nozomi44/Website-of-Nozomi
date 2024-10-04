let noteId = 0;

function createStickyNote() {
    const container = document.getElementById("container");
    const note = document.createElement("div");
    note.className = "note";
    note.id = "note_" + noteId;
    note.innerHTML = `
        <div class="header">
            <span class="delete" onclick="deleteStickyNote('${note.id}', event)">Delete</span>
        </div>
        <div class="content" contenteditable="true" onclick="hidePlaceholder(this)">Click and type here!</div>
        <input type="color" class="color-picker" onchange="changeNoteColor('${note.id}', this.value)">
    `;
    note.style.position = "absolute"; // Make sure notes are absolute positioned
    container.appendChild(note);

    // Initialize note position and setup drag events
    note.addEventListener("mousedown", startDrag);
    saveNotesToLocalStorage();
    noteId++;
}

function hidePlaceholder(element) {
    if (element.innerText === "Click and type here!") {
        element.innerText = "";
        saveNotesToLocalStorage();
    }
}

function startDrag(event) {
    const note = event.currentTarget; // Reference the note
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const noteX = note.offsetLeft;
    const noteY = note.offsetTop;
    const offsetX = mouseX - noteX;
    const offsetY = mouseY - noteY;

    document.addEventListener("mousemove", dragNote);
    document.addEventListener("mouseup", stopDrag);

    function dragNote(event) {
        if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
            return; // Prevent dragging if interacting with input/textarea
        }
        event.preventDefault(); // Prevent text selection
        const newNoteX = event.clientX - offsetX;
        const newNoteY = event.clientY - offsetY;
        note.style.left = newNoteX + "px";
        note.style.top = newNoteY + "px";
        saveNotesToLocalStorage();
    }

    function stopDrag() {
        document.removeEventListener("mousemove", dragNote);
        document.removeEventListener("mouseup", stopDrag);
        saveNotesToLocalStorage();
    }
}

function deleteStickyNote(noteId, event) {
    const note = document.getElementById(noteId);
    if (note) {
        note.remove();
        saveNotesToLocalStorage();
    }
}

function resetNotes() {
    const container = document.getElementById("container");
    container.innerHTML = "";
    noteId = 0;
    localStorage.removeItem("stickyNotes");
}

function saveNotesToLocalStorage() {
    const notes = document.getElementsByClassName("note");
    const notesArray = Array.from(notes).map(note => ({
        id: note.id,
        content: note.querySelector(".content").innerText,
        top: note.style.top,
        left: note.style.left,
        color: note.querySelector(".color-picker").value // Retrieve color value from the color picker
    }));
    localStorage.setItem("stickyNotes", JSON.stringify(notesArray));
}

function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem("stickyNotes");
    if (savedNotes) {
        const notesArray = JSON.parse(savedNotes);
        notesArray.forEach(note => {
            const container = document.getElementById("container");
            const newNote = document.createElement("div");
            newNote.className = "note";
            newNote.id = note.id;
            newNote.innerHTML = `
                <div class="header">
                    <button class="delete" onclick="deleteStickyNote('${note.id}', event)" contenteditable="false">Delete</button>
                </div>
                <div class="content" contenteditable="true">${note.content}</div>
                <input type="color" class="color-picker" onchange="changeNoteColor('${note.id}', this.value)" value="${note.color}">
            `;
            newNote.style.top = note.top;
            newNote.style.left = note.left;
            newNote.style.backgroundColor = note.color;
            newNote.style.position = "absolute"; // Ensure the notes are absolutely positioned
            newNote.addEventListener("mousedown", startDrag);
            container.appendChild(newNote);
        });
    }
}

function changeNoteColor(noteId, color) {
    const note = document.getElementById(noteId);
    note.style.backgroundColor = color;
    saveNotesToLocalStorage();
}

window.addEventListener("DOMContentLoaded", loadNotesFromLocalStorage);
