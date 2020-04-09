/*eslint-env browser*/

$("secDate").addEventListener("click", (event) => {
  "use strict";

  function prompDate() {
    "use strict";
    let dt, year, date;
    let validDate;
    do {
      validDate = false;
      dt = window.prompt("Please enter a date in MM/DD/YYYY format:");
      if (dt === null) {
        //User clicked cancel in prompt
        date = null;
        validDate = true;
      } else {
        if (dt.length === 0) {
          window.alert("Invalid date, please try again");
        } else {
          if (dt.indexOf("/") === -1) {
            window.alert("Invalid date, please try again");
          } else {
            year = dt.substring(dt.length - 4);
            if (isNaN(year)) {
              window.alert("Invalid date, please try again");
            } else {
              date = new Date(dt);
              if (date == "Invalid Date") {
                window.alert("Invalid date, please try again");
              } else {
                validDate = true;
              }
            }
          }
        }
      }
    } while (validDate === false);
    return date;
  }

  //STEP 1
  function step1() {
    "use strict";
    let d = prompDate();
    if (d !== null) {
      window.console.log(
        "Date: " + d.toDateString() + "\nThe number of days is: " + d.getDate()
      );
    }
  }

  //STEP 2
  function step2() {
    "use strict";
    let d = prompDate();
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (d !== null) {
      window.console.log(
        "Date: " +
          d.toDateString() +
          "\nThe month is: " +
          monthNames[d.getMonth()]
      );
    }
  }
  //STEP 3
  function step3() {
    "use strict";
    let d = prompDate();
    if (d !== null) {
      let strRes = "";
      if (d.getDay() > 0 && d.getDay() < 6) {
        strRes = " is not a weekend.";
      } else {
        strRes = " is a weekend.";
      }
      window.console.log(d.toDateString() + strRes);
    }
  }

  //STEP 4
  function step4() {
    "use strict";
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let yesterday = new Date().getDay() - 1;
    //yesterday = -1;
    if (yesterday < 0) {
      yesterday = 6;
    }
    window.console.log("Yesterday was " + dayNames[yesterday]);
  }

  //STEP 5
  function step5() {
    "use strict";
    let dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    window.console.log(dayNames[new Date().getDay()].slice(0, 1));
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
