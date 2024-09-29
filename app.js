const submit = document.querySelector('.btn');
const outyear = document.querySelector('.outyear');
const outmonth = document.querySelector('.outmonth');
const outday = document.querySelector('.outday');
const inYear = document.querySelector('#year');
const inMonth = document.querySelector('#month');
const inDay = document.querySelector('#day');
const errorDay = document.querySelector('.err-day');
const errorMonth = document.querySelector('.err-month');
const errorYear = document.querySelector('.err-year');

let isValide = false;

submit.addEventListener('click', calculDate)

inDay.addEventListener('input' , e => {
    if(+inDay.value > 31){
        errorDay.textContent = "Must be a valid date";
        isValide = false;
        return
    }
    else{
        isValide = true;
        errorDay.textContent = "";
    }
    if(+inDay.value === 0){
        errorDay.textContent = "This field is required";
        isValide = false; 
        return
    }else{
        errorDay.textContent = "";
    }
})
inMonth.addEventListener('input' , e => {
    if(+inMonth.value > 12){
        errorMonth.textContent = "Must be a valid date";
        isValide = false;
        return
    }
    else{
        isValide = true;
        errorMonth.textContent = "";
    }
    if(+inMonth.value === 0){
        errorMonth.textContent = "This field is required";
        isValide = false; 
        return
    }else{
        errorMonth.textContent = "";
    }
})
inYear.addEventListener('input' , e => {
    if(+inYear.value > 2024){
        errorYear.textContent = "Must be a valid date";
        isValide = false;
        return
    }
    else{
        isValide = true;
        errorYear.textContent = "";
    }
    if(+inYear.value === 0){
        errorYear.textContent = "This field is required";
        isValide = false; 
        return
    }else{
        errorYear.textContent = "";
    }
})

function calculDate(){
    if(isValide){
        let birthday = `${inMonth.value}/${inDay.value}/${inYear.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        let ageYear = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        outday.textContent = ageDay;
        outmonth.textContent = ageMonth;
        outyear.textContent = ageYear;
    }else{
        alert("error")
    }
}