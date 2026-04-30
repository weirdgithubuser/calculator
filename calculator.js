let calculatorBody = document.querySelector(".calculator-body");
let calculatorScreen = document.querySelector(".calculator-screen");
let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) =>{
    button.style.width = `${(calculatorBody.offsetWidth-40)/5}px`; 
    button.style.height = `40px`;
    button.style["font-weight"] = "bold";
    button.style["margin-bottom"] = "10px"
})

let numberButtonParentDiv = document.querySelector(".numbers");
for(let i = 9; i >= 1; i--){
    let newBtn = document.createElement("button");
    newBtn.textContent = i;
    numberButtonParentDiv.appendChild(newBtn);
    newBtn.style.width = `${(calculatorBody.offsetWidth-40)/3}px`;
    newBtn.style.height = `50px`;
    newBtn.style["font-weight"] = "bold";
    newBtn.style.marginRight = "3px";
    newBtn.style.marginLeft = "3px";
    newBtn.style.margintop = "5px";
    newBtn.style.marginBottom = "5px";
}
let decimalBtn = document.createElement("button");
decimalBtn.textContent = ".";
decimalBtn.style.width = `${(calculatorBody.offsetWidth-40)/3}px`;
decimalBtn.style.height = `50px`;
decimalBtn.style["font-weight"] = "bold";
decimalBtn.style.marginRight = "3px";
decimalBtn.style.marginLeft = "3px";
decimalBtn.style.margintop = "5px";
decimalBtn.style.marginBottom = "5px";
numberButtonParentDiv.appendChild(decimalBtn);
let zeroBtn = document.createElement("button");
zeroBtn.textContent = "0";
zeroBtn.style.width = `${(calculatorBody.offsetWidth-40)/3}px`;
zeroBtn.style.height = `50px`;
zeroBtn.style["font-weight"] = "bold";
zeroBtn.style.marginRight = "3px";
zeroBtn.style.marginLeft = "3px";
zeroBtn.style.margintop = "5px";
zeroBtn.style.marginBottom = "5px";
numberButtonParentDiv.appendChild(zeroBtn);
let equalBtn = document.createElement("button");
equalBtn.textContent = "=";
equalBtn.style.width = `${(calculatorBody.offsetWidth-40)/3}px`;
equalBtn.style.height = `50px`;
equalBtn.style["font-weight"] = "bold";
equalBtn.style.marginRight = "3px";
equalBtn.style.marginLeft = "3px";
equalBtn.style.margintop = "5px";
equalBtn.style.marginBottom = "5px";
numberButtonParentDiv.appendChild(equalBtn);

numberbuttons = document.querySelector(".numbers");
numberbuttons.addEventListener("click", function(event){
    calculatorScreen.value += event.target.textContent;
});

operatorButtons.forEach((button) => {
    button.addEventListener("click",function(event){
        if(event.target.textContent === "AC"){
        calculatorScreen.value = "";
    }else if(['+','-','x','÷'].includes(event.target.textContent)){
        if(!(['+','-','x','÷'].includes(calculatorScreen.value.slice(-1)))){
            calculatorScreen.value += event.target.textContent;
        }
    }
    })
})


