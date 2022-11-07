function handleSubmit () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const mail = document.getElementById('mail').value;
    const pay = document.getElementById('pay').value;
    const i1 = document.getElementById('i1').value;
    const i2 = document.getElementById('i2').value;
    const i3 = document.getElementById('i3').value;
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const tax = document.getElementById('tax').value;
    const disc = document.getElementById('disc').value;
    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("MAIL", mail);
    sessionStorage.setItem("PAY", pay);
    sessionStorage.setItem("I1", i1);
    sessionStorage.setItem("I2", i2);
    sessionStorage.setItem("I3", i3);
    sessionStorage.setItem("Q1", q1);
    sessionStorage.setItem("Q2", q2);
    sessionStorage.setItem("Q3", q3);
    sessionStorage.setItem("TAX", tax);
    sessionStorage.setItem("DISC", disc);
    return;
}