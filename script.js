// Simple calculator app, using JS defualt function eval()

let input1 = "";
let input2 = "";
let operatorEnabled = false;
let operator = "";
let result = "";

const textArea = document.getElementById('textArea');

document.getElementById('inputs').addEventListener('click', function(event) {
  if (event.target.localName == "button" && operatorEnabled === false) {
    input1 += event.target.textContent;
    console.log('Input1=' + input1);
    textArea.value = input1;
    
  } 
  else if (event.target.localName == "button" && operatorEnabled === true) {
    input2 += event.target.textContent;
    console.log('Input2=' + input2);
    textArea.value = input2;
  }
});

function operation(element) {
  console.log(element);
  if (input1 !== "" && operatorEnabled == false) {
    operator = this.event.target.innerText;
    operatorEnabled = true;
    textArea.value = operator;
    
  } else {
    input1 = "";
    input2 = "";
    operatorEnabled = false;
    console.log('else');
  }
  console.log(operator);
}

  function perform() {
  if (input1 !== "" && input2 !== "" && operator !== "") {
    try {
      result = eval(input1 + operator + input2);
      showResult();
    }
    catch(error) {
      alert('Error');
    }
    input1 = "";
    input2 = "";
    operator = "";
    operatorEnabled = false;
  }
}

function clear() {
  input1 = "";
  input2 = "";
  operator = "";
  operatorEnabled = false;
}

function showResult() {
  textArea.value = result;
}