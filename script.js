const jokeItem = document.querySelector(".jokeItem");
let touchCordinateStart;
let touchCordinateMove;

jokeItem.addEventListener("touchstart", (e) => {
  touchCordinateStart = e.touches[0].clientX;
});
jokeItem.addEventListener("touchmove", (e) => {
  touchCordinateMove = Math.floor(e.touches[0].clientX);
  if (touchCordinateMove < touchCordinateStart) {
    jokeItem.style.transform = `translateX(${
      touchCordinateMove - touchCordinateStart
    }px)`;
  }
});
