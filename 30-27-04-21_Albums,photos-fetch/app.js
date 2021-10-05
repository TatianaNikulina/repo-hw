// ЗАДАНИЕ 1. UserList -> UL
// 2. По клику на юзера открыть его альбомы
// 3. По клику на альбом открыть его фотографии
// DataSource - https://jsonplaceholder.typicode.com/

const renderUsers = (userList) => {
  userList.forEach((user) => {
    document.querySelector(
      "#userList"
    ).innerHTML += `<li id="user_${user.id}">${user.name}</li>`;
  });
};

const usersListener = () => {
  const list = document.querySelectorAll("#userList li");
  for (let item of list) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      getTodos(id);
      getAlbums(id);
    });
  }
};

const getTodos = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .then((response) => response.json())
    .then((data) => renderToDoList(data));
};

const renderToDoList = (todoList) => {
  // вариант с динамическим созданием h2  в div-е:
  // const header = document.createElement("h2");
  // document.querySelector("#toDoSection").innerHTML = "";
  // header.innerText = "ToDo";
  // document.querySelector("#toDoSection").appendChild(header);
  const todos = document.querySelector("#todoList");
  todos.innerHTML = "";
  todoList.forEach((todo) => {
    document.querySelector("#todoList").innerHTML += `<li>${todo.title}</li>`;
  });
};

const getAlbums = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderAlbumList(data);
      albumsListener();
    });
};

const renderAlbumList = (albumList) => {
  const albums = document.querySelector("#albumList");
  albums.innerHTML = "";
  albumList.forEach((album) => {
    document.querySelector(
      "#albumList"
    ).innerHTML += `<li id="album_${album.id}">${album.title}</li>`;
  });
};

const albumsListener = () => {
  const albums = document.querySelectorAll("#albumList li");
  for (let item of albums) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.target.id.split("_");
      getPhotos(id);
    });
  }
};

const getPhotos = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((response) => response.json())
    .then((data) => renderPhotoList(data));
};

const renderPhotoList = (photoList) => {
  const photos = document.querySelector("#photoList");
  photos.innerHTML = "";
  photoList.forEach((photo) => {
    // const img = document.createElement("img");
    // img.src = photo.thumbnailUrl;
    // img.style.width = "10%";
    // document.querySelector("#photoList").appendChild(img);
    document.querySelector(
      "#photoList"
    ).innerHTML += `<img src="${photo.thumbnailUrl}">`;
  });
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    renderUsers(data);
    usersListener();
  });
