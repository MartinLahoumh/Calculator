//Global Vars

//Declare two empty arrays. One will store the numbers the other the operations.
let userNums = []; 
let userOps = [];
let shiftLeftVal = 0;
let fontSizeVal = 95;
//Model
function getInput(event){
    let element = event.target.id; // Tracks down the operation that was pressed
    if(element != "="){
        userOps.push(element); //store the operation in the userOps array
    }
    element = document.getElementById("text-box").innerHTML; //get the value of the number 
    userNums.push(element); //store number in userNum array 
    console.log(userNums);
    console.log(userOps);
    document.getElementById("text-box").innerHTML = ""; //reset the display screen
    //Reset shift and font for display
    document.getElementById("text-box").style.right = 0;
    document.getElementById("text-box").style.fontSize = 95;
    shiftLeftVal = 0;
    fontSizeVal = 95;
}

function checkNegativeNums(){
    for(let i = 0; i < userOps.length; i++){
        if(userOps[i] == "-"){
            if(i != 0 && i != userOps.length - 1){
                userNums[i+1] = "-" + userNums[i+1];
                userOps[i] = "+";
            }
        }
    }
    console.log(userOps);
    console.log(userNums);
}
//Controller

function solveOperation(){
    let tempOperator;
    let indexOfOperator;
    checkNegativeNums();
    while(userOps.length != 0){
        for(let i = 0; i < userOps.length; i++){
            if(userOps[i] == "*" || userOps[i] == "/"){
                tempOperator = userOps[i];
                indexOfOperator = i;
            }
            else{
                if(tempOperator != "*" && tempOperator != "/"){
                    tempOperator = userOps[i];
                    indexOfOperator = i;
                }
            }
        }
        console.log(tempOperator);
        if(tempOperator == "*"){
            userNums[indexOfOperator] = parseInt(userNums[indexOfOperator]) * parseInt(userNums[indexOfOperator + 1]);
        }
        else if(tempOperator == "/"){
            userNums[indexOfOperator] = parseInt(userNums[indexOfOperator]) / parseInt(userNums[indexOfOperator + 1]);
        }
        else if(tempOperator == "+"){
            userNums[indexOfOperator] = parseInt(userNums[indexOfOperator]) + parseInt(userNums[indexOfOperator+1]);
        }
        else if(tempOperator == "-"){
            userNums[indexOfOperator] = parseInt(userNums[indexOfOperator]) - parseInt(userNums[indexOfOperator+1]);
        }
        //remove the operation you just did 
        userNums.splice(indexOfOperator+1, 1);
        userOps.splice(indexOfOperator, 1);
        console.log(userNums);
        console.log(userOps);
        //reset the temp operator
        tempOperator = "";
    }

    //at the end, your result will be stored in userNums[0]
    document.getElementById("text-box").innerHTML = userNums[0];
}

//View
function display(event){
    let element = document.getElementById("text-box")
    element.innerHTML = element.innerHTML + event.target.id;
    shiftLeftVal += 25;
    fontSizeVal -= 6;
    element.style.fontSize = fontSizeVal + "px";
    element.style.right = shiftLeftVal + "px"
}

//Determines the type of reaction that will play depending on the button that is pressed
function playReaction(event){
    let element = event.target.id;
    if(element == "=" || element == "+" || element == "-" || element == "*" || element == "/" || element == "c"){
        document.getElementById("main-gif").style.opacity = 1;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "0"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 1;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "1"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 1;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "2"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 1;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "3"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 1;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "4"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 1;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "5"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 1;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "6"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 1;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "7"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 1;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "8"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 1;
        document.getElementById("nine-gif").style.opacity = 0;
    }
    else if(element == "9"){
        document.getElementById("main-gif").style.opacity = 0;
        document.getElementById("zero-gif").style.opacity = 0;
        document.getElementById("one-gif").style.opacity = 0;
        document.getElementById("two-gif").style.opacity = 0;
        document.getElementById("three-gif").style.opacity = 0;
        document.getElementById("four-gif").style.opacity = 0;
        document.getElementById("five-gif").style.opacity = 0;
        document.getElementById("six-gif").style.opacity = 0;
        document.getElementById("seven-gif").style.opacity = 0;
        document.getElementById("eight-gif").style.opacity = 0;
        document.getElementById("nine-gif").style.opacity = 1;
    }
}