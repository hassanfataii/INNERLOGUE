# INNERLOGUE

INNERLOGUE is a digital journaling application built with HTML, CSS, and JavaScript.

The project allows users to create journal entries, view recent reflections, search and sort saved entries, open individual entries, edit them, and keep all journal data saved after refreshing the page.

## Live Site

[View INNERLOGUE](https://innerlogue.vercel.app/)

## Features

- Create journal entries

- Save a title, reflection, and creation date

- Generate a unique ID for each entry

- View up to five recent entries on the home page

- View all saved entries in the Vault

- Search entries by title

- Sort entries by newest, oldest, or title A-Z

- Open individual journal entries

- Edit existing entries

- Delete entries from the Vault

- Save entry data with localStorage

- Restore saved entries after refresh

- Display success and error notifications

- Display empty states when no entries are available

- Truncate long entry previews while keeping the full entry available on the individual entry page

- Responsive layout for desktop, tablet, and mobile

## Built With

- HTML

- CSS

- JavaScript

- Bootstrap

- ES Modules

- localStorage

- Font Awesome

## JavaScript Concepts Used

- DOM manipulation

- Event listeners

- Form handling

- Arrays and objects

- Functions

- ES Modules

- Import and export

- Array methods including `forEach()`, `filter()`, `find()`, `sort()`, and `slice()`

- Conditional statements

- Template literals

- URLSearchParams

- UUID generation with `crypto.randomUUID()`

- Date formatting

- JSON stringify and parse

- localStorage

- Dynamic element creation

- Dynamic rendering and rerendering

- Form validation

- Timers with `setTimeout()`

## How It Works

When a user creates a journal entry, INNERLOGUE generates a unique ID and stores the title, reflection, and creation date as an object.

The entry is added to an array and saved in localStorage, allowing the application to restore all journal entries after the page is refreshed.

The home page displays up to five of the most recent entries. If no entries exist, the home page instead displays a welcome section directing the user to create their first entry.

The Vault displays all saved entries and allows users to search by title, sort entries, edit existing entries, or delete them.

Each entry can also be opened on its own page using its unique ID through the URL.

Editing an entry updates the original object in the saved entries array and stores the updated data back in localStorage.

Reusable functions such as date formatting and notification handling are shared between pages using ES Modules.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/hassanfataii/innerlogue.git