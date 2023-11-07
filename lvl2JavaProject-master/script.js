    let score = 0;
    let matches = [];
    let choices = [];
    let items = {
      item1 : document.getElementById("item1"),
      item2 : document.getElementById("item2"),
      item3 : document.getElementById("item3"),
      item4 : document.getElementById("item4"),
      item5 : document.getElementById("item5"),
      item6 : document.getElementById("item6"),
      item7 : document.getElementById("item7"),
      item8 : document.getElementById("item8"),
      item9 : document.getElementById("item9"),
      item10 : document.getElementById("item10"),
      item11 : document.getElementById("item11"),
      item12 : document.getElementById("item12"), 
      item13 : document.getElementById("item13"),
      item14 : document.getElementById("item14"),
      item15 : document.getElementById("item15"),
      item16 : document.getElementById("item16")
    }

    let gridArray = [items["item1"],items["item2"],items["item3"],items["item4"],items["item5"],items["item6"],items["item7"],items["item8"],items["item9"],items["item10"],items["item11"],items["item12"],items["item13"],items["item14"],items["item15"],items["item16"]]

    //do not modify this block of code, responsible for setting pairs
    const customDataAttributeValue = 'pair';
    for (let i = 0; i < gridArray.length; i += 2) {
      const pairValue = i / 2 + 1
      gridArray[i].dataset.customAttribute = customDataAttributeValue + pairValue;
      gridArray[i + 1].dataset.customAttribute = customDataAttributeValue + pairValue;
    }


    //im gonna keep it a buck with you, i had to use chat gpt for this part because i had like 30 aneurysms trying to do this for like 3 hours
    function shuffleGrid() {
      const dataAttributes = gridArray.map(item => item.dataset.customAttribute);
      for (let i = dataAttributes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dataAttributes[i], dataAttributes[j]] = [dataAttributes[j], dataAttributes[i]];
      }
      gridArray.forEach((item, index) => {
        item.dataset.customAttribute = dataAttributes[index];
      });
    }
    


    function initialize() {
      score = 0;
      matches = [];
      choices = [];
      shuffleGrid();
    
      // Update the items object with the shuffled elements
      gridArray = Array.from(document.querySelector(".grid").children);
      items = {};
      gridArray.forEach(function (element, index) {
        items['item' + (index + 1)] = element;
      });
    }

    function reset() {
      location.reload()
    }

    function updateGame(objectName) {
      const object = items[objectName];
      if (!matches.includes(object) && !choices.includes(object)) {
        const customAttribute = object.dataset.customAttribute;
        choices.push(object);
        score++;
        // Get the image element within the button
        const img = object.querySelector("img");
    
        if (customAttribute === "pair1") {
          img.src = "zblueface.png";
        } else if (customAttribute == "pair2") {
          img.src = "zCat.PNG";
        } else if (customAttribute == "pair3") {
          img.src = "zgoat.PNG";
        } else if (customAttribute == "pair4") {
          img.src = "zshocked.PNG";
        } else if (customAttribute == "pair5") {
          img.src = "zmonke.PNG";
        } else if (customAttribute == "pair6") {
          img.src = "zlobster.PNG";
        } else if (customAttribute == "pair7") {
          img.src = "zcutegoat.PNG";
        } else if (customAttribute == "pair8") {
          img.src = "zBAJABLAST.gif";
        }
        
        if (choices.length == 2) {
          if (choices[0].dataset.customAttribute === choices[1].dataset.customAttribute) {
            // Images match, push them to the matches list, causing them to be unclickable and stay revealed
            matches.push(choices[0]);
            matches.push(choices[1]);
            choices = [];
          } else {
            // Sets both images that didn't match back to the default after a delay
            setTimeout(() => {
              choices[0].querySelector("img").src = "zDefault.jpg";
              choices[1].querySelector("img").src = "zDefault.jpg";
              choices = [];
            }, 250);
          }
        }
        document.getElementById("score").textContent = "Score: " + score;
      }
      let getMessage = document.getElementById("winMessage")
      if(matches.length >= 16){
        if(score <= 24){
          getMessage.textContent = "You gotta be cheating!"
        }
        else if(score<=38){
          getMessage.textContent = "You're pretty good at this! But you could be better"
        }
        else if(score<=48){
          getMessage.textContent = "Did you go to losertown? Because you're kinda a loser with a score like this... You sure you didn't go to jupiter to get stupider?  "
        }
      }
    }
    //testing that the pairing works
    for(let i = 0; i < gridArray.length; i++){
      console.log(gridArray[i].dataset.customAttribute);
      console.log(gridArray[i]);
    }

