export function showMessage(element, message, type) {
    element.textContent = message;
    element.hidden = false;
    element.classList.remove("save-message-success", "save-message-error", "show");

    if (type === "success") {
        element.classList.add("save-message-success");
    }

    if (type === "error") {
        element.classList.add("save-message-error");
    }

    void element.offsetWidth;
    element.classList.add("show");

    setTimeout(function () {
        element.hidden = true;
        element.classList.remove("show");
    }, 2000);
}

export function formatDate(date) {
    return date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}