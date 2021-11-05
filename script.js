let jokeItem = document.querySelector(".jokeItem");
let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let deleteButtonWidth = (window.screen.width * 40) / 100;
/* console.log(deleteButtonWidth); */
let touchParentElement;
let touchElement;
let deleteStorage = window.localStorage;
/* let deleteIcon; */

document.querySelector("main").addEventListener("touchstart", (e) => {
  /*  console.log("touchstart"); */
  touchParentElement = e.target.parentElement;
  touchElement = e.target;
  touchCordinateStart = e.touches[0].clientX;

  touchElement.addEventListener("touchmove", (e) => {
    /*  console.log("touchmove"); */
    touchCordinateMove = Math.floor(e.touches[0].clientX);

    if (
      touchCordinateMove < touchCordinateStart &&
      touchCordinateMove > touchCordinateStart - deleteButtonWidth
    ) {
      touchElement.style.transform = `translateX(${
        touchCordinateMove - touchCordinateStart
      }px)`;
    }
  });

  touchElement.addEventListener("touchend", (e) => {
    /*  console.log("touchend"); */
    touchCordinateEnd = Math.floor(e.changedTouches[0].clientX);
    if (touchCordinateEnd < touchCordinateStart - deleteButtonWidth / 2) {
      touchElement.style.transform = `translateX(-${deleteButtonWidth}px)`;
    } else {
      touchElement.style.transform = `translateX(${e.target.offsetLeft})`;
    }
  });

  touchParentElement
    .querySelector(".deleteItem")
    .addEventListener("click", (e) => {
      touchParentElement = e.target.parentElement;
      touchElement = e.target;
      touchParentElement.classList.add("animate__fadeOutLeft");
      setTimeout(() => {
        document.querySelector("section").classList.add("collapsed");
      }, 800);
      setTimeout(() => {
        document.querySelector("section").remove();
      }, 900);
    });
});

/* parentElement.classList.add("animate__fadeOutLeft");
setTimeout(() => {
  document.querySelector("section").classList.add("collapsed");
}, 800);
setTimeout(() => {
  document.querySelector("section").remove();
}, 900); */

/* document.querySelector(".deleteItem").addEventListener("click", () => {
  document.querySelector("section").classList.add("animate__fadeOutLeft");
  setTimeout(() => {
    document.querySelector("section").classList.add("collapsed");
  }, 800);
  setTimeout(() => {
    document.querySelector("section").remove();
  }, 900);
});

jokeItem.addEventListener("touchstart", (e) => {
  touchCordinateStart = e.touches[0].clientX;
}); */
