import { URL } from "./url";

const getInfo = async (id) => {
  const response = await fetch(`${URL}/users/${id}`);
  const data = await response.json();
  document.querySelector(
    "#info_content"
  ).innerHTML = `<h4>Name:</h4> ${data.name}; <br>
          <h4>E-Mail:</h4> ${data.email}; <br>
          <h4>Adress:</h4> City - ${data.address.city}, Street - ${data.address.street}, Suit -  ${data.address.suite}; <br>
          <h4>Phone:</h4> ${data.phone};  <br>
          <h4></h4>`;
};

export { getInfo };
