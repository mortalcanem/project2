
let sendButton = document.querySelector("#bookHourBtn");
sendButton.addEventListener("click", scheduleAppt);
 
function scheduleAppt() {
    let userName = document.querySelector("#username").value;
    let instructorList = document.querySelector("#lecturer");
    let instructor = instructorList.options[instructorList.selectedIndex].text;
    let [instructorFirstName, instructorLastName] = instructor.split(' ');
    let dateTime = document.querySelector("#datetime").value;
    let [fullDate, time] = dateTime.split(" ");
    let [year, month, date] = fullDate.split("/");
    let newAppt = (`${instructorFirstName} - ${month}/${date} - ${time}`);
    //console.log(newAppt);
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newI = document.createElement('i');
    //let chev = '\u03A9';
    //let tempClass = `fas fa-chevron-circle-right`;
    //newI.classList.add(tempClass);
    let apptList = document.querySelector("#appt-list");

    newSpan.textContent = newAppt;
    console.log(newSpan.innerHTML);

    apptList.append(newLi);
    newLi.append(newSpan);
    newLi.append(newI);
    //console.log(newI);

    let consultNum = document.querySelector(".box-footer span").innerText;
    let consultNum2 = document.querySelector(".box-footer span");
    //console.log(consultNum);
    consultNum++;
    //console.log(consultNum);
    updatedConsultNum = consultNum;
    //console.log(updatedConsultNum);
    consultNum2.innerText = updatedConsultNum;
    //console.log(updatedConsultNum);




}
