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
        {
            title: "래빗홀버거",
            img_src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDAzMjNfMjgz%2FMDAxNzExMTY5NjAzNTQ4.rWX8RF7H92-PB4qaquEtq-FgunH9mcOVzyswMHOW8Xsg.Zc3AQWK0xELxR3OTRm5TVbXfnUz94VVB98S95pJ3vl0g.JPEG%2F20240323_123453.jpg.jpg%3Ftype%3Dw1500_60_sharpen"
        },
        {
            title:"카레당",
            img_src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240119_147%2F1705658489294CBfnC_JPEG%2FP1013640.JPG"
        },
        {
            title:"개미집",
            img_src: "https://search.pstatic.net/common/?src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220219_239%2F1645261678658UpO22_JPEG%2Fupload_bf9e32e43b6a978c78f53e966cce3043.jpg%3Ftype%3Dw1500_60_sharpen"
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