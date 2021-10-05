import { URL } from "./url";

const getAlbums = (id) => {
  fetch(`${URL}/albums?userId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderAlbum(data);
    });
};

const renderAlbum = (albums) => {
  document.querySelector("#albums_content").innerHTML = "";
  albums.forEach((album) => {
    document.querySelector("#albums_content").innerHTML += `
            <h3>${album.title}</h3>`;
  });
};

export { getAlbums };
