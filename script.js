
let tg = window.Telegram.WebApp;

tg.expand()

let username = tg.initDataUnsafe.user.username;

let username_html = document.getElementById('username');
username_html.innerHTML = username;
