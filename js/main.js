$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();

    const item1 = $("#item1").val();
    const item2 = $("#item2").val();
    const item3 = $("#item3").val();
    // console.log(item1, item2, item3);

    const groceryItems = [item1, item2, item3];
    groceryItems.sort();
    // console.log(groceryItems);

    const groceryList = document.createElement('ul');
    // console.log(groceryList);
    groceryItems.forEach(function(groceryItem) {
      let li = document.createElement('li');
      li.textContent = groceryItem;
      list.appendChild(li);
      const insert = document.querySelector("#insert");
      insert.appendChild(list);
      console.log(insert);
    });

  });
});