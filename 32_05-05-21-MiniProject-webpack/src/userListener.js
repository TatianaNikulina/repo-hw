import { getInfo } from "./getInfo";
import { getTodos } from "./getTodos";
import { getPosts } from "./getPosts";
import { getAlbums } from "./getAlbums";

const usersListener = () => {
  const list = document.querySelectorAll("#users div");
  for (let item of list) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const [, id] = event.currentTarget.id.split("_"); // -> [user, id]
      document.querySelector("#tabs").classList.remove("hidden");
      getInfo(id);
      getTodos(id);
      getPosts(id);
      getAlbums(id);
    });
  }
};

export { usersListener };
