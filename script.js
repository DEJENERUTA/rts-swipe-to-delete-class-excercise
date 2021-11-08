let swipeItem = document.querySelector(".swipeItem");
let touchCordinateStart;
let touchCordinateMove;
let touchCordinateEnd;
let deleteButtonWidth = (window.screen.width * 40) / 100;
let touchParentElement;
let touchElement;
let deleteStorage = window.localStorage;
let trash = [];

document.querySelector("main").addEventListener("touchstart", (e) => {
  touchParentElement = e.target.parentElement;
  touchElement = e.target;
  touchCordinateStart = e.touches[0].clientX;

  touchElement.addEventListener("touchmove", (e) => {
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
      let userObject = {
        id: touchParentElement.id,
        name: touchParentElement.querySelector(".swipeItem").textContent,
      };
      if (!trash.includes(JSON.stringify(userObject))) {
        /* bad solution, here our aray will have two value when we click */
        trash.push(JSON.stringify(userObject));
        console.log(trash);
      }

      localStorage.setItem(`deleteItem`, JSON.stringify(trash));
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
