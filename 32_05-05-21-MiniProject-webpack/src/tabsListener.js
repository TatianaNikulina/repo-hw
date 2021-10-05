const tabsListener = () => {
  const tabs = document.querySelectorAll("#tabsWrapper div");
  for (let tab of tabs) {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      const divs = document.querySelectorAll("#content div");
      const id = event.currentTarget.id;
      for (let div of divs) {
        if (id === div.id.split("_")[0]) {
          div.classList.remove("hidden");
          continue;
        }
        div.classList.add("hidden");
      }
    });
  }
};

export { tabsListener };
