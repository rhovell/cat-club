$(function(){
var i;
  var allCats = {
    "cats": [
      {"name": "Molly", "count": [0]},
      {"name": "Oscar", "count": [0]},
      {"name": "Milo", "count": [0]},
      {"name": "Gato", "count": [0]},
      {"name": "Whiskers", "count": [0]},
      {"name": "Joey", "count": [0]},
      {"name": "Fred", "count": [0]}
    ]
  };
    var model = {
      init: function() {

          // console.log(allCats)
          if (!localStorage.allCats) {
              localStorage.allCats = JSON.stringify(allCats);
          }
      },
      add: function(obj) {
          var data = JSON.parse(localStorage.allCats);
          data.push(obj);
          localStorage.allCats = JSON.stringify(data);
          // console.log("model.add called")
      },
      getAllCats: function() {
          // console.log(localStorage.allCats)
          return JSON.parse(localStorage.allCats);
      },
      like: function(result){
        var thisCat = document.getElementById('catBox');
        var catId = thisCat.firstChild.id;
        var i, j;
        // var data = JSON.parse(localStorage.allCats);
        // // allCats.cats[i].count
        for(i in allCats.cats){
        // var cats = localStorage.allCats;
        var catsCount = allCats.cats[i].count;
        // console.log(allCats.cats[i].name + " " + catsCount)
        var newData = allCats;
        // newData.push(result);
        localStorage.allCats = JSON.stringify(newData);
        // console.log(localStorage)
      }
        // data.push(result)
        // localStorage.allCats = JSON.stringify(data);
        // console.log(allCats.cats[i].count)
        // console.log(allCats.catId.count)
      }
    };


    var octopus = {
      addNewCat: function(cat) {
        model.add({
        content: cat
        });
        view.render();
      },
      getCats: function() {
        // console.log("getCats called")
        return model.getAllCats();
      },

      init: function() {
          model.init();
          view.init();
      },
    increaseCount: function(cat){
      model.like(cat);
    }
    };


    var view = {
        init: function() {
          var selectCat = $('.cat-list');
          selectCat.click(function(){

            })
          // octopus.addNewCat();
            view.render();
          },

        render: function(){

          (function(){
            var htmlStr = '';
            this.catList = $('#catList');
            var get = octopus.getCats();

            for(i in allCats.cats){

            htmlStr += '<li class="cats" id ="' + allCats.cats[i].name + '">' + allCats.cats[i].name + '</li>';
          };
            this.catList.html( htmlStr );

          })();
            var choice = $('.cat-list');
            var choosen = "";
            choice.on("click", function(e){
            var choosen = e.target.id;

            var htmlStr2 = '';
            var htmlStr3 = '';
            (function(){
              this.catbox = $('#catBox');
              htmlStr2 += '<li class = "cat live" id ="' + choosen + '"><h3>' + choosen + '</h3> <img src = "img/'
              + choosen + '.jpg" class = "catImage ' + choosen + ' img" id = "catImage' + choosen + '"></li></ul><div class = "counter" id = "' + choosen + 'counter"><img src="img/like.svg" class = "like"></div>';
              this.catbox.html( htmlStr2 );
              var string = allCats.cats[i];
              // var copy = copyStringCopy;
              var catId = "catImage" + choosen;
              var catImage = document.getElementById(catId);
              var counterTarget = choosen + "counter";
              catImage.addEventListener("click", function(choosen){
                    // function result(copyString){
                      for(i= 0; i < allCats.cats.length; i++){
                        
                      var result = allCats.cats[i].count++;
                      // result++;
                      console.log(result)
                  var printCount = document.getElementById(counterTarget);

                  printCount.innerHTML = result + ' x <img src="img/like.svg" class = "like">';
                  console.log(allCats.cats)
                  return result;
                  // }
                }

                octopus.increaseCount(choosen);

              });
            })();
          });
          }
      };

    octopus.init();
    // clicks on first item on page load
    var start = document.getElementById('catList').firstChild.click();
  });
// console.log(localStorage)
