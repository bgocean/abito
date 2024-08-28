const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    img: "./image/card-img.png",
    price: "170 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 1,
    title: "Второй товар",
    img: "./image/card-img.png",
    price: "171 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 2,
    title: "Третий товар",
    img: "./image/card-img.png",
    price: "172 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 3,
    title: "Четвертый товар",
    img: "./image/card-img.png",
    price: "173 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 4,
    title: "Пятый товар",
    img: "./image/card-img.png",
    price: "174 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
  {
    id: 5,
    title: "Шестой товар",
    img: "./image/card-img.png",
    price: "175 ₽",
    date: "10 июля 11:39",
    desc: "Казань, р-н Вахитовский",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item) => {
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

const filteredArray = (array, value) => {
  console.log(array);
  console.log(value);

  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
};

cardWrapper.style.justifyContent = "flex-start";
// cardWrapper.style.rowGap = "normal";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
});
