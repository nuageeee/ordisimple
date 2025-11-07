"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import FloatingBubbles from "@/components/FloatingBubbles";
import * as icon from "lucide-react";

export default function SignupPage() {

    const [formData, setFormData] = useState({
        step1: {
            name: '',
            email: '',
            password: '',
        },
        step2: {
            phone: '',
            address: '',
            society: false,
        },
        step3: {
            terms: false,
            remember: false
        }
    })
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(prev => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }



    return (
        <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-base-200 to-base-300" />
            <FloatingBubbles count={20} />
            <div className="card bg-base-300/80 backdrop-blur-sm rounded-box grid h-55 w-8 grow place-items-center mx-8 shadow-sm rounded-xl">
                <ul className="steps steps-vertical">
                    <li className="step step-primary">Enregistrement</li>
                    <li className="step">Informations supplémentaire</li>
                    <li className="step">Finalisation</li>
                </ul></div>
            <div className="h-100 flex items-center">
                <div className="divider divider-horizontal mx-4"></div>
            </div>
            <div className="card bg-base-300/80 backdrop-blur-sm rounded-box grid h-80 grow place-items-center mx-8 w-10 shadow-sm rounded-xl">
                <fieldset className="fieldset ">
                    <legend className="fieldset-legend">Création de compte</legend>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="label">Nom</label>
                            <input type="text" placeholder="Nom" className="input" />
                        </div>

                        <div>
                            <label className="label">Prénom</label>
                            <input type="text" placeholder="Prénom" className="input" />
                        </div>
                    </div>
                    <label className="label">Email</label>
                    <label className="input validator w-132">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>

                        <input type="email" placeholder="mail@example.com" className="grow" required />
                    </label>
                    <div className="validator-hint hidden">Entrer une email valide</div>

                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="label">Mot de passe</label>
                            <input type="text" placeholder="Mot de passe" className="input" />
                        </div>

                        <div>
                            <label className="label">Confirmation</label>
                            <input type="text" placeholder="Mot de passe" className="input" />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="btn btn-primary">
                            Suivant
                            <icon.ArrowRight />
                        </button>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}