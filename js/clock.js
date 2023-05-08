let name = prompt("Adınızı Yazınız");

function showTime() {
  document.querySelector(".text1.text-center").innerHTML = `Merhaba, ${name}`;
  let clock = document.querySelector("#myClock");
  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    let weekday = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    let n = weekday[day];
    clock.innerHTML = `${hour}:${min}:${sec} ${n}`;
  }, 1000);
}

showTime();
