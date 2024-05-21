document.addEventListener('DOMContentLoaded', () => {
    const menus = [
        "미식반점",
        "계절식당",
    ];

    const button = document.getElementById('generateButton');
    const menuName = document.getElementById('menuName');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * menus.length);
        const randomMenu = menus[randomIndex];
    });
});
