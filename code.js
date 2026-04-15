let barInput=document.querySelector("#bar");
let msg=document.querySelector("#msg span");
let btnInput=document.querySelector("#gen");
let checkboxs=document.querySelectorAll(".row input");
let display=document.querySelector("#display input");
let icon=document.querySelector("#icon");
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let num="0123456789";
let chars="!@#$%^&?"
let allchar="";

let checkboxselect=()=>{
checkboxs.forEach((checkbox)=>{
 if(checkbox.checked){
    if( checkbox.value==="uc"){
        allchar +=upper;
    }
    if(checkbox.value==="lc"){
       allchar +=lower;
    }
    if(checkbox.value==="no"){
       allchar +=num;
    }
    if(checkbox.value==="ch"){
       allchar +=chars;
    }
    if(checkbox.value===""){
        allchar===""&& allchar.length===0;
    }
}
})
return checkboxs;
}

let displayop=(element)=>{
 display.value=element;
}

let passwordgen=()=>{
    checkboxselect();
    let genpass="";
    let i=1;
    while(i<=barInput.value){
 index=Math.floor(Math.random()*allchar.length);
 genpass += allchar.charAt(index);
 i++;
 }
  console.log(genpass);
  displayop(genpass);

  icon.addEventListener("click",()=>{
    navigator.clipboard.writeText(display.value);
})


}

barInput.addEventListener("input",()=>{
    msg.value=barInput.value;
    msg.innerText=msg.value;
});

btnInput.addEventListener("click",()=>{
    passwordgen();
})

