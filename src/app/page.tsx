'use client';

import FloatingBubbles from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <FloatingBubbles count={10} />
      </div>
      <div className="relative z-0">

        {/* Hero Section */}
        <div className="hero py-16 pointer-events-auto">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Réparation & Maintenance Informatique</h1>
              <p className="text-lg mb-6">
                Votre partenaire informatique de confiance. Nous offrons des services de dépannage, maintenance et optimisation pour tous vos besoins technologiques.
              </p>
              <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Prendre Rendez-vous</button>
            </div>
          </div>
        </div>
        {/* Services Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Service Card 1 */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-3">🔧 Dépannage PC</h3>
                <p>
                  Problèmes de démarrage, ralentissements, crashes. Diagnostic complet et réparation rapide de votre ordinateur.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-primary">Rapide</span>
                  <span className="badge badge-secondary">Fiable</span>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-3">🛡️ Sécurité & Virus</h3>
                <p>
                  Suppression de virus, malwares et logiciels indésirables. Installation d'antivirus et conseil en sécurité informatique.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-accent">Sécurisé</span>
                  <span className="badge badge-info">Protection</span>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-3">💾 Récupération Données</h3>
                <p>
                  Données supprimées ou disque endommagé? Nous récupérons vos fichiers importants en toute sécurité.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-warning">Sauvetage</span>
                  <span className="badge badge-error">Urgent</span>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-3">⚡ Upgrade Matériel</h3>
                <p>
                  Augmentez les performances de votre PC. Remplacement SSD, RAM, batterie portable et bien plus.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-success">Performance</span>
                  <span className="badge badge-info">Moderne</span>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-3">🖥️ Maintenance Préventive</h3>
                <p>
                  Nettoyage interne, mise à jour système, optimisation. Un PC bien entretenu est un PC qui dure.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-primary">Régulier</span>
                  <span className="badge badge-secondary">Économique</span>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-3">📱 Assistance & Formation</h3>
                <p>
                  Vous avez besoin d'aide pour utiliser votre ordinateur? Nous vous formons et vous conseillons.
                </p>
                <div className="card-actions justify-end mt-4">
                  <span className="badge badge-success">Pédagogue</span>
                  <span className="badge badge-info">Patient</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Pourquoi Nous Choisir?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-bold text-xl mb-2">Diagnostic Gratuit</h3>
                <p className="text-sm">Nous identifions le problème sans frais préalables</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-xl mb-2">Rapide & Efficace</h3>
                <p className="text-sm">Réparation expresse pour une reprise rapide</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-xl mb-2">Prix Compétitifs</h3>
                <p className="text-sm">Devis transparent sans surprise</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-xl mb-2">Garantie</h3>
                <p className="text-sm">Garantie sur nos interventions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-base-100 py-16 pointer-events-auto" id="contact">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title mb-4">Nous Contacter</h2>
                <fieldset className="fieldset">
                  <label className="label">Nom</label>
                  <input type="text" className="input" placeholder="Votre nom" />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="votre@email.com" />
                  <label className="label">Téléphone</label>
                  <input type="tel" className="input" placeholder="+33 6 XX XX XX XX" />
                  <label className="label">Message</label>
                  <textarea className="textarea" placeholder="Décrivez votre problème..."></textarea>
                  <button className="btn btn-primary mt-4 w-full">Envoyer</button>
                </fieldset>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
              <p className="py-6 text-lg">
                Vous avez un problème informatique? Une question sur nos services? Notre équipe est à votre écoute pour vous aider rapidement.
              </p>
              <div className="space-y-4">
                <p><strong>📞 Téléphone:</strong> +33 X XX XX XX XX</p>
                <p><strong>📧 Email:</strong> contact@ordisimple.fr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
