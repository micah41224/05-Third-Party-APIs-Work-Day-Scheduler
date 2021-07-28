/*
var dayArray = [
    {
        id:"0",
        hour: "9",
        military: "9",
        amPm: "am",
        entry: "",

    },
    {
        id:"1",
        hour: "10",
        military: "10",
        amPm: "am",
        entry: "",
        
    },
    {
        id:"2",
        hour: "11",
        military: "11",
        amPm: "am",
        entry: "",
        
    },
    {
        id:"3",
        hour: "12",
        military: "12",
        amPm: "pm",
        entry: "",
        
    },
    {
        id:"4",
        hour: "1",
        military: "13",
        amPm: "pm",
        entry: "",
        
    },
    {
        id:"5",
        hour: "2",
        military: "14",
        amPm: "pm",
        entry: "",
        
    },
    {
        id:"6",
        hour: "3",
        military: "15",
        amPm: "pm",
        entry: "",
        
    },
    {
        id:"7",
        hour: "4",
        military: "16",
        amPm: "pm",
        entry: "",
        
    },
    {
        id:"8",
        hour: "5",
        military: "17",
        amPm: "pm",
        entry: "",
        
    },
]
*/

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var military = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var dailyEntry = ["", "", "", "", "", "", "", "", ""];


var rootDiv = $('#root');


for (var i = 0; i < hours.length; i++) {

    var baseRow = $("<div class='row'>");
    var timeBox = $("<div class='hour'>");
    var entryBox = $("<div class='description future'>")
    var btnBox = $("<button class='col-md-1 saveBtn'>")
    var actualBtn = $("<i class='far fa-save fa-lg'></i>")
    var inputForm = $("<form class='dataEntry future'></form>");

    inputForm.append( 
        $("<input>", 
             { type:'text', 
               class:'future',
               placeholder:'Enter planner data here', 
               name:'keyword', 
               style:'width:100%' }
         )
    );

    timeBox.text(hours[i]);
    entryBox.text(dailyEntry[i]);
   
   
    rootDiv.append(baseRow);
    btnBox.append(actualBtn);
    entryBox.append(inputForm);
    baseRow.append(timeBox, entryBox, btnBox);

    
  }


/*
  for (var i = 0; i < abilities.length; i++) {
    // Create a new `<div>` for each ability and its text content
    var abilityEl = $('<li>');
  
    // abilityEl.textContent = abilities[i];
    abilityEl.text(abilities[i]);
  
    // `my-3` class adds margin on top and bottom
    abilityEl.addClass('my-3');
  
    // Alternatively
    // var abilityEl = $("<div>" + abilities[i] + "</div>");
  
    // Add this new `<div>` to the abilities `<div>` container element.
    rootEl.append(abilityEl);
  }
  
  // select all `<div>` elements on the page
  // document.querySelectorAll('div');
  console.log($('div'));
  
  // Alternatively use the `$.each` method
  // $.each(abilities, function(i, ability) {
  //    abilityEl.append("<div>" + ability + "</div>");
  // })
  */


  // Json might can be used to enable you to use the array as it can pack and unpack them in relation to local storage?