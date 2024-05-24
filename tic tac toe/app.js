let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset')
let msgContainer = document.querySelector('.msg-container')
let newGame =document.querySelector('.newgame')
let msg =document.querySelector('#msg')

let turn0 = true;

const winnerPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgameBtn =()=>{
    turn0 = 0,
    enableBtn();
    msgContainer.classList.add('hide')
}

boxes.forEach((box) =>{
    box.addEventListener('click' , ()=>{
     console.log('box was clicked')
     if(turn0){
        box.innerText = 0,
        turn0= false;
     }else{
        box.innerText = 'X';
        turn0 =true;
     }
     box.disabled=true;
     checkWinner();
    })
});

const disableBtn =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableBtn =()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
}

const showWinner =(winner)=>{
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove('hide');
    disableBtn();
}

const checkWinner =()=>{
    for(let pattern of winnerPattern){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerText , 
                    boxes[pattern[1]].innerText , 
                    boxes[pattern[2]].innerText
                )
        let postion1 = boxes[pattern[0]].innerText ;
        let postion2 = boxes[pattern[1]].innerText ;
        let postion3 = boxes[pattern[2]].innerText ;

        if(postion1 !="" && postion2 !="" && postion3 !=""){
            if(postion1 === postion2 && postion2 === postion3){
                console.log('winner' ,postion1)
                showWinner(postion1)
            }
              
        }
    }
}


newGame.addEventListener('click', resetgameBtn) 
resetBtn.addEventListener('click' , resetgameBtn) 