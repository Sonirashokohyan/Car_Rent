let elements = document.querySelectorAll(".my-click");
elements.forEach(element=>{
    element.addEventListener("click", function(){
        if(element.style.color === "red"){
            element.style.color ="gray";
        }else{

            element.style.color ="red";
        }
        // element.setAttribute("style", "text-shadow: 2px 6px 6px red; color: red;");
    })
});


let elm = document.getElementById("my-click1");
elm.addEventListener("click", function(){
    if(elm.style.color === "red"){
        elm.style.color ="gray";
    }else{
        elm.style.color ="red";
    }
});

let elm2 = document.getElementById("my-click2");
elm2.addEventListener("click", function(){
    if(elm2.style.color === "blue"){
        elm2.style.color ="gray";
    }else{
        elm2.style.color ="blue";
    }
});



let select_input = document.querySelectorAll(".radio_select_input");
let centerArrow = document.querySelectorAll(".center-arrow");
centerArrow.forEach(element => {
    element.addEventListener("click", function() {
        let radioRights = document.querySelectorAll(".radio-effect");
        radioRights.forEach(radioRight => {
            if(radioRight.style.color === "white"){ 
                radioRight.style.color = "black";
                radioRight.style.background = "white";
                for(let i of select_input){
                    i.style.cssText = "color: gray; background :white"
                }
            }else{
                for(let i of select_input){
                    i.style.cssText = "background: #3563E9; color :white"
                }
                radioRight.style.color = "white";
                radioRight.style.background = "#3563E9";
            }
            


        });
    });
});

