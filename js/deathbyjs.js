/*eslint-env browser*/

$("secDeath").addEventListener("click", (event) => {
  "use strict";

  //STEP 1
  function step1() {
    "use strict";
    let str = window.prompt("Enter a string:");
    window.console.log(str.match(/./g).sort().join().replace(/\W/g, ""));
  }

  //STEP 2
  function step2() {
    "use strict";
    let str = window.prompt("Enter a string:");
    let arrStr = str.split(" ");
    let arrStr2 = [];
    for (let i of arrStr) {
      arrStr2.push(i.charAt(0).toUpperCase().concat(i.slice(1)));
    }
    window.console.log(arrStr2.join(" "));
  }

  //STEP 3
  //'The quick brown fox'
  //THE QUICK FOX BROWN
  function step3() {
    "use strict";
    let str = window.prompt("Enter a string:");
    let res = str.match(/[aeiouAEIOU]/g);
    window.console.log(
      'The string: "' + str + '" has ' + res.length + " vowels."
    );
  }

  //STEP 4
  let SIZEOFID = 8; //Size of ID in chars
  function step4() {
    "use strict";
    let chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let id = "";
    for (let i = 0; i < SIZEOFID; i++) {
      id = id.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    window.console.log(id);
  }

  //STEP 5
  //Australia|Germany|United States of America
  function longest_country_name(arr) {
    let longest = arr.sort(function (a, b) {
      //window.console.log(a, b);
      return b.length - a.length;
    })[0];
    return longest;
  }
  function step5() {
    "use strict";
    let str;
    window.alert(
      "In this step, you will be asked to enter names of countries\nEnter as many as you want."
    );
    let cont;
    let country_names = [];
    let cancel;
    do {
      cont = false;
      cancel = false;
      str = window.prompt(
        'Enter the name of a country or enter "exit" to continue the step:'
      );
      if (str === null) {
        cancel = true;
      }
      if (str === "exit" || str === null) {
        cont = true;
      } else {
        if (str !== "") {
          country_names.push(str);
        }
      }
    } while (cont === false);

    if (cancel === false) {
      window.console.log(country_names);
      //CALL longest_country_name FUNCTION AND DISPLAY RETURNED NAME IN CONSOLE
      window.console.log(
        "The longest name is " + longest_country_name(country_names)
      );
    }
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
