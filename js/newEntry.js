const entryForm = document.querySelector("#entry-form");
const titleInput = document.querySelector("#entry-title");
const bodyInput = document.querySelector("#entry-body");
let entries = JSON.parse(localStorage.getItem("entries")) || [];

entryForm.addEventListener("submit", function (event) {
    // event.preventDefault();

    const newEntry = {
        id: crypto.randomUUID(),
        title: titleInput.value,
        body: bodyInput.value,
        createdAt: new Date().toISOString()
    };

    entries.push(newEntry);

    localStorage.setItem("entries", JSON.stringify(entries));

    
});

console.log(entries);