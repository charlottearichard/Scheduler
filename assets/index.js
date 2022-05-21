console.log ('javascript is running'); 

//Current Day Display under title the 'ID' that is being called is connected to index.html
var currentDayEl = document.getElementById("currentDay");


// Moment JS is being used to display the date and time
const setCurrentDay = () => {
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDayEl.textContent = currentDay;  
};

//Timeblocks 
var timeBlocksEl = document.getElementById ("timeBlocks");



//the containter that holds hours and events 
const displayHours = () => {
    for (i = 0; i < 9; i++) {
      var hourBlockEl = document.createElement("div");
      hourBlockEl.classList = "row";
      timeBlocksEl.appendChild(hourBlockEl);
      var hourTextEl = document.createElement("p");
      
      // shows hours of a typical teacher school day 7AM-3PM 
      hourTextEl.classList = "col-2";
      if (i + 7 < 12) {
        hourTextEl.textContent = `${i + 7} AM`;
      } else if (i + 7 == 12) {
        hourTextEl.textContent = `${i + 7} PM`;
      } else {
        hourTextEl.textContent = `${i - 5} PM`;
      }

      //input for events 
      var eventEl = document.createElement("input");
      eventEl.classList = "col-8"; // size of input box
      
      //Save buttons 
      var saveBtnEl = document.createElement("button");
      saveBtnEl.classList = "col-2 btn-primary";
      saveBtnEl.textContent = "SAVE";
      saveBtnEl.setAttribute("data-blockHour", i);
      
      //shows time on the left 
      hourBlockEl.appendChild(hourTextEl);

      //shows box for input 
      hourBlockEl.appendChild(eventEl);

      //shows save button 
      hourBlockEl.appendChild(saveBtnEl);
    }
  };


// color 

// local storage 

// this is the call to the current date & time
setCurrentDay();
displayHours();
