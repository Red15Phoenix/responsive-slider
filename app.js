let next = document.getElementById("next");
let prev = document.getElementById("prev");
let items = document.querySelectorAll(".slider > .list > .item");
let thumbnails = document.querySelectorAll(".thumbnails > .item");

// Config para
let countItem = items.length;
let itemActive = 0;

next.addEventListener("click", function () {
  itemActive += 1;

  if (itemActive >= countItem) itemActive = 0;

  showSlider();
});

prev.addEventListener("click", function () {
  itemActive -= 1;

  if (itemActive < 0) itemActive = countItem - 1;

  showSlider();
});

// auto run slider

let refreshInterval = setInterval(() => {
  next.click();
}, 5000);

function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(".slider > .list > .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnails > .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");

  //   active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  //   clear auto run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

// click thumbnail

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
