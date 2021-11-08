let deleteItem = JSON.parse(localStorage.getItem("deleteItem"));
/* console.log(deleteItem); */
deleteItem.forEach((element) => {
  let result = JSON.parse(element);
  console.log(result.id);
});
