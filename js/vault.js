const vaultEntryList = document.getElementById("vault-entry-list");
const entryCount = document.getElementById("entry-count");
const searchInput = document.getElementById("search-entries");
const sortSelect = document.getElementById("sort-entries");

let entries = JSON.parse(localStorage.getItem("entries")) || [];

function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function renderEntries(entriesToRender) {
    vaultEntryList.innerHTML = "";

    entriesToRender.forEach((entry) => {
        const li = document.createElement("li");
        const entryTitle = document.createElement("h3");
        const entryBody = document.createElement("p");
        const entryDate = document.createElement("span");
        const entryLink = document.createElement("a");
        const buttonContainer = document.createElement("div");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        li.classList.add("liquid-glass","px-4","py-3","container","d-flex","flex-column","justify-content-center","align-items-center","gap-3","text-center");
        entryTitle.classList.add("fs-4","fw-bold");
        entryDate.classList.add("small","opacity-75");
        entryLink.classList.add("text-decoration-none","entry-title-link");
        buttonContainer.classList.add("entry-buttons","d-flex","flex-row","justify-content-center","gap-5");
        editButton.classList.add("glass-button");
        deleteButton.classList.add("glass-button","glass-button-danger");

        entryTitle.textContent = entry.title;
        entryBody.textContent = entry.body;
        entryDate.textContent = formatDate(new Date(entry.createdAt));

        entryLink.href = `entry.html?id=${entry.id}`;

        editButton.textContent = "EDIT";
        deleteButton.textContent = "DELETE";

        editButton.type = "button";
        deleteButton.type = "button";

        editButton.dataset.entryId = entry.id;
        deleteButton.dataset.entryId = entry.id;

        editButton.addEventListener("click", function () {
            const entryId = editButton.dataset.entryId;

            window.location.href = `entry.html?id=${entryId}&mode=edit`;
        });

        deleteButton.addEventListener("click", function () {
            const entryId = deleteButton.dataset.entryId;

            entries = entries.filter((entry) => entry.id !== entryId);

            localStorage.setItem("entries", JSON.stringify(entries));

            updateVault();
        });

        entryLink.appendChild(entryTitle);

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(entryLink);
        li.appendChild(entryBody);
        li.appendChild(entryDate);
        li.appendChild(buttonContainer);

        vaultEntryList.appendChild(li);
    });
}

function updateVault() {
    const searchValue = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;

    let filteredEntries = entries.filter((entry) =>
        entry.title.toLowerCase().includes(searchValue)
    );

    if (sortValue === "newest") {
        filteredEntries.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortValue === "oldest") {
        filteredEntries.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sortValue === "title") {
        filteredEntries.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderEntries(filteredEntries);
    entryCount.textContent = filteredEntries.length;
}

searchInput.addEventListener("input", updateVault);
sortSelect.addEventListener("change", updateVault);

updateVault();