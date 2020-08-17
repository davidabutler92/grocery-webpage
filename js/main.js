$(document).ready(function() {
  $("#list").submit(function(event) {
    event.preventDefault();

    const item1 = $("#item1").val();
    const item2 = $("#item2").val();
    const item3 = $("#item3").val();
    // console.log(item1, item2, item3);
  });
});