let inp = document.forms['cal']
let input = inp.getElementsByTagName("input")
let cls_btn = document.getElementsByClassName('cls_btn')[0];
let result_btn = document.getElementsByClassName('result_btn')[0];

for(let i=0;i<input.length;i++){

    if(input[i].value != "=" && input[i].value != "clear"){
        input[i].onclick = function(){
            calc(this.value);
        }
    }
}

cls_btn.onclick = function(){
    clr();
}

function calc(value){
    if(inp['result'].value == 0){
        inp['result'].value = '';
    }

    inp['result'].value += value;
}


function clr(){
    inp['result'].value = 0;
}