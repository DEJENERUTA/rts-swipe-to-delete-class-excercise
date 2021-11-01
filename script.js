const jokeItem = document.querySelector(".jokeItem");
let touchCordinateStart;
let touchCordinateMove;
let deleteButtonWidth = (window.screen.width * 40) / 100;

jokeItem.addEventListener("touchstart", (e) => {
  touchCordinateStart = e.touches[0].clientX;
});
jokeItem.addEventListener("touchmove", (e) => {
  touchCordinateMove = Math.floor(e.touches[0].clientX);
  if (
    touchCordinateMove < touchCordinateStart &&
    touchCordinateMove > touchCordinateStart - deleteButtonWidth
  ) {
    jokeItem.style.transform = `translateX(${
      touchCordinateMove - touchCordinateStart
    }px)`;
  }
});
