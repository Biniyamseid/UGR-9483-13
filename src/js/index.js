const signup_form = document.getElementById('signup_form');
const signup_email = document.getElementById('signup_email');
const signup_password = document.getElementById('signup_password');
const signin_form = document.getElementById('signin_form');
const signin_email = document.getElementById('signin_email');
const signin_password = document.getElementById('signin_password');
console.log(signin_email.value);
console.log(signup_email.value);
if (signin_email.value){
    form = signin_form;
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    });
}
else if (signup_form.value){
    form = signup_form;
    form.addEventListener('submit', e => {
        e.preventDefault();
    
        validateInputs();
    });
}
else{
    setError(email, 'please provide valid data');
}






const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    if (signin_email){
        email =signin_email.value.trim();
        password =signin_password.value.trim();
    }
    else if (signup_email){
        email =signup_email.value.trim();
        password =signup_password.value.trim();
    }
    else{
        setError(email, 'Provide a valid email address');
    }
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

};