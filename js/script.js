
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById("langToggle");
    const langs = ["zh", "en", "kr"];

    toggleBtn.addEventListener("click", () => {
        const lang = prompt("请选择语言 / Choose language / 언어를 선택하세요 (zh, en, kr):", "zh");
        if (!langs.includes(lang)) return;
        langs.forEach(l => {
            document.querySelectorAll("[data-" + l + "]").forEach(el => {
                el.style.display = l === lang ? "block" : "none";
            });
        });
    });

    // 默认中文
    langs.forEach(l => {
        document.querySelectorAll("[data-" + l + "]").forEach(el => {
            el.style.display = l === "zh" ? "block" : "none";
        });
    });
});
