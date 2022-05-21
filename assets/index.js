console.log ('javascript is running'); 

//Current Day Display under title the 'ID' that is being called is connected to index.html
var currentDayEl = document.getElementById("currentDay");

// Moment JS is being used to display the date and time
const setCurrentDay = () => {
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDayEl.textContent = currentDay; 
    
};





//timeslots according to workday hours 
const showHours = () => {
    for (i =0; i < 10; i++){
        var hourBoxEl = document.createElement ("div"); 
        hourBoxEl.classList = "row"; 
        calenderEl.appendChild()
    }

}

// Save buttons 

// input 

// color 

// this is the call to the current date & time
setCurrentDay();

