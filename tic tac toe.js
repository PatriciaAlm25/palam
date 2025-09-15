let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0, 1, 2],
    [0, 3 ,6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame =()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            turnO=false;
        } else{
            box.innerText="X";
            turnO=true;
        }
            box.disabled=true;
            checkwinner();
    }); 
});

const disableBoxes = () => {
    for(let box of boxes){
        box.diasabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    
    };
};

function createGlitter(x, y) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = `${x - 8}px`;
    glitter.style.top = `${y - 8}px`;
    glitter.style.setProperty('--rand', Math.random());
    document.body.appendChild(glitter);
    glitter.addEventListener('animationend', () => glitter.remove());
}

function sprinkleGlitter(count = 40) {
    for (let i = 0; i < count; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createGlitter(x, y);
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    msg.classList.add("animate-winner");
    disableBoxes();

    // Sprinkle glitter when winner is announced
    sprinkleGlitter(50);

    setTimeout(() => {
        msg.classList.remove("animate-winner");
    }, 1000);
}

// ...existing code...

const checkwinner = () => {
    for(let pattern of winPatterns){
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
    
     if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val===pos2Val && pos2Val ===pos3Val){
            
            showWinner(pos1Val);
        }
     }
        
    }
};

//document.addEventListener('mousedown', (e) => {
    //createGlitter(e.clientX, e.clientY);
//});


// ...existing code...
const startBtn = document.getElementById("start-btn");
const gameArea = document.getElementById("game-area");
const box1 = document.getElementById("box1");

startBtn.addEventListener("click", () => {
    startBtn.classList.add("hide");      // Hide the Start button
    box1.classList.add("hide");          // Hide box1 (if you want)
    gameArea.classList.remove("hide");   // Show the game area
});

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



