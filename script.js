const input = document.querySelectorAll('input');
const label = document.querySelectorAll('label');
const span = document.querySelectorAll('span');
const date = document.querySelectorAll('.date');
const btn = document.querySelector('.button');
const errmsg = document.querySelectorAll('.errmsg');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const yearFormat = /^\d{4}$/;

var days = [];for (var i = 1; i <= 31; i++) {days.push(i)}
var months = [];for (var i = 1; i <= 12; i++) {months.push(i)}

btn.addEventListener("click", function(e){
e.preventDefault();
let dateString = `${input[1].value}/${input[0].value}/${input[2].value}`;
btn.style.backgroundColor = 'hsl(259, 100%, 65%)';
    if(input[0].value == "")
    {errmsg[0].innerHTML = "This field is required";
    day.classList.add("errformItem");}
    else if(!days.includes(parseInt(input[0].value))) { 
    errmsg[0].innerHTML = "Must be a valid day";day.classList.add("errformItem");}
    else {errmsg[0].innerHTML = "";day.classList.remove("errformItem");} 

    if(input[1].value == "")
    {errmsg[1].innerHTML = "This field is required";month.classList.add("errformItem");}
    else if(!months.includes(parseInt(input[1].value))) { 
    errmsg[1].innerHTML = "Must be a valid month";month.classList.add("errformItem");}
    else {errmsg[1].innerHTML = "";month.classList.remove("errformItem");} 
    
    if(input[2].value == "")
    {errmsg[2].innerHTML = "This field is required";year.classList.add("errformItem");}
    else if(input[2].value < 0) {
    errmsg[2].innerHTML = "Must be a valid year";year.classList.add("errformItem");}    
    else {errmsg[2].innerHTML = "";year.classList.remove("errformItem");} 
    
    if (Date.parse(dateString) > Date.parse(Date())) {
    errmsg[2].innerHTML = "Must be in the past";for(let i=0;i<3;i++){date[i].classList.add("errformItem");}}

    var daysNumber = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (parseInt(input[0].value) > daysNumber[parseInt(input[1].value)-1] && days.includes(parseInt(input[0].value))){
    errmsg[0].innerHTML = "Must be a valid date";
    for(let i=0;i<3;i++){date[i].classList.add("errformItem");}}

    let birthdate = new Date(dateString);
    let today = new Date();
    var yearNumber; var monthNumber; var dayNumber;

    if (birthdate.getMonth() < today.getMonth() || 
        (today.getMonth() === birthdate.getMonth() && birthdate.getDate() <= today.getDate())
    ) { yearNumber = today.getFullYear() - birthdate.getFullYear();
        monthNumber = today.getMonth() - birthdate.getMonth(); 
        dayNumber = today.getDate() - birthdate.getDate(); span[0].innerHTML = yearNumber;
        span[1].innerHTML = monthNumber;
        span[2].innerHTML = dayNumber;} else if((errmsg[0].innerHTML != "") || (errmsg[1].innerHTML != "") || (errmsg[2].innerHTML != ""))
        {span[0].innerHTML = "--";
        span[1].innerHTML = "--";
        span[2].innerHTML = "--"; }
    
    if (birthdate.getMonth() < today.getMonth() && birthdate.getDate() > today.getDate()) 
    { yearNumber = today.getFullYear() - birthdate.getFullYear();
        monthNumber = today.getMonth() - birthdate.getMonth() - 1; 
        dayNumber = 30 - (birthdate.getDate() - today.getDate()) ; span[0].innerHTML = yearNumber;
        span[1].innerHTML = monthNumber;
        span[2].innerHTML = dayNumber;} else if((errmsg[0].innerHTML != "") || (errmsg[1].innerHTML != "") || (errmsg[2].innerHTML != ""))
        {span[0].innerHTML = "--";
        span[1].innerHTML = "--";
        span[2].innerHTML = "--"; }

    if (today.getMonth() < birthdate.getMonth() && today.getDate() < birthdate.getDate())
     { yearNumber = today.getFullYear() - birthdate.getFullYear() - 1;
        monthNumber = 11 - (birthdate.getMonth() - today.getMonth());
        dayNumber = 30 - (birthdate.getDate() - today.getDate()); span[0].innerHTML = yearNumber;
        span[1].innerHTML = monthNumber;
        span[2].innerHTML = dayNumber;} else if((errmsg[0].innerHTML != "") || (errmsg[1].innerHTML != "") || (errmsg[2].innerHTML != ""))
        {span[0].innerHTML = "--";
        span[1].innerHTML = "--";
        span[2].innerHTML = "--"; }

    if (today.getMonth() < birthdate.getMonth() && today.getDate() >= birthdate.getDate())
     { yearNumber = today.getFullYear() - birthdate.getFullYear() - 1;
        monthNumber = 12 - (birthdate.getMonth() - today.getMonth());
        dayNumber = today.getDate() - birthdate.getDate(); span[0].innerHTML = yearNumber;
        span[1].innerHTML = monthNumber;
        span[2].innerHTML = dayNumber;
    } else if((errmsg[0].innerHTML != "") || (errmsg[1].innerHTML != "") || (errmsg[2].innerHTML != ""))
    {span[0].innerHTML = "--";
    span[1].innerHTML = "--";
    span[2].innerHTML = "--"; }
    // span[0].innerHTML = yearNumber;
    // span[1].innerHTML = monthNumber;
    // span[2].innerHTML = dayNumber;
    // if((errmsg[0].innerHTML = "") && (errmsg[1].innerHTML = "") && (errmsg[2].innerHTML = ""))
    // {span[0].innerHTML = "yearNumber";
    // span[1].innerHTML = "monthNumber";
    // span[2].innerHTML = "dayNumber"; }
    // console.log(yearNumber);  
    // console.log(monthNumber);  
    // console.log(dayNumber);
});
    



