let day = 1;

const wishes = [
  "<span class='maa'>मां शैलपुत्री</span> bless you 🙏",
  "<span class='maa'>मां ब्रह्मचारिणी</span> give you strength 💪",
  "<span class='maa'>मां चंद्रघंटा</span> remove fear 🛡️",
  "<span class='maa'>मां कूष्मांडा</span> bring happiness 🌼",
  "<span class='maa'>मां स्कंदमाता</span> bless family 👨‍👩‍👧",
  "<span class='maa'>मां कात्यायनी</span> fulfill wishes ✨",
  "<span class='maa'>मां कालरात्रि</span> destroy negativity 🔥",
  "<span class='maa'>मां महागौरी</span> give peace 🕊️",
  "<span class='maa'>मां सिद्धिदात्री</span> grant success 🎯"
];

// Start Site
function startSite() {
  document.getElementById("overlay").style.display = "none";
}

// Next Day Function
function nextDay() {
  if (day < 9) {
    day++;
    document.getElementById("day").innerText = "Day " + day;
    document.getElementById("wish").innerHTML = wishes[day - 1];
  } else {
    alert("🎉 Happy Navratri 🎉");
  }
}

// Open Video
function openVideo() {
  document.getElementById("videoModal").style.display = "flex";
}

function closeVideo() {
  const video = document.getElementById("popupVideo");
  video.pause();
  video.currentTime = 0;
  document.getElementById("videoModal").style.display = "none";
}

// auto close when video ends
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("popupVideo");
  video.onended = function () {
    closeVideo();
  };
});