

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

        let submitButton = document.querySelector("#submit");

        let playerStartButton = document.querySelector(".playerStart");

        let playerX = document.querySelector("#player1");
        let playerO = document.querySelector("#player2");

        let gameCont = document.querySelector(".gameContainer");

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

         let endMessage = document.querySelector(".endgameMessage");

         let restartButton = document.querySelector(".restart");


         submitButton.addEventListener("click", () => {
            playerStartButton.innerHTML = playerX.value.bold() + " starts with X. " 
            + playerO.value.bold() + " follows with O"; 

            gameCont.style.visibility = "visible";  
         })

         
            restartButton.addEventListener("click", () => {
                buttons.forEach(ev => {
                    ev.textContent = "";
                    ev.disabled = false;
                    gameboard = ["X","O","X","O","X","O","X","O","X"]
                    playerStartButton.textContent = "";
                    endMessage.textContent = "";
                    gameCont.style.visibility = "hidden"; 
                }) 
            })
            
         

         buttons.forEach(button => {
            button.addEventListener("click", (e) => {
               
                if (gameboard.length > 0) { 
                   e.target.textContent = gameboard.splice(0, 1);  
                   button.disabled = true;
                }

                if((button0.textContent === "X" && button1.textContent === "X" && button2.textContent === "X") ||
                   (button3.textContent === "X" && button4.textContent === "X" && button5.textContent === "X") ||
                   (button6.textContent === "X" && button7.textContent === "X" && button8.textContent === "X") ||
                   (button0.textContent === "X" && button3.textContent === "X" && button6.textContent === "X") ||
                   (button1.textContent === "X" && button4.textContent === "X" && button7.textContent === "X") ||
                   (button2.textContent === "X" && button5.textContent === "X" && button8.textContent === "X") ||
                   (button0.textContent === "X" && button4.textContent === "X" && button8.textContent === "X") ||
                   (button2.textContent === "X" && button4.textContent === "X" && button6.textContent === "X") ) 
                   {
                    //console.log("Player X Won");
                    endMessage.textContent = playerX.value + " Won. Congratulations!";
                    gameboard = [];
                }

        else if  ((button0.textContent === "O" && button1.textContent === "O" && button2.textContent === "O") ||
                  (button3.textContent === "O" && button4.textContent === "O" && button5.textContent === "O") ||
                  (button6.textContent === "O" && button7.textContent === "O" && button8.textContent === "O") ||
                  (button0.textContent === "O" && button3.textContent === "O" && button6.textContent === "O") ||
                  (button1.textContent === "O" && button4.textContent === "O" && button7.textContent === "O") ||
                  (button2.textContent === "O" && button5.textContent === "O" && button8.textContent === "O") ||
                  (button0.textContent === "O" && button4.textContent === "O" && button8.textContent === "O") ||
                  (button2.textContent === "O" && button4.textContent === "O" && button6.textContent === "O") ) 
                  {
                    //console.log("Player O Won");
                    endMessage.textContent = playerO.value + " Won. Congratulations!";
                    gameboard = [];
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



