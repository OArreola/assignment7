/*eslint-env browser*/

let $ = function (id) {
  "use strict";
  return window.document.getElementById(id);
};

$("secStrings").addEventListener("click", (event) => {
  "use strict";

  //STEP 1
  function step1() {
    "use strict";
    let nameStr = window.prompt("Enter your name: ");
    window.alert("Your name is " + nameStr.length + " characters long.");
  }

  //STEP 2
  function step2() {
    "use strict";
    let nameStr = window.prompt("Enter your name: ");
    let pos = 0;
    do {
      pos = window.prompt("Enter a number between 1 and " + nameStr.length);
      if (pos < 1 || pos > nameStr.length) {
        window.alert("Wrong number!!!");
      }
    } while (pos < 1 || pos > nameStr.length);
    window.alert(
      "At position " +
        pos +
        " of " +
        nameStr +
        " is [ " +
        nameStr.charAt(pos - 1) +
        " ]"
    );
  }
  //STEP 3
  function step3() {
    "use strict";
    let first = window.prompt("Enter your First Name:");
    let last = window.prompt("Enter your Last Name:");
    window.alert("Your name is:\n" + first.concat(" " + last));
  }

  //STEP 4
  function step4() {
    "use strict";
    let txt = "The quick brown fox jumps over the lazy dog";
    window.alert(txt + "\nThe word fox is at index: " + txt.indexOf("fox"));
  }

  //STEP 5
  function step5() {
    "use strict";
    let txt = "The quick brown fox jumps over the lazy fox";
    window.alert(
      txt + "\nThe last instance of fox is at index: " + txt.lastIndexOf("fox")
    );
  }

  //STEP 6
  function step6() {
    "use strict";
    let txt = "The quick brown fox jumps over the lazy dog";
    let name = window.prompt("Enter your name:");
    window.alert(txt.replace("the lazy dog", name));
  }

  //STEP 7
  function step7() {
    "use strict";
    let txt = "The quick brown fox jumps over the lazy dog";
    let word = window.prompt("Enter a word:");
    let res = txt.search(word);
    if (res === -1) {
      window.alert("Sorry, " + word + " is not in\n" + txt);
    } else {
      window.alert(
        "The word " + word + " is located at index " + res + " of\n" + txt
      );
    }
  }

  //STEP 8
  function step8() {
    "use strict";
    let old_string = "The quick brown fox jumps over the lazy dog";
    let new_string = old_string.slice(old_string.search("the lazy dog"));
    window.alert(new_string.toUpperCase());
  }

  //STEP 9
  function step9() {
    "use strict";
    let txt =
      "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
    window.alert(txt.trim().toLowerCase());
  }

  //STEP 10
  function step10() {
    "use strict";
    let txt = "the quick brown fox jumps over the lazy dog";

    window.alert(
      txt.slice(0, 1).toUpperCase().concat(txt.slice(1, txt.length))
    );
  }

  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
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
      case "Step 6":
        step6();
        break;
      case "Step 7":
        step7();
        break;
      case "Step 8":
        step8();
        break;
      case "Step 9":
        step9();
        break;
      case "Step 10":
        step10();
        break;

      default:
        break;
    }
  }
});
