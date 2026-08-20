import {formatDate} from "./utils.js";
const recentEntriesList = document.getElementById("recent-entries-list");
const hero = document.getElementById("hero");
const recentEntriesSection = document.getElementById("recent-entries");
const entries = JSON.parse(localStorage.getItem("entries")) || [];

const recentEntries = [...entries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

if (entries.length === 0) {
    hero.hidden = false;
    recentEntriesSection.hidden = true;
} else {
    hero.hidden = true;
    recentEntriesSection.hidden = false;
}

recentEntries.forEach((entry) => {
    const li = document.createElement("li");
    const entryLink = document.createElement("a");
    const entryTitle = document.createElement("h3");
    const entryBody = document.createElement("p");
    const entryDate = document.createElement("span");

    li.classList.add("liquid-glass","px-4","py-3","text-center","recent-entry-card");
    entryLink.classList.add("text-decoration-none","entry-title-link");
    entryTitle.classList.add("fs-4","fw-bold","mb-2");
    entryBody.classList.add("mb-2", "entry-preview");
    entryDate.classList.add("small","opacity-75");
    entryLink.href = `entry.html?id=${entry.id}`;

    entryTitle.textContent = entry.title;
    entryBody.textContent = entry.body;
    entryDate.textContent = formatDate(new Date(entry.createdAt));

    entryLink.appendChild(entryTitle);

    li.appendChild(entryLink);
    li.appendChild(entryBody);
    li.appendChild(entryDate);

    recentEntriesList.appendChild(li);
});