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
//console.log("military time " +military[i]);
//console.log("present time " +presentTime);
  }

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var military = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var dailyEntry = ["", "", "", "", "", "", "", "", ""];
var presentTime = (moment().hour());


var rootDiv = $('#root');



for (var i = 0; i < hours.length; i++) {

//console.log(JSON.stringify([i]));

var content= localStorage.getItem(hours[i])

    var baseRow = $("<div class='row'>");
    var timeBox = $("<div class='hour'>");
    var entryBox = $("<div class='description future'>")
    var btnBox = $("<button class='col-md-1 saveBtn' data-hour='"+hours[i]+"'>")
    var actualBtn = $("<i class='far fa-save fa-lg'></i>")

    //var inputForm = $("<input>")
    //$(inputForm).css("width","100%")

    //var inputForm = $("<textarea>")
    //$(inputForm).css("width","100%")

    var inputForm = $("<textarea data-hour='"+hours[i]+"'>"+content+"</textarea>")
    $(inputForm).css("width","100%")

    inputForm.text(content);
    
    //console.log("Form:" +inputForm)


    timeBox.text(hours[i]);
    entryBox.text(dailyEntry[i]);
   
    rootDiv.append(baseRow);
    btnBox.append(actualBtn);
    entryBox.append(inputForm);
    baseRow.append(timeBox, entryBox, btnBox);

    timeColorShift();

  }

/*
function saveToLocalStorage() {
  localStorage.setItem('textinput', inputForm.textarea)

}
*/

function mySave(event) {
  var target = $(event.currentTarget)
  var time = target.data("hour")
  var myContent = document.querySelector("[data-hour='"+time+"']").value;
  window.alert(myContent);

  localStorage.setItem(time, myContent);
  //console.log("this"+myContent)
}






//$(".saveBtn").click(saveToLocalStorage);

$(".saveBtn").click(mySave);



