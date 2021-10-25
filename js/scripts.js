$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
    event.preventDefault();
    let favorites = [];

    favorites.push($("#food").val());
    favorites.push($("#city").val());
    favorites.push($("#movie").val());
    favorites.push($("#musician").val());
    alert(favorites);
  });
});