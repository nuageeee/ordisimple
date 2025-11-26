"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import FloatingBubbles from "@/components/FloatingBubbles";
import * as icon from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Vérifier que les mots de passe correspondent
        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas');
            setLoading(false);
            return;
        }

        // Vérifier que les CGU sont acceptées
        if (!formData.terms) {
            setError('Vous devez accepter les conditions générales d\'utilisation');
            setLoading(false);
            return;
        }

        try {
            await authClient.signUp.email({
                email: formData.email,
                name: `${formData.firstName} ${formData.lastName}`,
                password: formData.password,
                callbackURL: "/dashboard"
            });
        } catch (error: any) {
            setError(error.message || 'Erreur lors de l\'inscription');
            console.error('Erreur d\'inscription:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex justify-center items-center overflow-hidden bg-linear-to-br from-base-200 to-base-300">
            <FloatingBubbles count={20} />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
            >
                <div className="card bg-base-300/80 backdrop-blur-sm rounded-box w-[600px] shadow-xl">
                    <form onSubmit={handleSubmit} className="p-8">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-center mb-6">Créer un compte</legend>
                            
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
                                {/* Nom et Prénom */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Nom *</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Nom"
                                            className="input w-full"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Prénom *</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Prénom"
                                            className="input w-full"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="label">
                                        <span className="label-text">Email *</span>
                                    </label>
                                    <label className="input flex items-center gap-2 w-134">
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

                                {/* Mot de passe */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Mot de passe *</span>
                                        </label>
                                        <label className="input flex items-center gap-2">
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
                                                minLength={6}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Confirmation *</span>
                                        </label>
                                        <label className="input flex items-center gap-2">
                                            <icon.Lock className="w-4 h-4 opacity-70" />
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirmer"
                                                className="grow"
                                                value={formData.confirmPassword}
                                                onChange={handleInputChange}
                                                required
                                                disabled={loading}
                                                minLength={6}
                                            />
                                        </label>
                                    </div>
                                </div>

                                {/* CGU */}
                                <div className="form-control">
                                    <label className="label cursor-pointer justify-start gap-3">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            className="checkbox checkbox-primary"
                                            checked={formData.terms}
                                            onChange={handleInputChange}
                                            required
                                            disabled={loading}
                                        />
                                        <span className="label-text">
                                            {"J'accepte les"}{' '}
                                            <Link href="/terms" className="link link-primary" target="_blank">
                                                {"conditions générales d'utilisation"}
                                            </Link>
                                        </span>
                                    </label>
                                </div>

                                {/* Bouton de soumission */}
                                <button 
                                    type="submit" 
                                    className="btn btn-primary w-full mt-6"
                                    disabled={loading}
                                    onClick={handleSubmit}
                                >
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner loading-sm"></span>
                                            Inscription en cours...
                                        </>
                                    ) : (
                                        <>
                                            <icon.UserPlus className="w-4 h-4" />
                                            {"S'inscrire"}
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="divider">OU</div>

                            <div className="text-center">
                                <p className="text-sm">
                                    Vous avez déjà un compte ?{' '}
                                    <Link href="/action/login" className="link link-primary font-semibold">
                                        Se connecter
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
