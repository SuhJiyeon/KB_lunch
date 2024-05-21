document.addEventListener('DOMContentLoaded', () => {
    const menus = [
        "미식반점",
        "계절식당",
    ];

    const button = document.getElementById('generateButton');
    const menuDisplay = document.getElementById('menuDisplay');

    button.addEventListener('click', () => {
        const randomMenu = menus[Math.floor(Math.random() * menus.length)];
        menuDisplay.textContent = randomMenu;
    });
});
