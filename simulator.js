

let d = document.getElementById("demo");
let g = document.getElementById("gapcount");
let b1 = document.getElementById("BOX1");
let b2 = document.getElementById("BOX2");
let b3 = document.getElementById("BOX3");
let bx1 = document.getElementById("bx1");
let bx2 = document.getElementById("bx2");
let bx3 = document.getElementById("bx3");


function reset(){
    d.style.gap = 0;
    g.value = 0;
    d.style.flexDirection = 'row';
    d.style.justifyContent = 'start';
    d.style.alignItems = 'start';
    growreset();
}

function gap(x){
    let count = Number(g.value);
    if(x == 1){
        count += 1;
    }
    else if(x == 2 && count > 0){
        count -= 1;
    }
    g.value = count; 
    d.style.gap = count + "0px"; 
}


function direction(x){
    
    if(x == 2){
        d.style.flexDirection = 'column';
    }
    else if(x == 1){
        d.style.flexDirection = 'row';
    }
}

function justify(x){
    if(x == 1){
        d.style.justifyContent = 'start';
    }

    else if(x == 2){
        d.style.justifyContent = 'center';
    }

    else if(x == 3){
        d.style.justifyContent = 'end';
    }

    else if(x == 4){
        d.style.justifyContent = 'space-between';
    }

    else if(x == 5){
        d.style.justifyContent = 'space-around';
    }

    else if(x == 6){
        d.style.justifyContent = 'space-evenly';
    }
}

function align(x){
    d.style.alignItems = x;
}

function growreset(){
    bx1.value = "0";
    bx2.value = "0";
    bx3.value = "0";
    b1.style.flexGrow = String(bx1.value);
    b2.style.flexGrow = String(bx2.value);
    b3.style.flexGrow = String(bx3.value);
    
}

function growall(){
    
    bx1.value =  Number(bx1.value) + 1;
    bx2.value =  Number(bx2.value) + 1;
    bx3.value =  Number(bx3.value) + 1;

    b1.style.flexGrow = String(bx1.value);
    b2.style.flexGrow = String(bx2.value);
    b3.style.flexGrow = String(bx3.value);
}

function grow(x){
 if(x == 1){
    bx1.value =  Number(bx1.value) + 1;
    b1.style.flexGrow = String(bx1.value);
 }

 else if(x == 2){
    bx2.value =  Number(bx2.value) + 1;
    b2.style.flexGrow = String(bx2.value);
 }

 else if(x == 3){
    bx3.value =  Number(bx3.value) + 1;
    b3.style.flexGrow = String(bx3.value);
 }
}