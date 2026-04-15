import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  User,
  Building,
  FileText
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const sections = document.querySelectorAll('.animate-section')
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 5XX XX XX XX',
      link: 'tel:+212500000000',
      description: 'Lun-Ven: 8h00 - 18h00'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@topographie.com',
      link: 'mailto:contact@topographie.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Avenue des Champs, Casablanca',
      link: '#',
      description: 'Quartier Industriel'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven: 8h00 - 18h00',
      link: '#',
      description: 'Sam: 9h00 - 12h00'
    }
  ]

  const services = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'consultance', label: 'Consultance Topographique' },
    { value: 'vente', label: 'Achat d\'Instruments' },
    { value: 'location', label: 'Location d\'Équipements' },
    { value: 'formation', label: 'Formation' },
    { value: 'maintenance', label: 'Maintenance & Calibration' },
    { value: 'autre', label: 'Autre demande' }
  ]

  const faqs = [
    {
      question: 'Quel est le délai de livraison pour un achat ?',
      answer: 'Pour les produits en stock, la livraison est effectuée sous 24 à 48h dans tout le Maroc. Pour les commandes spéciales, le délai est de 2 à 4 semaines.'
    },
    {
      question: 'Proposez-vous la formation à l\'utilisation des instruments ?',
      answer: 'Oui, nous proposons des formations complètes à l\'utilisation de tous nos instruments. La formation peut être effectuée dans nos locaux ou sur votre site.'
    },
    {
      question: 'Quelle est la durée minimale de location ?',
      answer: 'La location est possible dès une journée. Nous proposons des tarifs dégressifs pour les locations de plusieurs jours ou plusieurs semaines.'
    },
    {
      question: 'Vos instruments sont-ils garantis ?',
      answer: 'Tous nos instruments neufs bénéficient de la garantie constructeur (généralement 1 à 2 ans). Nous proposons également des extensions de garantie.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/about-image.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/70" />
        </div>
        
        <div className="section-container relative z-10">
          <div className="section-inner">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                <Link to="/" className="hover:text-brand-orange transition-colors">Accueil</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Contact</span>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Contactez-<span className="text-brand-orange">Nous</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Prêt à démarrer votre projet ? Notre équipe est à votre écoute pour 
                répondre à toutes vos questions et vous accompagner dans vos projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="animate-section bg-white rounded-2xl p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange transition-colors">
                    <info.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-brand-dark mb-1">{info.title}</h3>
                  <p className="text-brand-orange font-medium mb-1">{info.content}</p>
                  <p className="text-brand-slate/60 text-sm">{info.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                  <span className="text-brand-orange font-medium text-sm">Envoyez-nous un message</span>
                </div>
                
                <h2 className="section-title mb-6">
                  Demander un <span className="text-brand-orange">Devis</span>
                </h2>
                
                <p className="text-brand-slate/70 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {isSubmitted ? (
                  <div className="bg-brand-olive/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-brand-olive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-brand-olive" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-brand-slate/70">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Nom complet *
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="form-label flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Téléphone *
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="+212 6XX XX XX XX"
                        />
                      </div>
                      <div>
                        <label className="form-label flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Entreprise
                        </label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Type de service *
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="form-label flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message *
                      </label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Envoyer la demande
                      <Send className="w-5 h-5 ml-2" />
                    </button>

                    <p className="text-xs text-brand-slate/60 text-center">
                      En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                    </p>
                  </form>
                )}
              </div>

              {/* Map & Info */}
              <div>
                <div className="bg-brand-light rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-6">
                    Nos Coordonnées
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Siège Social</h4>
                        <p className="text-brand-slate/70 text-sm">
                          123 Avenue des Champs<br />
                          Quartier Industriel<br />
                          20250 Casablanca, Maroc
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Téléphone</h4>
                        <p className="text-brand-slate/70 text-sm">
                          +212 5XX XX XX XX (Standard)<br />
                          +212 6XX XX XX XX (Service commercial)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Email</h4>
                        <p className="text-brand-slate/70 text-sm">
                          contact@topographie.com<br />
                          commercial@topographie.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-dark mb-1">Horaires d'ouverture</h4>
                        <p className="text-brand-slate/70 text-sm">
                          Lundi - Vendredi: 8h00 - 18h00<br />
                          Samedi: 9h00 - 12h00<br />
                          Dimanche: Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-brand-dark rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-serif font-bold mb-6">
                    Suivez-nous
                  </h3>
                  <p className="text-white/70 mb-6">
                    Restez informé de nos actualités et nouveautés
                  </p>
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, label: 'Facebook' },
                      { icon: Twitter, label: 'Twitter' },
                      { icon: Linkedin, label: 'LinkedIn' },
                      { icon: Instagram, label: 'Instagram' }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors"
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="h-96 bg-brand-light relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-4" />
              <p className="text-brand-slate font-medium">Carte interactive</p>
              <p className="text-brand-slate/60 text-sm">123 Avenue des Champs, Casablanca</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                <span className="text-brand-olive font-medium text-sm">FAQ</span>
              </div>
              <h2 className="section-title mb-6">
                Questions <span className="text-brand-orange">Fréquentes</span>
              </h2>
              <p className="section-subtitle">
                Retrouvez les réponses aux questions les plus courantes
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="animate-section bg-white rounded-xl p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-semibold text-brand-dark mb-3 flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-brand-slate/70 pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-brand-orange text-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                  Besoin d'une Intervention Urgente ?
                </h2>
                <p className="text-white/80">
                  Notre service d'astreinte est disponible 24h/24 et 7j/7 pour vos urgences.
                </p>
              </div>
              <a 
                href="tel:+212600000000" 
                className="inline-flex items-center px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-brand-dark hover:text-white transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                +212 6XX XX XX XX
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
