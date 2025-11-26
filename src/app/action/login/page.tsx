"use client";

import FloatingBubbles from "@/components/FloatingBubbles";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import * as icon from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SigninPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
                rememberMe: formData.rememberMe,
                callbackURL: "/dashboard"
            });
        } catch (error: any) {
            setError(error.message || 'Erreur de connexion');
            console.error('Erreur de connexion:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen relative flex justify-center items-center overflow-hidden bg-linear-to-br from-base-200 to-base-300">
            <FloatingBubbles count={20} />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
            >
                <div className="card bg-base-300/80 backdrop-blur-sm rounded-box w-[500px] shadow-xl">
                    <form onSubmit={handleSignin} className="p-8">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-center mb-6">Connexion</legend>
                            
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="alert alert-error mb-4"
                                >
                                    <icon.AlertCircle className="w-5 h-5" />
                                    <span>{error}</span>
                                </motion.div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Email *</span>
                                    </label>
                                    <label className="input flex items-center gap-2 w-109">
                                        <icon.Mail className="w-4 h-4 opacity-70" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="mail@example.com"
                                            className="grow"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text">Mot de passe *</span>
                                    </label>
                                    <label className="input flex items-center gap-2 w-109">
                                        <icon.Lock className="w-4 h-4 opacity-70" />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Mot de passe"
                                            className="grow"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                        />
                                    </label>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="label cursor-pointer gap-2">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            className="checkbox checkbox-primary checkbox-sm"
                                            checked={formData.rememberMe}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="label-text">Se souvenir de moi</span>
                                    </label>
                                    
                                    <Link href="/forgot-password" className="link link-primary text-sm">
                                        Mot de passe oublié ?
                                    </Link>
                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-full mt-6"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Connexion en cours...
                                        </>
                                    ) : (
                                        <>
                                            <icon.LogIn className="w-4 h-4" />
                                            Se connecter
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="divider">OU</div>

                            <div className="text-center">
                                <p className="text-sm">
                                    {"Vous n'avez pas de compte ?"}{' '}
                                    <Link href="/action/signup" className="link link-primary font-semibold">
                                        {"S'inscrire"}
                                    </Link>
                                </p>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}