const recentEntriesList = document.getElementById("recent-entries-list");

const entries = JSON.parse(localStorage.getItem("entries")) || [];

const recentEntries = [...entries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

recentEntries.forEach((entry)=>{
    const title = entry.title;
    const body = entry.body;
    const date = new Date(entry.createdAt);
    const id = entry.id 

    const li = document.createElement("li");
    const entryTitle = document.createElement("h3");
    const entryBody = document.createElement("p");
    const entryDate = document.createElement("span");

    li.classList.add("liquid-glass", "px-4", "py-3", "text-center", "recent-entry-card");
    entryTitle.classList.add("fs-4", "fw-bold", "mb-2");
    entryDate.classList.add("small", "opacity-75");
    entryBody.classList.add("mb-2");

    entryTitle.textContent = title;
    entryBody.textContent = body;
    entryDate.textContent = formatDate(date);

    li.appendChild(entryTitle);
    li.appendChild(entryBody);
    li.appendChild(entryDate);
    recentEntriesList.appendChild(li);
});