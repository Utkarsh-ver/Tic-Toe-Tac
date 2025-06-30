let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let win=document.querySelector(".win");
let turnO=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7]
]
let cnt=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO && box.innerText===""){
            box.innerText="O";
            turnO=false;
        }else if(turnO===false && box.innerText===""){
            box.innerText="X";
            turnO=true;
        }
        checkWinner();
    })
})
const showWinner=(winner)=>{
    win.innerText=`Congratulation!! winner is ${winner}`;
    for(let box of boxes){
        box.disabled=true;
    }

}

const checkWinner=()=>{
     cnt++;
    for(patter of winPattern){
        let pos1val=boxes[patter[0]].innerText;
        let pos2val=boxes[patter[1]].innerText;
        let pos3val=boxes[patter[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
           if(pos1val===pos2val && pos2val===pos3val){
            showWinner(pos1val);
            
           }
        }
    }
    if(cnt==9  && win.innerText==="winner yet to decided"){
            win.innerText="Match drawn";
        }
}
reset.addEventListener("click",()=>{
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        win.innerText="Winner yet to decided"
    }

})