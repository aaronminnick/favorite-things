$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
    event.preventDefault();
    let favorites = [];

    favorites.push($("#food").val());
    favorites.push($("#city").val());
    favorites.push($("#movie").val());
    favorites.push($("#musician").val());

    //make a new array using [] to target specific elements
    
    let newFavorites=[];
    newFavorites.push(favorites[1]);
    newFavorites.push(favorites[0]);
    newFavorites.push(favorites[2]);

    //display new array as HTML <ul> tags

    $("#new-favorites").append("<li>" + newFavorites[0] + "</li>");
    $("#new-favorites").append("<li>" + newFavorites[1] + "</li>");
    $("#new-favorites").append("<li>" + newFavorites[2] + "</li>");
    
  });
});