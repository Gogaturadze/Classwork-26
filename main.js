// 3.1
/* let num1 = 7.45;
let num2 = "13.56";

let result = (num1, num2) => Math.round(num1) * parseInt(Math.round(num2));

document.write(result(num1, num2)); */
//

// 3.2

/* let num3 = 20.3;
let num4 = 27.2;

let result2 = (num3, num4) => (num3 + num4).toFixed(2);

document.write(result2(num3, num4)); */

// 3.3

/* let num = 77;

let result3 = (num) => Math.sqrt(num).toFixed(1);

document.write(result3(num)); */

// 3.4

/* let num5 = 3.55;

let result4 = (num5) => (num5 ** 3).toFixed(2);

document.write(result4(num5)); */

// 3.5

/* let info = (string) => string;

alert(info("რამე")); */

// 3.6

/* let exponentiation = (a, b) => Math.pow(a, b);

alert(exponentiation(5, 2)); */

// 3.7

/* let isEven = (isNum) => {
  if (isNum % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

document.write(isEven(6)); */

// 3.8

/* let strNum = (str, num) => str.slice(0, num);

document.write(strNum("Hello", 4)); */

// 3.9
/* let myAdd = document.getElementById("my-Address");

let address = (addr) => {
  let address = document.createElement("p");
  address.textContent = addr;
  myAdd.appendChild(address);
};

address("ბათუმი"); */

// 3.10

/* let result5 = (x, y) => {
  let result = x * y;

  let ones = Math.round(result / 10);
  let dozens = Math.round(result / 10) * 10;
  let hundreds = Math.round(result / 10) * 100;

  document.write(`ერთეული: ${ones},ათეული: ${dozens},ასეული: ${hundreds}`);
};

result5(4, 5); */

// 3.11

/* let sliceHtml = (string) => string.replaceAll("HTML", "");
document.write(sliceHtml("text with HTML")); */

// 3.12

/* let squared = (numForSqrt) => Math.sqrt(numForSqrt);

document.write(squared(10)); */
