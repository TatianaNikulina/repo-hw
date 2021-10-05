import { URL } from "./url";
import { usersListener } from "./userListener";

const getUsers = async () => {
  const response = await fetch(`${URL}/users`);
  const data = await response.json();
  renderUsers(data);
  usersListener();
};

const renderUsers = (users) => {
  const sect = document.querySelector("#users");
  users.forEach((user) => {
    sect.innerHTML += `<div id="user_${user.id}">
        <h2>${user.username}</h2>
        </div>`;
  });
};

export { getUsers };
