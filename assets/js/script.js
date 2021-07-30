//This function causes the textarea to change colors based on what time of day it is.
//Grey for hours that are in the past, red for the present and green for the remainder of the day.
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

  }

//This variable employs moment to display the current date in a "'weekday', 'month' 'numeric date'" format.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//The below variables cover the time labels for the calendar as well as serve as a reference for which textarea is being targeted for local storage.
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var military = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var presentTime = (moment().hour());


var rootDiv = $('#root');

//This for loop sets up the html structure of the planner (other than the jumbotron).
for (var i = 0; i < hours.length; i++) {


var content= localStorage.getItem(hours[i])

    var baseRow = $("<div class='row'>");
    var timeBox = $("<div class='hour'>");
    var entryBox = $("<div class='description future'>")
    var btnBox = $("<button class='col-md-1 saveBtn' data-hour='"+hours[i]+"'>")
    var actualBtn = $("<i class='far fa-save fa-lg'></i>")


    var inputForm = $("<textarea data-hour='"+hours[i]+"'>"+content+"</textarea>")
    $(inputForm).css("width","100%")

    inputForm.text(content);

    timeBox.text(hours[i]);
  
   
    rootDiv.append(baseRow);
    btnBox.append(actualBtn);
    entryBox.append(inputForm);
    baseRow.append(timeBox, entryBox, btnBox);

    timeColorShift();

  }

//This function saves the text from user input to local storage.
function mySave(event) {
  var target = $(event.currentTarget)
  var time = target.data("hour")
  var myContent = document.querySelector("[data-hour='"+time+"']").value;
  

  localStorage.setItem(time, myContent);

}

//This is the trigger to execute the text saving function (mySave).
$(".saveBtn").click(mySave);
