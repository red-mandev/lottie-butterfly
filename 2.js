function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeColor() {
  var color = getRandomColor();
  $moth = $("#shape-moth");
  $("#main", $moth).attr("style", "fill:" + color);
}

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 50 },
  angle: 45,
  count: 20,
  children: {
    shape: "line",
    radius: 5,
    scale: 1,
    stroke: ["#ff4484", "#0fb4ff", "#ffeb3b"],
    strokeDasharray: "100%",
    strokeDashoffset: { "-100%": "100%" },
    duration: 700,
    easing: "quad.out",
  },
});

const bubbles = Array.from(document.getElementsByClassName("bubble"));

bubbles.map((bubble) => {
  const oldSize = window
    .getComputedStyle(bubble)
    .getPropertyValue("--bubble-size");

  bubble.addEventListener("click", function handleCLick(e) {
    bubble.removeEventListener("click", handleCLick);

    bubble.style.setProperty("--bubble-size", "0px");

    setTimeout(() => {
      burst.tune({ x: e.pageX, y: e.pageY }).replay();
    }, 1000);

    setTimeout(
      (target) => {
        target.style.setProperty("--bubble-size", oldSize);
        bubble.addEventListener("click", handleCLick);
      },
      3000,
      bubble
    );
  });
});
