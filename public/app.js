
var animals = [
  
  {name: "Bob Sock", food: "Flumps", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, 
  {name: "Barnaby", food: "Tuna", image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max Cat", food: "Other cats", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}, 
  {name: "Cat Buchanan", food: "fun mouse", image: "http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"}
]

var catAdder = function(name, food, image){
  //create unordered list item of class cat,
  var catULList = document.createElement("ul");
  catULList.classList.add("cat");

  //creat 3 list items for catItem
  var listItemName = document.createElement("li");
  listItemName.innerText = name;

  var listItemFavFood = document.createElement("li");
  listItemFavFood.innerText = food; 

  //give img item a src image and dimensions
  var listItemImg = document.createElement("li");
  var imageTag = document.createElement("img");
  imageTag.src = image; 
  imageTag.width = 500; 

  //append img to listitem
  listItemImg.appendChild(imageTag);

  //append list items as childre of unordered list
  catULList.appendChild(listItemName);
  catULList.appendChild(listItemFavFood);
  catULList.appendChild(listItemImg);

  //apend cat unordered list item to cats section 
  catList = document.getElementById("cats");
  catList.appendChild(catULList); 
}

var app = function(){


animals.forEach(function(animal){
  
  catAdder(animal.name, animal.food, animal.image);
})


}

window.onload = app;
