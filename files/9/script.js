const form = document.querySelector("form");
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const infoContent = document.getElementById('test');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(fullName.value);
    console.log(email.value);
    console.log(password.value);

    infoContent.textContent = ('Jmeno a prijmeni: ' + fullName.value + ' Email: ' + email.value + ' Heslo: ' + password.value);
})


