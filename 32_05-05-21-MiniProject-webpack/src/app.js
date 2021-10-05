import { getUsers } from "./users";
import { tabsListener } from "./tabsListener";

const main = () => {
  getUsers();
  tabsListener();
};

main();
