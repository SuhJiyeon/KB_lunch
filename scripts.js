document.getElementById('recommendBtn').addEventListener('click', function() {
    const menus = [
        {
            title: "미식반점",
            img_src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDA1MTZfMjE5%2FMDAxNzE1Nzg3NDE2NjEx.vVFh6eYT1h91SJ0MKWcBd6wmlySXX_lxLLtH8sVUcaMg.vpovruVRH7vWQZK_2kT1iXqoudlDzmZY6bdRO5jDGEUg.JPEG%2F20240511_202413.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
        },
        {
            title: "계절밥상",
            img_src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAxMTBfMTA2%2FMDAxNzA0ODYxMzYxMTcy.ZvnYa8hisi0zS-MOW_BFRwZAI8R0oobstSKruCqw1mcg.PJJg1rJAPqTgUEcUS6Wqa5trfbhPMQcL412pY02yHv8g.JPEG%2F20240110_124550.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
        },
    ];
    const randomIndex = Math.floor(Math.random() * menus.length);
    const randomMenu = menus[randomIndex];
    const randomMenuItem = document.getElementById('randomMenuItem');
    randomMenuItem.innerHTML = `
        <h2>${randomMenu.title}</h2>
        <p><img src = "${randomMenu.img_src}" width=200></p>
    `;
    document.getElementById('randomMenu').style.display = 'block';
});