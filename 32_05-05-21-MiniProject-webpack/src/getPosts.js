import { URL } from "./url";

const getPosts = (id) => {
  fetch(`${URL}/posts?userId=${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderPost(data);
    });
};

const renderPost = (posts) => {
  document.querySelector("#posts_content").innerHTML = "";
  posts.forEach((post) => {
    document.querySelector("#posts_content").innerHTML += `
          <h3>${post.title}</h3>
          <p>${post.body}</p>`;
  });
};

export { getPosts };
