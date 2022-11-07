window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const mail = sessionStorage.getItem('MAIL');
    const i1 = sessionStorage.getItem('I1');
    const i2 = sessionStorage.getItem('I2');
    const i3 = sessionStorage.getItem('I3');
    const q1 = sessionStorage.getItem('Q1');
    const q2 = sessionStorage.getItem('Q2');
    const q3 = sessionStorage.getItem('Q3');
    const tax = sessionStorage.getItem('TAX');
    const disc = sessionStorage.getItem('DISC');
    var dt = new Date();

    const day= dt.toLocaleTimeString()
    var iq1=Number(i1)*Number(q1);
    var iq2=Number(i2)*Number(q2);
    var iq3=Number(i3)*Number(q3);
    var total = Number(iq1)+Number(iq2)+Number(iq3)+Number(tax)-Number(disc);


    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;
    document.getElementById('result-mail').innerHTML = mail;
    document.getElementById('result-pay').innerHTML = total;
    document.getElementById('result-i1').innerHTML = i1;
    document.getElementById('result-i2').innerHTML = i2;
    document.getElementById('result-i3').innerHTML = i3;
    document.getElementById('result-iq1').innerHTML = iq1;
    document.getElementById('result-iq2').innerHTML = iq2;
    document.getElementById('result-iq3').innerHTML = iq3;
    document.getElementById('result-q1').innerHTML = q1;
    document.getElementById('result-q2').innerHTML = q2;
    document.getElementById('result-q3').innerHTML = q3;
    document.getElementById('result-tax').innerHTML = tax;
    document.getElementById('result-disc').innerHTML = disc;
    document.getElementById('date-time').innerHTML=dt.toDateString();;
    document.getElementById('result-time').innerHTML=dt.toLocaleTimeString();

    

})
function payNow() {
    const i1 = sessionStorage.getItem('I1');
    const i2 = sessionStorage.getItem('I2');
    const i3 = sessionStorage.getItem('I3');
    const q1 = sessionStorage.getItem('Q1');
    const q2 = sessionStorage.getItem('Q2');
    const q3 = sessionStorage.getItem('Q3');
    const tax = sessionStorage.getItem('TAX');
    const disc = sessionStorage.getItem('DISC');
 
    var iq1=Number(i1)*Number(q1);
    var iq2=Number(i2)*Number(q2);
    var iq3=Number(i3)*Number(q3);
    var total = Number(iq1)+Number(iq2)+Number(iq3)+Number(tax)-Number(disc);
    
let a = "https://mangoesmedia.github.io/";
let text2 = total;
let result = a.concat(text2);
window.open(result,"_self");

}
function printFunction() { 
    window.print(); 
  }