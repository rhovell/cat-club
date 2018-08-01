// Global variables
var i;
// Model ********************************
var model = {
    admin: false,
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
        adminView.init();
      },
      getCats: function() {
        return model.cats;
      },
      getCurrentCat: function(){
        return model.currentCat;
      },
      setCurrentCat: function(cat){
        model.currentCat = cat;
        adminView.render();
      },
      increaseCount: function(){
        model.currentCat.count++;
        catView.render();
        adminView.render();
      },
      showAdmin: function(){
          model.admin = true;
          adminView.render();
        },
        hideAdmin: function(){
          model.admin = false;
          adminView.render();
        },
        updateCat: function(currentCat){
          model.currentCat.name = document.getElementById('admin-area').catName.value;
          model.currentCat.imgSrc = document.getElementById('admin-area').catUrl.value;
          model.currentCat.count = document.getElementById('admin-area').catClicks.value;
          catView.render();
          CatListview.render();
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
                  // adminView.render();
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
          // admin view *********************************
          var adminView = {
            init: function(){
              var adminButton = document.getElementById('admin-button');
              var adminForm = document.getElementById('admin-area');
              var cancelButton = document.getElementById('admin-area').cancelInput;
              adminButton.addEventListener("click", show);
              function show(){
                adminForm.style.display = "block";
                octopus.showAdmin();
                adminButton.removeEventListener("click", show);
                adminButton.addEventListener("click", hide);
                cancelButton.addEventListener("click", hide);
              }
              function hide(){
                adminForm.style.display = "none";
                octopus.hideAdmin();
                adminButton.addEventListener("click", show);
              }
              var saveButton = document.getElementById('admin-area').saveInput;
              var currentCat = octopus.getCurrentCat();
              saveButton.addEventListener("click", (function(event){
                return function(event){
                  event.preventDefault()
                  octopus.updateCat(currentCat)
                  octopus.hideAdmin();
                  hide();
                };
              })(cat));
              this.render();
            },
            render: function(){
              var cat = octopus.getCurrentCat();
              var nameInput = document.getElementById('admin-area').catName;
              var urlInput = document.getElementById('admin-area').catUrl;
              var clickInput = document.getElementById('admin-area').catClicks;
              nameInput.value = cat.name;
              urlInput.value = cat.imgSrc;
              clickInput.value = cat.count;
              console.log(cat)
            }
          }

    // start the whole process *****************
    octopus.init();
