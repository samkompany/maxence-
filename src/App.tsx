import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Map, 
  ShoppingCart, 
  Truck, 
  GraduationCap, 
  Award, 
  Clock, 
  Headphones, 
  Shield, 
  TrendingUp,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const whyUsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    heroTl
      .fromTo('.hero-badge', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo('.hero-title span', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 
        '-=0.4'
      )
      .fromTo('.hero-desc', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.4'
      )
      .fromTo('.hero-cta', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.4'
      )
      .fromTo('.hero-image', 
        { opacity: 0, scale: 1.1, clipPath: 'inset(0 100% 0 0)' }, 
        { opacity: 1, scale: 1, clipPath: 'inset(0 0% 0 0)', duration: 1.2 }, 
        '-=1'
      )

    // Scroll animations
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

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number')
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-target') || '0')
      gsap.fromTo(stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: Map,
      title: 'Consultance Topographique',
      description: 'Expertise complète en levés topographiques pour les projets miniers et de construction. Plans précis et rapports détaillés.',
      image: '/mining-image.jpg'
    },
    {
      icon: ShoppingCart,
      title: 'Vente d\'Instruments',
      description: 'Large gamme d\'instruments de mesure de précision : théodolites, stations totales, niveaux laser et GPS.',
      image: '/ss1.JPG'
    },
    {
      icon: Truck,
      title: 'Location d\'Équipements',
      description: 'Location flexible d\'équipements topographiques de dernière génération pour tous types de projets.',
      image: '/ss4.JPG'
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Programmes de formation certifiants pour maîtriser les techniques et instruments topographiques modernes.',
      image: '/ss5.JPG'
    }
  ]

  const whyUsItems = [
    { icon: Award, title: 'Expertise Certifiée', description: 'Ingénieurs topographes diplômés et certifiés' },
    { icon: TrendingUp, title: 'Équipement Moderne', description: 'Technologie de pointe et instruments précis' },
    { icon: Clock, title: 'Réactivité', description: 'Intervention rapide sur tous vos chantiers' },
    { icon: Shield, title: 'Garantie Qualité', description: 'Résultats précis garantis et vérifiés' },
    { icon: Headphones, title: 'Support 24/7', description: 'Assistance technique disponible à tout moment' },
    { icon: CheckCircle2, title: 'Tarifs Compétitifs', description: 'Prix transparents et adaptés à votre budget' }
  ]

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-6'
      }`}>
        <div className="section-container">
          <div className="section-inner flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <Map className="w-6 h-6 text-white" />
              </div>
              <span className={`font-serif font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-brand-dark' : 'text-brand-dark'
              }`}>
                TOPOGRAPHIE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection(heroRef)} className="nav-link">Accueil</button>
              <button onClick={() => scrollToSection(aboutRef)} className="nav-link">À Propos</button>
              <button onClick={() => scrollToSection(servicesRef)} className="nav-link">Services</button>
              <button onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection(contactRef)}
                className="btn-primary text-sm py-3 px-6"
              >
                Demander un devis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="section-container py-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection(heroRef)} className="text-left py-2 text-brand-dark font-medium">Accueil</button>
            <button onClick={() => scrollToSection(aboutRef)} className="text-left py-2 text-brand-dark font-medium">À Propos</button>
            <button onClick={() => scrollToSection(servicesRef)} className="text-left py-2 text-brand-dark font-medium">Services</button>
            <button onClick={() => scrollToSection(contactRef)} className="text-left py-2 text-brand-dark font-medium">Contact</button>
            <button 
              onClick={() => scrollToSection(contactRef)}
              className="btn-primary text-sm py-3 px-6 mt-4"
            >
              Demander un devis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #e0955b 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="section-container relative z-10">
          <div className="section-inner">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                  <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                  <span className="text-brand-orange font-medium text-sm">Consultance Topographique</span>
                </div>
                
                <h1 className="hero-title section-title mb-6">
                  <span className="block">Solutions de</span>
                  <span className="block text-brand-orange">Mesure Précises</span>
                  <span className="block">pour Vos Projets</span>
                </h1>
                
                <p className="hero-desc section-subtitle mb-8 max-w-lg">
                  Expertise en topographie pour les secteurs minier et de la construction. 
                  Vente et location d'instruments de précision.
                </p>
                
                <div className="hero-cta flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection(servicesRef)}
                    className="btn-primary"
                  >
                    Découvrir nos services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                  <button 
                    onClick={() => scrollToSection(contactRef)}
                    className="btn-outline"
                  >
                    Nous contacter
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-8 mt-12">
                  <div>
                    <div className="text-3xl font-serif font-bold text-brand-orange">15+</div>
                    <div className="text-sm text-brand-slate">Années d'expérience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-brand-orange">320+</div>
                    <div className="text-sm text-brand-slate">Projets réalisés</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-brand-orange">35+</div>
                    <div className="text-sm text-brand-slate">Partenaires</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="hero-image relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/hero-image.jpg" 
                    alt="Levé topographique en cours" 
                    className="w-full h-[400px] lg:h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-olive/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-brand-olive" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark">Certifié ISO</div>
                      <div className="text-sm text-brand-slate">Qualité garantie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/about-image.jpg" 
                    alt="Équipe topographique au travail" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/20 to-transparent" />
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -bottom-8 -right-8 bg-brand-orange text-white rounded-2xl p-6 shadow-glow hidden lg:block">
                  <div className="text-5xl font-serif font-bold">15</div>
                  <div className="text-sm opacity-90">Années d'expérience</div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                  <span className="text-brand-olive font-medium text-sm">À Propos de Nous</span>
                </div>
                
                <h2 className="section-title mb-6">
                  Votre Partenaire de Confiance en <span className="text-brand-orange">Topographie</span>
                </h2>
                
                <p className="section-subtitle mb-6">
                  Topographie Consulting est une entreprise spécialisée dans la consultance topographique 
                  pour les secteurs minier et de la construction. Nous mettons notre expertise au service 
                  de vos projets pour garantir des mesures précises et fiables.
                </p>
                
                <p className="text-brand-slate/70 mb-8">
                  Notre équipe d'ingénieurs topographes certifiés utilise des instruments de dernière 
                  génération pour vous offrir des solutions sur mesure, adaptées à vos besoins spécifiques.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="stat-card text-center">
                    <div className="stat-number text-3xl lg:text-4xl font-serif font-bold text-brand-orange mb-1" data-target="15">0</div>
                    <div className="text-xs text-brand-slate">Années d'expérience</div>
                  </div>
                  <div className="stat-card text-center">
                    <div className="stat-number text-3xl lg:text-4xl font-serif font-bold text-brand-orange mb-1" data-target="320">0</div>
                    <div className="text-xs text-brand-slate">Projets réalisés</div>
                  </div>
                  <div className="stat-card text-center">
                    <div className="stat-number text-3xl lg:text-4xl font-serif font-bold text-brand-orange mb-1" data-target="35">0</div>
                    <div className="text-xs text-brand-slate">Partenaires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            {/* Section Header */}
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="text-brand-orange font-medium text-sm">Nos Services</span>
              </div>
              <h2 className="section-title mb-6">
                Des Solutions <span className="text-brand-orange">Complètes</span> pour Vos Besoins
              </h2>
              <p className="section-subtitle">
                De la consultance à la formation, nous accompagnons vos projets topographiques 
                à chaque étape avec expertise et professionnalisme.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="animate-section service-card group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-brand-orange" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-slate/70 mb-4">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={() => scrollToSection(contactRef)}
                    className="inline-flex items-center text-brand-orange font-medium hover:gap-2 transition-all"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            {/* Section Header */}
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                <span className="text-brand-olive font-medium text-sm">Pourquoi Nous Choisir</span>
              </div>
              <h2 className="section-title mb-6">
                L'Excellence à <span className="text-brand-orange">Chaque Niveau</span>
              </h2>
              <p className="section-subtitle">
                Nous nous engageons à fournir des services de la plus haute qualité 
                avec professionnalisme et rigueur.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsItems.map((item, index) => (
                <div 
                  key={index}
                  className="animate-section group p-8 bg-brand-light rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-soft hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:shadow-glow transition-all duration-500">
                    <item.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-slate/70 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="text-brand-orange font-medium text-sm">Nos Équipements</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Instruments de <span className="text-brand-orange">Précision</span>
                </h2>
                
                <p className="text-white/70 mb-8">
                  Nous utilisons et proposons à la vente et à la location les meilleurs 
                  instruments topographiques du marché, garantissant des mesures précises 
                  et fiables pour tous vos projets.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Stations totales haute précision',
                    'Niveaux laser automatiques',
                    'GPS géodésiques',
                    'Théodolites électroniques',
                    'Scanners 3D et drones'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection(contactRef)}
                    className="btn-primary"
                  >
                    Voir le catalogue
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="/equipment-image.jpg" 
                    alt="Équipements topographiques" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/40 to-transparent" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white rounded-xl p-4 shadow-glow hidden lg:block">
                  <div className="text-3xl font-serif font-bold">50+</div>
                  <div className="text-sm opacity-90">Références d'équipements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                  <span className="text-brand-orange font-medium text-sm">Contactez-Nous</span>
                </div>
                
                <h2 className="section-title mb-6">
                  Discutons de Votre <span className="text-brand-orange">Projet</span>
                </h2>
                
                <p className="section-subtitle mb-10">
                  Prêt à démarrer votre projet topographique ? Contactez-nous dès maintenant 
                  pour obtenir un devis personnalisé et gratuit.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">Adresse</h4>
                      <p className="text-brand-slate/70">123 Avenue des Champs, Quartier Industriel</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">Téléphone</h4>
                      <p className="text-brand-slate/70">+212 5XX XX XX XX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark mb-1">Email</h4>
                      <p className="text-brand-slate/70">contact@topographie-consulting.com</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10">
                  <h4 className="font-semibold text-brand-dark mb-4">Suivez-nous</h4>
                  <div className="flex gap-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:bg-brand-orange hover:text-white transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">
                  Demander un devis
                </h3>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Nom complet</label>
                      <input 
                        type="text" 
                        className="form-input"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="form-label">Téléphone</label>
                      <input 
                        type="tel" 
                        className="form-input"
                        placeholder="Votre téléphone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-input"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">Type de service</label>
                    <select className="form-input">
                      <option value="">Sélectionnez un service</option>
                      <option value="consultance">Consultance Topographique</option>
                      <option value="vente">Vente d'Instruments</option>
                      <option value="location">Location d'Équipements</option>
                      <option value="formation">Formation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="form-label">Message</label>
                    <textarea 
                      className="form-input min-h-[120px] resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary w-full"
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Merci pour votre demande ! Nous vous contacterons bientôt.')
                    }}
                  >
                    Envoyer la demande
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="section-container">
          <div className="section-inner">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* Logo & Description */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                    <Map className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-serif font-bold text-xl">TOPOGRAPHIE</span>
                </div>
                <p className="text-white/60 text-sm mb-6">
                  Expertise en topographie pour les secteurs minier et de la construction. 
                  Vente et location d'instruments de précision.
                </p>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-6">Liens Rapides</h4>
                <ul className="space-y-3">
                  {['Accueil', 'À Propos', 'Services', 'Contact'].map((item, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => {
                          const refs = [heroRef, aboutRef, servicesRef, contactRef]
                          scrollToSection(refs[index])
                        }}
                        className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold mb-6">Nos Services</h4>
                <ul className="space-y-3">
                  {[
                    'Consultance Topographique',
                    'Vente d\'Instruments',
                    'Location d\'Équipements',
                    'Formation'
                  ].map((item, index) => (
                    <li key={index}>
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-6">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white/60 text-sm">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    123 Avenue des Champs
                  </li>
                  <li className="flex items-center gap-3 text-white/60 text-sm">
                    <Phone className="w-4 h-4 text-brand-orange" />
                    +212 5XX XX XX XX
                  </li>
                  <li className="flex items-center gap-3 text-white/60 text-sm">
                    <Mail className="w-4 h-4 text-brand-orange" />
                    contact@topographie.com
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm">
                © 2024 Topographie Consulting. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                  Conditions d'utilisation
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
