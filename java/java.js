// global variables
var body = document.body;
var main = document.querySelector('main');
// cat list TODO add any new cat as a new item to this list
var catList = [
  {"name": "Molly"},
  {"name": "Oscar"},
  {"name": "Milo"},
  {"name": "Gato"},
  {"name": "Whiskers"},
  {"name": "Joey"},
  {"name": "Fred"}];

// create sidebar
var sidebar = document.createElement('aside'); // sb for short
main.appendChild(sidebar);
var sbInner = document.createElement('div');
sidebar.appendChild(sbInner);
// create an empty ul
var catSelections = document.createElement('ul');
sbInner.appendChild(catSelections);
// assign id and class to ul
catSelections.classList = "cat-list";
catSelections.id = "catList";
// create main container to hold catContainer in
var container = document.createElement('div');
container.classList = "container";
main.appendChild(container);
// for every cat create a list element in the sidebar
for(i = 0; i < catList.length; i++){
  var catSelector = document.createElement('li');
  // assign the cat li element a name and id based on the catList "name"
  catSelector.innerHTML = catList[i].name;
  catSelections.appendChild(catSelector);
  catSelector.id = catList[i].name;
  // add an event listener to all li elements that sets the value of "selected" to the id of choosen cat
  catSelector.addEventListener("click", function(){
    // empties the element on cat selection to ensure only one shows
   $('.container').empty();
  var selected = this.id;
  console.log(selected)
    // add a container for cat element
  var catContainer = document.createElement('div');
  // assign class list to catContainer
  catContainer.classList = selected + " catBox live";
  // place catContainer into main container
  container.appendChild(catContainer);
  // create title for cat based on "selected" variable
  var title = document.createElement('h3');
  title.innerHTML = selected;
  // place the title
  catContainer.appendChild(title);
  // add the cat image
  var cat = document.createElement('img');
  // assign the src and id by using the "selected" variable
  cat.src = "img/" + selected + ".jpg";
  cat.id = selected;
  // assign cat class
  cat.classList = "cat";
  // declare empty countDefault as cat property
  cat.countDefault;
  // add the "selected" cat to the container
  catContainer.appendChild(cat);
  // create a "counter" div for cat
  var counter = document.createElement('div');
  // place counter on page
  catContainer.appendChild(counter);
  // set countDefault as variable to be used in count click function
  var countDefault = 0;
  // assign each counter a unique id based on cat's "selected" variable and class of counter
  counter.id = selected + "Counter";
  counter.classList = "counter";
  // add event listener to each cat image
  // called in iffy to ensure each cat has their own addEventListener and count function (individual counter values)
  cat.addEventListener("click", (function(countDefaultCopy){
    // takes a copy of the default count figure and returns it into the next function
    return function(){
      // increments "this" cats counter by one (this set by list item that triggered eventListener)
      countDefaultCopy += 1;
      console.log(countDefaultCopy)
      catList.forEach(function(cat){
        // changes the innerText of the cat's counter
        counter.innerText = countDefaultCopy + " x ";
        return countDefaultCopy;
        // counter.innerHTML = likeImage;
      })
      var likeImage = document.createElement('img')
      likeImage.src = 'img/like.svg';
      likeImage.classList = "like";
      counter.appendChild(likeImage);
      countDefault = countDefaultCopy;
    }
    // end of event listener to increase cat count
  })(countDefault));
  // end of eventListener for cat list
})
// end of for every cat loop
}
// click on first list item to load with page
var cats = document.getElementById('catList');
var firstCat = cats.firstChild;
firstCat.click();
