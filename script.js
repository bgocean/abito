const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    img: "./image/card-img.png",
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 1,
    img: "./image/card-img.png",
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 2,
    img: "./image/card-img.png",
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 3,
    img: "./image/card-img.png",
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 4,
    img: "./image/card-img.png",
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 5,
    img: "./image/card-img.png",
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item, idx) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `  
        <a class="content-main__list-item" href="/product.html">
                  <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="${item.title}" />
                  </div>
                  <h5 class="content-main__list-item--title">
                    ${item.title}
                  </h5>
                  <strong class="content-main__list-item--price">${item.price}</strong>
                  <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc"
                      >${item.desc}</span
                    >
                    <span class="content-main__list-item--desc"
                      >${item.date}</span
                    >
                  </div>
                </a>
        `
    );
  });
};

cardWrapper.style.justifyContent = "flex-start";
// cardWrapper.style.rowGap = "normal";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  console.log(searchInput.value);
});
