
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("langToggle");
    const langs = ["zh", "en", "kr"];
    let current = 0;

    toggleBtn.addEventListener("click", () => {
        current = (current + 1) % langs.length;
        const lang = langs[current];
        document.querySelectorAll("[data-" + lang + "]").forEach(el => {
            el.textContent = el.getAttribute("data-" + lang);
        });
    });
});
