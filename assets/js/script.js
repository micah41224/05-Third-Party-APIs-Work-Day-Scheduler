function timeColorShift() {
    if (military[i] < presentTime) {
      inputForm.addClass("past");
  }
      else if(military[i] > presentTime) {
          inputForm.addClass("future");
      }
      else if(military[i] = presentTime) {
          inputForm.addClass("present");
      }
console.log("military time " +military[i]);
console.log("present time " +presentTime);
  }

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var military = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var dailyEntry = ["", "", "", "", "", "", "", "", ""];
var presentTime = (moment().hour())-6;
console.log(moment().hour())


var rootDiv = $('#root');


for (var i = 0; i < hours.length; i++) {

    var baseRow = $("<div class='row'>");
    var timeBox = $("<div class='hour'>");
    var entryBox = $("<div class='description future'>")
    var btnBox = $("<button class='col-md-1 saveBtn'>")
    var actualBtn = $("<i class='far fa-save fa-lg'></i>")

    var inputForm = $("<input>")
    $(inputForm).css("width","100%")


    timeBox.text(hours[i]+"  /  "+military[i]);
    entryBox.text(dailyEntry[i]);
   
    rootDiv.append(baseRow);
    btnBox.append(actualBtn);
    entryBox.append(inputForm);
    baseRow.append(timeBox, entryBox, btnBox);

    timeColorShift();

  }





