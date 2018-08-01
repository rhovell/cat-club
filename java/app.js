// Global variables
var i;
// Model ********************************
var model = {
    currentCat: null,
    cats: [
      {
        name: "Molly",
        count: 0,
        imgSrc: "img/Molly.jpg"
      },
      {
        name: "Oscar",
        count: 0,
        imgSrc: "img/Oscar.jpg"
      },
      {
        name: "Milo",
        count: 0,
        imgSrc: "img/Milo.jpg"
      },
      {
        name: "Gato",
        count: 0,
        imgSrc: "img/Gato.jpg"
      },
      {
        name: "Whiskers",
        count: 0,
        imgSrc: "img/Whiskers.jpg"
      },
      {
        name: "Joey",
        count: 0,
        imgSrc: "img/Joey.jpg"
      },
      {
        name: "Fred",
        count: 0,
        imgSrc: "img/Fred.jpg"
      }
    ]
    };

// Octopus ***********************

    var octopus = {
      init: function() {
        model.currentCat = model.cats[0];
        CatListview.init();
        catView.init();
      },
      getCats: function() {
        return model.cats;
      },
      getCurrentCat: function(){
        return model.currentCat;
      },
      setCurrentCat: function(cat){
        model.currentCat = cat;
      },
      increaseCount: function(){
        model.currentCat.count++;
        catView.render();
      }
    };

// CatList view  ***********************
    var CatListview = {
        init: function(){
          this.catList = document.getElementById('catList');

          this.render();
      },
        render: function(){
          var cats = octopus.getCats();

          this.catList = document.getElementById('catList');
          this.catList.innerHTML = "";
          for(i = 0; i < cats.length ; i++){
            cat = cats[i];
            var button = document.createElement('li');
            button.textContent = cat.name;

            var choice = $('.cat-list');
              button.addEventListener("click", (function(catCopy){
                return function(){
                  octopus.setCurrentCat(catCopy)
                  catView.render();
                };
              })(cat));
              this.catList.appendChild(button);
          }
          }
        };
        // catview **********************
      var catView = {
              init: function(){
                this.catbox = document.getElementById('catBox');
                this.catName = document.getElementById('catName');
                this.catImg = document.getElementById('catImg');
                this.count = document.getElementById('cat-counter')

                this.catImg.addEventListener("click", function(){
                      octopus.increaseCount();
                });
                this.render();
              },
              render: function(){
                var currentCat = octopus.getCurrentCat();
                var likeImg = " x <img src='/img/like.svg' class = 'like'>";
                this.catImg.src = currentCat.imgSrc;
                this.count.innerHTML = currentCat.count + likeImg;
                this.catName.textContent = currentCat.name;
              }
          }

    // start the whole process *****************
    octopus.init();
