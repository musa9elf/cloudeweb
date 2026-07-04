import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Shield, Users, BookOpen, Lightbulb, Phone, Mail, ArrowRight } from 'lucide-react';

export default function SecurityWebsite() {
  // ==================== STATE MANAGEMENT ====================
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // ==================== SCROLL TRACKING ====================
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ==================== FORM HANDLING ====================
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Hier würde die echte API-Integration erfolgen
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  // ==================== NAVIGATION COMPONENT ====================
  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-slate-300" />
          <span className="text-lg font-semibold text-white tracking-tight">M8 PROTECTION</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#protection" className="text-slate-300 hover:text-white transition-colors">Protection</a>
          <a href="#training" className="text-slate-300 hover:text-white transition-colors">Training</a>
          <a href="#consulting" className="text-slate-300 hover:text-white transition-colors">Consulting</a>
          <a href="#contact" className="px-5 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors">
            Kontakt
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-4 flex flex-col gap-3">
          <a href="#protection" className="text-slate-300 hover:text-white py-2">Protection</a>
          <a href="#training" className="text-slate-300 hover:text-white py-2">Training</a>
          <a href="#consulting" className="text-slate-300 hover:text-white py-2">Consulting</a>
          <a href="#contact" className="text-slate-300 hover:text-white py-2">Kontakt</a>
        </div>
      )}
    </nav>
  );

  // ==================== HERO SECTION ====================
  const HeroSection = () => (
    <div className="relative h-screen bg-slate-900 overflow-hidden pt-20">
      {/* Background Placeholder Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%231a2332%22 width=%22100%22 height=%22100%22/%3E%3Cpath stroke=%22%23334155%22 d=%22M0,50 L100,50 M50,0 L50,100%22 stroke-width=%220.5%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23475569%22 stroke-width=%220.5%22 opacity=%220.3%22/%3E%3C/svg%3E")',
          backgroundSize: '100px 100px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        {/* Dunklerer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900"></div>
      </div>

      {/* Parallax Text Layer */}
      <div 
        className="relative h-full flex flex-col justify-center items-center px-6 text-center"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight tracking-tight">
          Security auf höchstem Niveau
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
          Schutz, Training und Beratung für Unternehmen und Privatkunden. Vertrauen ist unsere Grundlage.
        </p>
        <a 
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-300 hover:bg-white text-slate-900 font-semibold rounded transition-colors"
        >
          Kontakt aufnehmen
          <ArrowRight size={20} />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400" size={24} />
      </div>
    </div>
  );

  // ==================== SERVICE CARD COMPONENT ====================
  const ServiceCard = ({ icon: Icon, title, items }) => (
    <div className="bg-slate-800 border border-slate-700 rounded p-8 hover:border-slate-600 transition-colors">
      <Icon className="w-10 h-10 text-slate-300 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-slate-300 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  // ==================== PROTECTION SECTION ====================
  const ProtectionSection = () => (
    <section id="protection" className="bg-slate-900 py-20 md:py-32 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-slate-400 text-sm uppercase tracking-widest">01 PROTECTION</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 max-w-3xl">
            Umfassender Schutz für Ihr Vermögen und Ihre Sicherheit
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            Von professionellem Objektschutz bis zu diskretem VIP-Schutz – wir bieten maßgeschneiderte Lösungen für Ihre individuellen Anforderungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={Shield}
            title="Objektschutz"
            items={["Rund um die Uhr Überwachung", "Geschultes Sicherheitspersonal", "Zugangskontrolle und Patrouille"]}
          />
          <ServiceCard 
            icon={Users}
            title="Personenschutz"
            items={["Diskrete Begleitung", "Risikobewertung", "Professionelle Teams"]}
          />
          <ServiceCard 
            icon={Shield}
            title="Veranstaltungsschutz"
            items={["Event-Planung und Koordination", "Crowd Management", "Notfallmaßnahmen"]}
          />
          <ServiceCard 
            icon={Shield}
            title="Werttransport & VIP Überwachung"
            items={["Sichere Transporte", "Remote Monitoring-Systeme", "24/7 Überwachung"]}
          />
        </div>
      </div>
    </section>
  );

  // ==================== TRAINING SECTION ====================
  const TrainingSection = () => (
    <section id="training" className="bg-slate-950 py-20 md:py-32 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-slate-400 text-sm uppercase tracking-widest">02 TRAINING</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 max-w-3xl">
            Schulungen für professionelle Handlungssicherheit
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            Wir bereiten Ihre Teams auf kritische Situationen vor und stärken ihre Kompetenz durch praxisnahe Trainings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={BookOpen}
            title="Kerntrainings"
            items={["Aufzugswart Schulungen", "Bedrohungserkennung", "Früherkennung von Gefahrensituationen"]}
          />
          <ServiceCard 
            icon={BookOpen}
            title="Spezialisierte Programme"
            items={["Eskalation vermeiden", "Richtiges Verhalten in kritischen Situationen", "Brandschutz Training"]}
          />
        </div>

        <div className="mt-12 bg-slate-800 border border-slate-700 rounded p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-white mb-4">Handlungssicherheit im Fokus</h3>
          <p className="text-slate-300 mb-6">
            Unser Training zielt darauf ab, Ihre Mitarbeiter in Stress-Situationen sicher zu machen. Durch realistische Szenarien und bewährte Methoden entwickeln sie die nötige Sicherheit, um richtig zu handeln.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 text-slate-200">
              <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
              Praxisnahe Szenariotrainings
            </li>
            <li className="flex items-center gap-3 text-slate-200">
              <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
              Erfahrene Instruktoren
            </li>
            <li className="flex items-center gap-3 text-slate-200">
              <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
              Zertifikate & Dokumentation
            </li>
            <li className="flex items-center gap-3 text-slate-200">
              <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0"></div>
              Regelmäßige Auffrischungen
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

  // ==================== CONSULTING SECTION ====================
  const ConsultingSection = () => (
    <section id="consulting" className="bg-slate-900 py-20 md:py-32 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-slate-400 text-sm uppercase tracking-widest">03 CONSULTING</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 max-w-3xl">
            Strategische Sicherheitsberatung auf Expertenniveau
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            Wir analysieren Ihre Sicherheitslücken und entwickeln individuelle Konzepte für konstante Leistungsfähigkeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 border border-slate-700 rounded p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Sicherheitsanalyse</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">Abhörschutz und Geheimschutz</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">Betriebsmittel Sicherheitsberatung</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">Detaillierte Schwachstellenanalyse</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Qualitätskontrolle</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">Regelmäßige Überprüfung von Standards</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">Optimierung von Prozessen</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-300 text-sm">Sicherstellung konstanter Leistung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  // ==================== WHY US SECTION ====================
  const WhyUsSection = () => (
    <section className="bg-slate-950 py-20 md:py-32 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Warum M8 International Protection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Lightbulb className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Erfahrung</h3>
            <p className="text-slate-300">
              Jahrzehnte an Expertise in Sicherheit, Schutz und professioneller Beratung für nationale und internationale Kunden.
            </p>
          </div>

          <div className="text-center">
            <Shield className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Diskretion</h3>
            <p className="text-slate-300">
              Absolute Vertraulichkeit und diskrete Arbeitsweise ist nicht verhandelbar. Ihre Privatsphäre ist unsere Priorität.
            </p>
          </div>

          <div className="text-center">
            <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Zuverlässigkeit</h3>
            <p className="text-slate-300">
              Professionelle Teams, die 24/7 präsent sind und individuelle Sicherheitskonzepte umsetzen – immer.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-slate-800 border border-slate-700 rounded p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Unser Ansatz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-300 mb-4">
                <strong>Individuelle Lösungen:</strong> Jeder Kunde ist einzigartig. Wir entwickeln maßgeschneiderte Sicherheitskonzepte, die genau zu Ihren Anforderungen passen.
              </p>
            </div>
            <div>
              <p className="text-slate-300">
                <strong>Kontinuierliche Verbesserung:</strong> Sicherheit ist ein fortlaufender Prozess. Wir überprüfen, optimieren und passen regelmäßig an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ==================== CONTACT SECTION ====================
  const ContactSection = () => (
    <section id="contact" className="bg-slate-900 py-20 md:py-32 px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Kontaktieren Sie uns
        </h2>
        <p className="text-slate-300 text-lg text-center mb-12 max-w-2xl mx-auto">
          Egal ob Anfrage, Beratung oder Notfall – wir sind für Sie erreichbar und ansprechbar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Nachricht</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors resize-none"
                  placeholder="Ihre Nachricht..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-slate-300 hover:bg-white text-slate-900 font-semibold rounded transition-colors"
              >
                Senden
              </button>
              {formSubmitted && (
                <div className="bg-green-900/20 border border-green-700 text-green-300 px-4 py-3 rounded">
                  Danke! Ihre Nachricht wurde versendet. Wir melden uns bald.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Direkter Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-300 font-medium">Telefon (Platzhalter)</p>
                    <p className="text-slate-500">+43 (0) XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-300 font-medium">E-Mail (Platzhalter)</p>
                    <p className="text-slate-500">kontakt@m8protection.at</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded p-6">
              <h4 className="text-white font-semibold mb-3">24/7 Notfall-Hotline</h4>
              <p className="text-slate-400 text-sm mb-4">
                Im Notfall erreichen Sie uns rund um die Uhr unter unserer Notfall-Nummer.
              </p>
              <p className="text-lg font-semibold text-slate-300">+43 (0) EMERGENCY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // ==================== FOOTER ====================
  const Footer = () => (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-slate-300" />
              <span className="font-semibold text-white">M8 PROTECTION</span>
            </div>
            <p className="text-slate-400 text-sm">
              Professionelle Sicherheitslösungen für Unternehmen und Privatkunden.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#protection" className="hover:text-white transition-colors">Protection</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#consulting" className="hover:text-white transition-colors">Consulting</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#agb" className="hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2024 M8 International Protection. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );

  // ==================== IMPRESSUM / DATENSCHUTZ STRUCTURE ====================
  const LegalPlaceholder = () => (
    <section className="bg-slate-900 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Impressum & Datenschutz</h2>
        <p className="text-slate-400 mb-4">
          <strong>Placeholder:</strong> Fügen Sie hier den vollständigen Impressum-Text ein, der folgende Punkte enthält:
        </p>
        <ul className="text-slate-400 text-sm space-y-2 mb-6 ml-4">
          <li>• Unternehmensname und Adresse</li>
          <li>• Geschäftsführer/Inhaber</li>
          <li>• Kontaktinformationen</li>
          <li>• Handelsregistereintrag</li>
          <li>• Umsatzsteuer-ID</li>
          <li>• Haftungsausschlüsse</li>
        </ul>
        <p className="text-slate-400 text-sm">
          <strong>Datenschutzerklärung:</strong> Diese sollte DSGVO-konform sein und Information zum Umgang mit Benutzerdaten enthalten.
        </p>
      </div>
    </section>
  );

  // ==================== RENDER ====================
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      {/* SEO Meta Tags (dokumentiert für Integration in echtem HTML) */}
      <meta name="description" content="M8 International Protection - Professionelle Sicherheitslösungen, Schutz, Training und Beratung für Unternehmen und Privatkunden." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="M8 International Protection | Sicherheit auf höchstem Niveau" />

      <Navigation />
      <HeroSection />
      <ProtectionSection />
      <TrainingSection />
      <ConsultingSection />
      <WhyUsSection />
      <ContactSection />
      <LegalPlaceholder />
      <Footer />
    </div>
  );
}