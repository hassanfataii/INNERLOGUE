import { showMessage } from "./utils.js";
const entryForm = document.querySelector("#entry-form");
const titleInput = document.querySelector("#entry-title");
const bodyInput = document.querySelector("#entry-body");
let entries = JSON.parse(localStorage.getItem("entries")) || [];
const formMessage = document.getElementById("form-message");

entryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
        showMessage(formMessage, "Please fill in both the title and reflection.", "error");
        return;
    }

    const newEntry = {
        id: crypto.randomUUID(),
        title: title,
        body: body,
        createdAt: new Date().toISOString()
    };

    entries.push(newEntry);

    localStorage.setItem("entries", JSON.stringify(entries));

    entryForm.reset();

    showMessage(formMessage, "Entry saved.", "success");
});