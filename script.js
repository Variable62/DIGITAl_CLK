let Clk = document.querySelector(".clock");
let Dat = document.querySelector(".date");

setInterval(() => {
    let today = new Date();
    let Hour = today.getHours();
    let Minute = today.getMinutes();
    let Seconds = today.getSeconds();
    let date = today.toDateString();

    Clk.innerText = `${padding(Hour)} : ${padding(Minute)} : ${padding(Seconds)}`;
    Dat.innerText = date;
}, 1000);
function padding(n) {
    return n < 10 ? "0" + n : n;
}