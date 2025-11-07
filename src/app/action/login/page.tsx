"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SigninPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSignin = async () => {
        setLoading(true);
        setMessage('');

        try {
            await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
                rememberMe: true
            })

            setMessage('Connexion réussie !')
            setFormData({ email: '', password: '' })
        } catch (error: any) {
            setMessage(`Erreur: ${error.message}`)
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
            <div className="min-h-screen flex justify-center bg-base-200 items-center" style={{ maxHeight: '400px', maxWidth: '20px'}}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-80 border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
    )

}