import { useState } from "react"

export default function userLoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailError, setIsEmailError] = useState(false)
    const [isPasswordError, setisPasswordError] = useState(false)

    const setEmailValid = (email: string) => {
        if (email.length < 20)
            if (/^[a-zA-Z0-9.@-_]*$/.test(email)) {
                setEmail(email)
                setIsEmailError(false)
            } else {
                setIsEmailError(true)
            }
    }

    const setPassValid = (password: string) => {
        if (password.length < 20)
            if (/^[a-zA-Z0-9.@-_]*$/.test(password)) {
                setPassword(password)
                setisPasswordError(false)
            }
            else {
                setisPasswordError(true)
            }
    }


    return {
        email,
        setEmail: setEmailValid,
        password,
        setPassword: setPassValid,
        isEmailError,
        setIsEmailError,
        setisPasswordError,
        isPasswordError
    }
}



