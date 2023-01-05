import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);

        // close the signup modal
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use')
        } else if (error.code === 'auth/invalid-email') {
            alert('Invalid Email')
        } else if (error.code === 'auth/weak-password') {
            alert('Weak Password')
        } else if (error.code) {
            alert('Something went wrong')
        }
    }
})