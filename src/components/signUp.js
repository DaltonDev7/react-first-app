import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useState } from 'react'

export const SignUp = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password).then(() => {
                console.log('registrado');
            })
        } catch (error) {
            console.error(`Ha ocurrido un error ${error}`)
        }
    }

    return (
        <div className="container">
            <input className="form-control" type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
            <input className="form-control"  type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary w-100" onClick={signUp}>sign Up</button>
        </div>
    )
}