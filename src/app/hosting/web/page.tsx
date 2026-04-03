import FloatingBubbles from "@/components/FloatingBubbles";
import { CircleQuestionMark, Database, Globe, HardDrive, Mail, ShieldCheck, ShoppingCart } from "lucide-react";

export default function WebHosting() {
    return (
        <div className="relative">
            <div className="fixed inset-0 pointer-events-none -z-10">
                <FloatingBubbles count={20} />
            </div>
            <div className="relative z-0">


                <div className="hero py-16 pointer-events-auto">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-xl font-semibold">
                                <span className="badge badge-xl badge-outline badge-primary">Hébergement web <Globe /></span>
                            </h1>
                            <p className="text-lg mb-6 mt-4">
                                Votre partenaire informatique de confiance. Nous offrons des services de dépannage, maintenance et optimisation pour tous vos besoins technologiques.
                            </p>
                            <button className="btn btn-primary">Prendre Rendez-vous</button>
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-center">
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Starter</h2>
                                <span className="text-xl">1€/mois</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <HardDrive className="size-5 me-2 inline-block" />
                                    <span>1 Go stockage ssd</span>
                                </li>
                                <li>
                                    <Database className="size-5 me-2 inline-block" />
                                    <span>512 Mo MariaDB</span>
                                </li>
                                <li>
                                    <ShieldCheck className="size-5 me-2 inline-block" />
                                    <span>SSL disponible</span>
                                </li>
                                <li>
                                    <Mail className="size-5 me-2 inline-block" />
                                    <span>Email non inclus</span>
                                </li>
                                <li className="pt-2 font-semibold">Disponibilités:</li>
                                <li className="text-green-600">✓ 10 slots disponibles</li>
                                <li className="pt-2 font-semibold">Ressources:</li>
                                <li>
                                    • Puissance modérée
                                    <div className="lg:tooltip" data-tip="Capacité du site à gérer les pics de trafic">
                                        <button className="btn btn-ghost btn-circle"><CircleQuestionMark /></button>
                                    </div>
                                </li>

                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block"><ShoppingCart />Commander</button>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Professional</h2>
                                <span className="text-xl">2€/mois</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <HardDrive className="size-5 me-2 inline-block" />
                                    <span>10 Go stockage ssd</span>
                                </li>
                                <li>
                                    <Database className="size-5 me-2 inline-block" />
                                    <span>2 Go MariaDB</span>
                                </li>
                                <li>
                                    <ShieldCheck className="size-5 me-2 inline-block" />
                                    <span>SSL disponible</span>
                                </li>
                                <li>
                                    <Mail className="size-5 me-2 inline-block" />
                                    <span>Email non inclus</span>
                                </li>
                                <li className="pt-2 font-semibold">Disponibilités:</li>
                                <li className="text-green-600">✓ 5 slots disponibles</li>
                                <li className="pt-2 font-semibold">Ressources:</li>
                                <li>
                                    • Puissance élevée
                                    <div className="lg:tooltip" data-tip="Capacité du site à gérer les pics de trafic">
                                        <button className="btn btn-ghost btn-circle"><CircleQuestionMark /></button>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block"><ShoppingCart />Commander</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <span className="text-xl">4€/mois</span>
                            </div>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <HardDrive className="size-5 me-2 inline-block" />
                                    <span>50 Go stockage ssd</span>
                                </li>
                                <li>
                                    <Database className="size-5 me-2 inline-block" />
                                    <span>10 Go MariaDB</span>
                                </li>
                                <li>
                                    <ShieldCheck className="size-5 me-2 inline-block" />
                                    <span>SSL disponible</span>
                                </li>
                                <li>
                                    <Mail className="size-5 me-2 inline-block" />
                                    <span>Email non inclus</span>
                                </li>
                                <li className="pt-2 font-semibold">Disponibilités:</li>
                                <li className="text-green-600">✓ 3 slots disponibles</li>
                                <li className="pt-2 font-semibold">Ressources:</li>
                                <li>
                                    • Puissance maximale
                                    <div className="lg:tooltip" data-tip="Capacité du site à gérer les pics de trafic">
                                        <button className="btn btn-ghost btn-circle"><CircleQuestionMark /></button>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn btn-primary btn-block"><ShoppingCart />Commander</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}