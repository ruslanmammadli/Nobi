//* BIG CALENDAR *//

let clickDay = document.querySelectorAll("#click-day")
clickDay.forEach((element) => {
    element.addEventListener("click", ()=>{
        element.classList.toggle("selected")
        let text = document.createElement("P")
        let span = document.createElement("SPAN")
        span.id="circle-div"
        span.innerText =Math.floor(Math.random() * 21)+1
        let spanText = document.createElement("SPAN")
        spanText.innerText  =" " + "Meets"
        text.id="day-text"
        if(element.classList.contains("selected")){
            text.appendChild(span)
            text.appendChild(spanText)
            element.appendChild(text)
        }
        else{
            element.lastChild.innerText=""
        }
    })
})


//* MINI CALENDAR *//

const date=new Date();

const renderCalendar=()=>{
    date.setDate(1);

const monthDays=document.querySelector('.sm-days'); // Ayın günləri

const lastDay = new Date(date.getFullYear(),
date.getMonth()+ 1,0).getDate(); // Ayın sonuncu günü

const predLastDay= new Date(date.getFullYear(),
date.getMonth(),0).getDate();  // Keçən ayın axırıncı günü

const firstDayIndex=date.getDay();  // Ayın ilk gününün indeksi

const lastDayIndex=new Date(
date.getFullYear(),
date.getMonth()+ 1,0).getDay(); // Ayın son gününün indeksi

const nextDays=7-lastDayIndex-1;

const months=[
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

document.querySelector(".sm-date h1").innerHTML
=months[date.getMonth()];

document.querySelector(".sm-date p").innerHTML
=new Date().toDateString();

let days="";

for(let x=firstDayIndex; x>0; x--){
    days+=`<div class="sm-prev-date">${predLastDay-x+1}</div>`;
}

for(let i=1; i<=lastDay; i++){
    if(i===new Date().getDate() && date.
    getMonth()===new Date().getMonth()){
        days+= `<div class="today">${i}</div>`;  
    }else{
        days+= `<div>${i}</div>`;
    }  
}

for(let j=1; j<=nextDays; j++){
    days+=`<div class="sm-next-date">${j}</div>`;
}

monthDays.innerHTML=days;
}

document.querySelector('.prev').
addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})

document.querySelector('.next').
addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

renderCalendar();