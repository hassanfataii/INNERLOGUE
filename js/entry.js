const params = new URLSearchParams(window.location.search);

const entryId = params.get("id");
const mode = params.get("mode");

let entries = JSON.parse(localStorage.getItem("entries")) || [];

let selectedEntry = entries.find((entry) => entry.id === entryId);

const entryTitle = document.getElementById("entry-title");
const entryDate = document.getElementById("entry-date");
const entryContent = document.getElementById("entry-content");

const entryView = document.getElementById("entry-view");
const editForm = document.getElementById("edit-form");
const editTitle = document.getElementById("edit-title");
const editBody = document.getElementById("edit-body");
const editButton = document.getElementById("edit-entry");
const cancelEditButton = document.getElementById("cancel-edit");

function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function showViewMode() {
    entryView.hidden = false;
    editForm.hidden = true;
}

function showEditMode() {
    entryView.hidden = true;
    editForm.hidden = false;

    editTitle.value = selectedEntry.title;
    editBody.value = selectedEntry.body;
}

if (!selectedEntry) {
    entryTitle.textContent = "Entry not found";
    entryDate.textContent = "";
    entryContent.textContent = "This entry may have been deleted or does not exist.";
}

if (selectedEntry) {
    entryTitle.textContent = selectedEntry.title;
    entryDate.textContent = formatDate(new Date(selectedEntry.createdAt));
    entryContent.textContent = selectedEntry.body;

    if (mode === "edit") {
        showEditMode();
    } else {
        showViewMode();
    }

    editButton.addEventListener("click", function () {
        showEditMode();
    });

    cancelEditButton.addEventListener("click", function () {
        showViewMode();
    });

    editForm.addEventListener("submit", function (event) {
        event.preventDefault();

        selectedEntry.title = editTitle.value;
        selectedEntry.body = editBody.value;

        localStorage.setItem("entries", JSON.stringify(entries));

        entryTitle.textContent = selectedEntry.title;
        entryContent.textContent = selectedEntry.body;

        showViewMode();
    });
}