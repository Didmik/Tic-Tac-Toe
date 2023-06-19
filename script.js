

const Player = (name, marker) => {
    return { name, marker }
    };


const Player1 = Player("Tom", "X");
const Player2 = Player("Tim", "O");

//console.log(Tom);



const Gameboard = (() => {
    let gameboard = ["X","O","X","O","X","O","X","O","X"];

    const getBoard = () => gameboard;
    
    const displayController = () => { 

         let buttons = document.querySelectorAll(".box");

         let button0 = document.querySelector("#nil");
         let button1 = document.querySelector("#one");
         let button2 = document.querySelector("#two");
         let button3 = document.querySelector("#three");
         let button4 = document.querySelector("#four");
         let button5 = document.querySelector("#five");
         let button6 = document.querySelector("#six");
         let button7 = document.querySelector("#seven");
         let button8 = document.querySelector("#eight");

         let restartButton = document.querySelector(".restart");

         
            restartButton.addEventListener("click", () => {
                buttons.forEach(ev => {
                    ev.textContent = "";
                    ev.disabled = false;
                    gameboard = ["X","O","X","O","X","O","X","O","X"]
                }) 
            })
            
         


         buttons.forEach(button => {
            button.addEventListener("click", (e) => {
               
                    //console.log(gameboard)
                if (gameboard.length > 0) { 
                   e.target.textContent = gameboard.splice(0, 1);  
                   button.disabled = true;
                }

                if((button0.textContent === "X" && button1.textContent === "X" && button2.textContent === "X") ||
                (button0.textContent === "O" && button1.textContent === "O" && button2.textContent === "O")) {
                    console.log("You Won");
                }
                 
             
             })
        });
    }
    return {
      getBoard,
      displayController,
    };
  })();

  Gameboard.displayController();



