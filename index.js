const signUpForm = document.getElementById("signUpForm")
const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

signUpForm.addEventListener("submit", (e) =>  {
    e.preventDefault();
    const firstName = document.forms['signUpForm']['firstName']
    const lastName = document.forms['signUpForm']['lastName']
    const password = document.forms['signUpForm']['password']
    const email = document.forms['signUpForm']['email']

    const fnError = document.getElementById('fnError')
    const lnError = document.getElementById('lnError')
    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')

    const fnErrorIcon = document.getElementById('fnErrorIcon')
    const lnErrorIcon = document.getElementById('lnErrorIcon')
    const emailErrorIcon = document.getElementById('emailErrorIcon')
    const passwordErrorIcon = document.getElementById('passwordErrorIcon')

    let hasErrors = false;
  
    if (!firstName.value) {
        const error = 'First Name cannot be empty';
        fnError.innerText = error
        hasErrors = true;
        firstName.className = 'error-field'
        firstName.removeAttribute('placeholder')
        fnErrorIcon.className = 'visible-error-icon'
        fnError.className = 'error'
        fnErrorIcon.className = 'visible-error-icon'
        fnErrorIcon.style.visibility = 'visible'
    }
    
    if (!lastName.value) {
        const error = 'Last Name cannot be empty';
        lnError.innerText = error
        hasErrors = true;
        lastName.className = 'error-field'
        lastName.removeAttribute('placeholder')
        lnErrorIcon.className = 'visible-error-icon'
        lnError.className = 'error'
        lnErrorIcon.className = 'visible-error-icon'
        lnErrorIcon.style.visibility = 'visible'
    }
    
    if (!password.value) {
        const error = 'Password cannot be empty';
        passwordError.innerText = error
        hasErrors = true;
        password.className = 'error-field'
        password.removeAttribute('placeholder')
        passwordErrorIcon.className = 'visible-error-icon'
        passwordError.className = 'error'
        passwordErrorIcon.className = 'visible-error-icon'
        passwordErrorIcon.style.visibility = 'visible'
    }

    if (!email.value.match(validRegex)) {
        const error = 'Looks like this is not an email';
        emailError.innerText = error
        hasErrors = true;
        email.removeAttribute('placeholder')
        email.className = 'email-error-field'
        emailErrorIcon.className = 'visible-error-icon'
        emailError.className = 'error'
        emailErrorIcon.className = 'visible-error-icon'
        emailErrorIcon.style.visibility = 'visible'
        console.log(emailErrorIcon);
    }

    if (!hasErrors) {

        signUpForm.submit();
    }
});

let formElements = document.forms['signUpForm'].elements
formElements = Array.from(formElements)

formElements = formElements.filter(field => field.className === 'form-input')

formElements.forEach(field => {
    let formField = document.getElementById(field.id)
    formField.onchange = () => {
        formField.className = 'form-input'

        let errIconId = ''
        let errMsgId = ''

        switch (field.id) {
            case 'firstName':
                errIconId = 'fnErrorIcon'
                errMsgId = 'fnError'
                break

            case 'lastName':
                errIconId = 'lnErrorIcon'
                errMsgId = 'lnError'
                break

            case 'email':
                errIconId = 'emailErrorIcon'
                errMsgId = 'emailError'
                break
                
            case 'password':
                errIconId = 'passwordErrorIcon'
                errMsgId = 'passwordError'
                break
        
            default:
                break;
        }

        let errIcon = document.getElementById(errIconId)
        let errMsg = document.getElementById(errMsgId)

        errIcon.style.visibility = 'hidden'
        errMsg.className = 'invisible-error'
    }
})
