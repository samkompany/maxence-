import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Map, 
  ShoppingCart, 
  Truck, 
  GraduationCap,
  Award,
  TrendingUp,
  Clock,
  Shield,
  Headphones,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Star
} from 'lucide-react'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    heroTl
      .fromTo('.hero-badge', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo('.hero-title-line', 
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
        '-=1.2'
      )
      .fromTo('.hero-stats', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.6'
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

  const services = [
    {
      icon: Map,
      title: 'Consultance Topographique',
      description: 'Expertise complète en levés topographiques pour les projets miniers et de construction.',
      link: '/services',
      color: 'bg-brand-orange'
    },
    {
      icon: ShoppingCart,
      title: 'Vente d\'Instruments',
      description: 'Large gamme d\'instruments de mesure de précision des meilleures marques.',
      link: '/equipements',
      color: 'bg-brand-olive'
    },
    {
      icon: Truck,
      title: 'Location d\'Équipements',
      description: 'Location flexible d\'équipements topographiques de dernière génération.',
      link: '/services',
      color: 'bg-brand-orange'
    },
    {
      icon: GraduationCap,
      title: 'Formation Certifiante',
      description: 'Programmes de formation pour maîtriser les techniques topographiques modernes.',
      link: '/services',
      color: 'bg-brand-olive'
    }
  ]

  const whyUsItems = [
    { icon: Award, title: 'Expertise Certifiée', description: 'Ingénieurs topographes diplômés et certifiés avec années d\'expérience' },
    { icon: TrendingUp, title: 'Équipement Moderne', description: 'Technologie de pointe et instruments de mesure de haute précision' },
    { icon: Clock, title: 'Réactivité', description: 'Intervention rapide sur tous vos chantiers, partout au Maroc' },
    { icon: Shield, title: 'Garantie Qualité', description: 'Résultats précis garantis et vérifiés selon les normes internationales' },
    { icon: Headphones, title: 'Support 24/7', description: 'Assistance technique disponible à tout moment pour vos urgences' },
    { icon: CheckCircle2, title: 'Tarifs Compétitifs', description: 'Prix transparents et adaptés à votre budget, devis gratuit' }
  ]

  const testimonials = [
    {
      name: 'Ahmed Benali',
      role: 'Directeur de Projet, Mine Atlas',
      content: 'Topographie Consulting a réalisé un travail exceptionnel sur notre site minier. Leur précision et leur professionnalisme sont remarquables.',
      rating: 5
    },
    {
      name: 'Karim Fassi',
      role: 'Ingénieur Civil, BTP Construction',
      content: 'Service rapide et efficace. Les équipements loués étaient en parfait état et le support technique était excellent.',
      rating: 5
    },
    {
      name: 'Youssef Alami',
      role: 'Géomètre Expert',
      content: 'La formation dispensée par leur équipe m\'a permis de maîtriser les dernières technologies topographiques. Hautement recommandé.',
      rating: 5
    }
  ]

  const partners = [
    'Trimble', 'Leica Geosystems', 'Topcon', 'Sokkia', 'Spectra Precision'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-10 overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #e0955b 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-olive/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10">
          <div className="section-inner">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                  <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                  <span className="text-brand-orange font-medium text-sm">Consultance Topographique</span>
                </div>
                
                <h1 className="section-title mb-6">
                  <span className="hero-title-line block">Solutions de</span>
                  <span className="hero-title-line block text-brand-orange">Mesure Précises</span>
                  <span className="hero-title-line block">pour Vos Projets</span>
                </h1>
                
                <p className="hero-desc text-lg text-brand-slate/80 mb-8 max-w-lg leading-relaxed">
                  Expertise en topographie pour les secteurs minier et de la construction. 
                  Vente et location d'instruments de précision. Votre partenaire de confiance 
                  pour tous vos besoins en levés topographiques.
                </p>
                
                <div className="hero-cta flex flex-wrap gap-4 mb-12">
                  <Link to="/services" className="btn-primary">
                    Découvrir nos services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Nous contacter
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="hero-stats flex gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-brand-orange">15+</div>
                    <div className="text-sm text-brand-slate">Années d'expérience</div>
                  </div>
                  <div className="w-px bg-brand-slate/20" />
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-brand-orange">320+</div>
                    <div className="text-sm text-brand-slate">Projets réalisés</div>
                  </div>
                  <div className="w-px bg-brand-slate/20" />
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-brand-orange">35+</div>
                    <div className="text-sm text-brand-slate">Partenaires</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="hero-image relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/home.jpg"
                    alt="Levé topographique en cours" 
                    className="w-full h-[400px] lg:h-[550px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-soft hidden lg:block animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-olive/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-brand-olive" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark">Certifié ISO 9001</div>
                      <div className="text-sm text-brand-slate">Qualité garantie</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-brand-orange text-white rounded-xl p-4 shadow-glow hidden lg:block">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold">4.9/5</span>
                  </div>
                  <div className="text-sm opacity-90">Satisfaction client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white border-y border-brand-slate/10">
        <div className="section-container">
          <div className="section-inner">
            <p className="text-center text-brand-slate/60 text-sm mb-6">Ils nous font confiance</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner, index) => (
                <div key={index} className="text-xl font-serif font-bold text-brand-slate/30 hover:text-brand-orange transition-colors cursor-default">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-light">
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
                <Link 
                  key={index}
                  to={service.link}
                  className="animate-section service-card group bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${service.color}/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:${service.color} transition-all duration-500`}>
                      <service.icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')} group-hover:text-white transition-colors`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-brand-slate/70 mb-4">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-brand-orange font-medium">
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/services" className="btn-secondary">
                Voir tous nos services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/cv.jpg"
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
                
                <p className="text-lg text-brand-slate/80 mb-6 leading-relaxed">
                  Topographie Consulting est une entreprise spécialisée dans la consultance topographique 
                  pour les secteurs minier et de la construction. Nous mettons notre expertise au service 
                  de vos projets pour garantir des mesures précises et fiables.
                </p>
                
                <p className="text-brand-slate/70 mb-8">
                  Notre équipe d'ingénieurs topographes certifiés utilise des instruments de dernière 
                  génération pour vous offrir des solutions sur mesure, adaptées à vos besoins spécifiques.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-brand-light rounded-xl">
                    <div className="stat-number text-3xl lg:text-4xl font-serif font-bold text-brand-orange mb-1" data-target="15">0</div>
                    <div className="text-xs text-brand-slate">Années d'expérience</div>
                  </div>
                  <div className="text-center p-4 bg-brand-light rounded-xl">
                    <div className="stat-number text-3xl lg:text-4xl font-serif font-bold text-brand-orange mb-1" data-target="320">0</div>
                    <div className="text-xs text-brand-slate">Projets réalisés</div>
                  </div>
                  <div className="text-center p-4 bg-brand-light rounded-xl">
                    <div className="stat-number text-3xl lg:text-4xl font-serif font-bold text-brand-orange mb-1" data-target="35">0</div>
                    <div className="text-xs text-brand-slate">Partenaires</div>
                  </div>
                </div>

                <Link to="/a-propos" className="btn-primary">
                  En savoir plus sur nous
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-light">
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
                  className="animate-section group p-8 bg-white rounded-2xl transition-all duration-500 hover:shadow-soft hover:-translate-y-2"
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

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="text-brand-orange font-medium text-sm">Témoignages</span>
              </div>
              <h2 className="section-title mb-6">
                Ce Que Disent Nos <span className="text-brand-orange">Clients</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="animate-section bg-brand-light rounded-2xl p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-orange fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-slate/80 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                    <div className="text-sm text-brand-slate">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Preview Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                  <span className="text-brand-orange font-medium text-sm">Nos Équipements</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Instruments de <span className="text-brand-orange">Précision</span>
                </h2>
                
                <p className="text-white/70 mb-8 text-lg leading-relaxed">
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

                <Link to="/equipements" className="btn-primary">
                  Voir le catalogue complet
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
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
    </div>
  )
}

export default Home
