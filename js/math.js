/*eslint-env browser*/

$("secMath").addEventListener("click", (event) => {
  "use strict";

  //STEP 1
  function step1() {
    "use strict";
    let num;
    do {
      num = Number(
        window.prompt("Please enter a number (positive or negative): ")
      );
      if (isNaN(num)) {
        window.alert("Please enter a valid number");
      }
    } while (isNaN(num));
    window.console.log(
      "The positive version of " + num + " is: " + Math.abs(num)
    );
  }

  //STEP 2
  function step2() {
    "use strict";
    let num;
    do {
      num = Number(window.prompt("Enter a floating point value:"));
      if (isNaN(num)) {
        window.alert("Please enter a valid number");
      }
    } while (isNaN(num));
    window.console.log("The number: " + num + " round up is " + Math.ceil(num));
  }
  //STEP 3
  function step3() {
    "use strict";
    let num;
    do {
      num = Number(window.prompt("Enter a floating point value:"));
      if (isNaN(num)) {
        window.alert("Please enter a valid number");
      }
    } while (isNaN(num));
    window.console.log(
      "The number: " + num + " round down is " + Math.floor(num)
    );
  }

  //STEP 4
  // 2,3,67,56,25,34
  function step4() {
    "use strict";
    let strNumbers = window.prompt("Enter 5 numbers separated by commas:");
    let arrNumbers = strNumbers.trim().split(",").map(Number);
    //window.console.log(arrNumbers);
    window.console.log(
      "Of " +
        strNumbers +
        "\nThe largest number is: " +
        Math.max(...arrNumbers) +
        "\nThe smallest number is: " +
        Math.min(...arrNumbers)
    );
  }

  //STEP 5
  function step5() {
    "use strict";
    let num;
    do {
      num = Number(window.prompt("Enter a number:"));
      if (isNaN(num)) {
        window.alert("Please enter a valid number");
      }
    } while (isNaN(num));
    window.console.log("The square root of " + num + " is " + Math.sqrt(num));
  }

  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    //window.console.log(event.target.innerHTML);
    switch (event.target.innerHTML) {
      case "Step 1":
        step1();
        break;
      case "Step 2":
        step2();
        break;
      case "Step 3":
        step3();
        break;
      case "Step 4":
        step4();
        break;
      case "Step 5":
        step5();
        break;

      default:
        break;
    }
  }
});
