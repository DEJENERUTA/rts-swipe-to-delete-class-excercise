axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
  const users = response.data;

  users.forEach((user) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.classList.add("animate__animated");
    section.setAttribute("id", user.id);

    const deleteItem = document.createElement("div");
    deleteItem.classList.add("deleteItem");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash");
    deleteItem.appendChild(deleteIcon);

    const jokeItem = document.createElement("article");
    jokeItem.classList.add("jokeItem");
    jokeItem.textContent = user.name;

    section.appendChild(deleteItem);
    section.appendChild(jokeItem);
    main.appendChild(section);
  });
});
