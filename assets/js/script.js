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

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));


function listCreate() {

}

var rootDiv = $('#root');

for (var i = 0; i < dayArray.length; i++) {
    // Create a new `<div>` for each ability and its text content
    var baseRow = $('<div>');
    
  
    // abilityEl.textContent = abilities[i];
    //abilityEl.text(abilities[i]);
  
    // `my-3` class adds margin on top and bottom
    baseRow.addClass('row');
  
    // Alternatively
    // var abilityEl = $("<div>" + abilities[i] + "</div>");
  
    // Add this new `<div>` to the abilities `<div>` container element.
    rootDiv.append(baseRow);
  }