const types = [
  {
    id: 0,
    name: "mammals",
  },
  {
    id: 1,
    name: "birds",
  },
  {
    id: 2,
    name: "reptilies",
  },
  {
    id: 3,
    name: "amphibias",
  },
];
const animals = [
  {
    id: 0,
    type: 0,
    animal: "monkey",
    src:
      "https://takiedela.ru/wp-content/uploads/2020/01/KMO_151913_00151_1.jpg",
  },
  {
    id: 1,
    type: 0,
    animal: "tiger",
    src:
      "https://icdn.lenta.ru/images/2020/04/15/09/20200415090904048/square_1280_955be8047f0367a7eae80b18b6285196.jpg",
  },
  {
    id: 2,
    type: 0,
    animal: "zebra",
    src:
      "https://cdn.pixabay.com/photo/2018/05/10/15/42/zebra-3387823_960_720.jpg",
  },
  {
    id: 3,
    type: 1,
    animal: "parrot",
    src:
      "https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFycm90fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    id: 4,
    type: 1,
    animal: "chicken",
    src:
      "https://i.pinimg.com/originals/33/5d/22/335d226820292e6e9ba084ec44e07a36.jpg",
  },
  {
    id: 5,
    type: 1,
    animal: "goose",
    src: "https://mirkur.ru/assets/img/temp/gus-seriy.jpg",
  },
  {
    id: 6,
    type: 2,
    animal: "crocodile",
    src:
      "https://s1.1zoom.ru/big0/458/Crocodiles_Alligator_Wood_log_579628_1280x720.jpg",
  },
  {
    id: 7,
    type: 2,
    animal: "turtle",
    src:
      "https://i.pinimg.com/originals/c2/38/9c/c2389c817a581fd84a653a836fffb720.jpg",
  },
  {
    id: 8,
    type: 2,
    animal: "snake",
    src: "https://72tv.ru/uploads/posts/2018-08/1534833180_1-qwlxdt0yhrm.jpg",
  },
  {
    id: 9,
    type: 3,
    animal: "frog",
    src: "https://klike.net/uploads/posts/2020-03/1584873869_7.jpg",
  },
  {
    id: 10,
    type: 3,
    animal: "lizard",
    src: "https://www.webmechta.com/f/poznay-mir/yasherica.jpg",
  },
];

types.forEach((element) => {
  const div = document.createElement("div");
  div.id = "type_" + element.id;
  const h2 = document.createElement("h2");
  h2.innerText = element.name;
  div.appendChild(h2);
  document.querySelector("#left").appendChild(div);
});

const animal_type_arr = document.querySelectorAll("#left > div");
for (element of animal_type_arr) {
  element.addEventListener("click", (event) => {
    const id = +event.currentTarget.id.split("_")[1]; //id блока слева - 0, 1, 2, 3
    const filtered_animals = animals.filter((item) => item.type === id);

    if (!filtered_animals.length) {
      return;
    }

    document.querySelector("#right").innerHTML = "";

    filtered_animals.forEach((element) => {
      const right = document.querySelector("#right");
      const h2 = document.createElement("h2");
      h2.innerText = element.animal;
      right.appendChild(h2);
      const img = document.createElement("img");
      img.src = element.src;
      img.style.width = "50%";
      right.appendChild(img);
    });
  });
}
