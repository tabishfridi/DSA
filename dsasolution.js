// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
var intArra = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var inputValue = 5

for (let i = 0; i < intArra.length - 1; i++) {
    var element1 = intArra[i];

    for (let j = i + 1; j < intArra.length; j++) {
        var element2 = intArra[j];

        if (inputValue == element1 + element2) {
            console.log(element1 + " " + element2)
        }
    }
}

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

var reverseArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var start = 0;
var end = reverseArr.length - 1;
var tmp;
while (start < end) {
    tmp = reverseArr[start];
    reverseArr[start] = reverseArr[end];
    reverseArr[end] = tmp;
    start++;
    end--;
}
console.log(reverseArr);

// Q3. Write a program to check if two strings are a rotation of each other?

var str1 = "abcde"
var str2 = "cdeab"
var str3 = "bcdae"

var tmp = str1 + str1;

if (-1 != tmp.indexOf(str2)) {
    console.log("Its rotaional string")
} else {
    console.log("Its not rotaional string")
}

// Q4. Write a program to print the first non-repeated character from a string?

var str4 = "kjhjkna"

for (let index = 0; index < str4.length; index++) {
    var element = str4[index];

    if (index == str4.lastIndexOf(element)) {
        console.log("The first non-repeated character from a string " + str4 + " is: " + element)
        break;
    }
}

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 1) {
        console.log("Move disk 1 from rod " + from_rod + " to rod " + to_rod);
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
    console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod);
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

var n = 3;
towerOfHanoi(n, 'A', 'C', 'B');  // A, C, B are the name of rods



// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

function postToPre(post_exp) {
    let s = [];
    let length = post_exp.length;

    for (let i = 0; i < length; i++) {

        if (isOperator(post_exp[i])) {
            let op1 = s[s.length - 1];
            s.pop();
            let op2 = s[s.length - 1];
            s.pop();
            let temp = post_exp[i] + op2 + op1;
            s.push(temp);
        } else {
            s.push(post_exp[i] + "");
        }
    }

    let ans = "";
    while (s.length > 0)
        ans += s.pop();
    return ans;
}

let post_exp = "ABC/-AK/L-*";
console.log("Prefix of " + post_exp + ": " + postToPre(post_exp));

// Q7. Write a program to convert prefix expression to infix expression.

function preToIn(str) {
    let stack = [];

    let l = str.length;

    for (let i = l - 1; i >= 0; i--) {
        let c = str[i];

        if (isOperator(c)) {
            let op1 = stack[stack.length - 1];
            stack.pop()
            let op2 = stack[stack.length - 1];
            stack.pop()

            let temp = "(" + op1 + c + op2 + ")";
            stack.push(temp);
        }
        else {
            stack.push(c + "");
        }
    }
    return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";

console.log("Infix of " + exp + "  : " + preToIn(exp));


// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsBalanced(expr) {
    let stack = [];

    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (stack.length == 0);
}
let expr = "([{}])";

if (areBracketsBalanced(expr))
    console.log("All the brackets are closed in " + expr + ".");
else
    console.log("All the brackets are not closed in " + expr + ".");


// Q9. Write a program to reverse a stack.

function insert_at_bottom(x) {
    if (st.length == 0)
        st.push(x);
    else {
        let a = st.pop();
        insert_at_bottom(x);
        st.push(a);
    }
}

function reverse() {
    if (st.length > 0) {
        let x = st.pop();
        reverse();
        insert_at_bottom(x);
    }
}
let st = [];
st.push('1');
st.push('2');
st.push('3');
st.push('4');

console.log("Original Stack: " + st.join(" "));
reverse();

console.log("Reversed Stack: " + st.join(" "));

// Q10. Write a program to find the smallest number using a stack.

function pushToStack(x) {
    if (stack.length == 0) {
        min.push(x);
    } else {
        let minimum = Math.min(x, min[min.length - 1])
        min.push(minimum);
    }
    stack.push(x);
}

function popFromStack() {
    stack.pop();
    min.pop();
}

function getMinOfStack() {
    return min[min.length - 1];
}

let stack = [];
let min = [];

pushToStack(2);
pushToStack(0);
pushToStack(2);
pushToStack(1);
pushToStack(0);
console.log("Stack: " + stack);
console.log("Smallest Number: " + getMinOfStack());