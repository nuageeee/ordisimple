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
                rememberMe: true,
                callbackURL: "/dashboard"
            })

            setMessage('Connexion réussie !')
            setFormData({ email: '', password: '' })
        } catch (error: any) {
            setMessage(`Erreur: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>Connexion</h1>

            {message && (
                <div style={{
                    padding: '10px',
                    marginBottom: '20px',
                    backgroundColor: message.includes('Erreur') ? '#fee' : '#efe',
                    border: `1px solid ${message.includes('Erreur') ? '#fcc' : '#cfc'}`,
                    borderRadius: '4px'
                }}>
                    {message}
                </div>
            )}

            <div style={{ marginBottom: '15px' }}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    required
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Mot de passe:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    required
                />
            </div>

            <button
                onClick={handleSignin}
                disabled={loading}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    backgroundColor: loading ? '#ccc' : '#007cba',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? 'Connexion...' : 'Se connecter'}
            </button>



            {/* Lien vers connexion */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>
                    Déjà un compte ?
                    <a href="/login" style={{ color: '#007cba', marginLeft: '5px' }}>
                        Se connecter
                    </a>
                </p>
            </div>
        </div>
    )

}