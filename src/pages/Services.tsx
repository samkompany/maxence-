import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Map, 
  ShoppingCart, 
  Truck, 
  GraduationCap,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  FileText,
  Settings,
  Users
} from 'lucide-react'

const Services = () => {
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

  const mainServices = [
    {
      icon: Map,
      title: 'Consultance Topographique',
      subtitle: 'Expertise complète pour vos projets',
      description: 'Nous offrons des services de consultance topographique complets pour les secteurs minier et de la construction. Notre équipe d\'experts utilise les technologies les plus avancées pour garantir des résultats précis et fiables.',
      features: [
        'Levés topographiques détaillés',
        'Modélisation 3D du terrain',
        'Calculs de cubatures',
        'Contrôle de terrassement',
        'Délimitation de propriétés',
        'Études d\'impact environnemental'
      ],
      image: '/mining-image.jpg',
      color: 'brand-orange'
    },
    {
      icon: ShoppingCart,
      title: 'Vente d\'Instruments',
      subtitle: 'Équipements professionnels de qualité',
      description: 'Nous distribuons les meilleures marques d\'instruments topographiques. Que vous soyez professionnel ou débutant, nous avons l\'équipement adapté à vos besoins et votre budget.',
      features: [
        'Stations totales de précision',
        'Niveaux laser automatiques',
        'GPS géodésiques',
        'Théodolites électroniques',
        'Accessoires et trépieds',
        'Logiciels de traitement'
      ],
      image: '/ss1.JPG',
      color: 'brand-olive'
    },
    {
      icon: Truck,
      title: 'Location d\'Équipements',
      subtitle: 'Solutions flexibles pour tous vos projets',
      description: 'Notre service de location vous permet d\'accéder à du matériel professionnel de haute qualité sans investissement initial important. Location à la journée, à la semaine ou au mois.',
      features: [
        'Location courte et longue durée',
        'Équipements récents et calibrés',
        'Livraison sur site disponible',
        'Formation à l\'utilisation',
        'Assurance incluse',
        'Support technique 24/7'
      ],
      image: '/ss4.JPG',
      color: 'brand-orange'
    },
    {
      icon: GraduationCap,
      title: 'Formation Certifiante',
      subtitle: 'Développez vos compétences',
      description: 'Nos programmes de formation sont conçus pour vous permettre de maîtriser les techniques et instruments topographiques modernes. Formation théorique et pratique avec des experts.',
      features: [
        'Formation aux stations totales',
        'Utilisation des GPS géodésiques',
        'Logiciels de topographie',
        'Certification professionnelle',
        'Formation en entreprise',
        'Cours particuliers disponibles'
      ],
      image: '/ss5.JPG',
      color: 'brand-olive'
    }
  ]

  const processSteps = [
    {
      icon: FileText,
      title: 'Demande de devis',
      description: 'Contactez-nous pour nous faire part de vos besoins spécifiques.'
    },
    {
      icon: Settings,
      title: 'Étude personnalisée',
      description: 'Nous analysons votre projet et vous proposons une solution adaptée.'
    },
    {
      icon: Users,
      title: 'Intervention sur site',
      description: 'Notre équipe intervient avec professionnalisme et précision.'
    },
    {
      icon: FileText,
      title: 'Livraison des résultats',
      description: 'Vous recevez un rapport détaillé avec toutes les données collectées.'
    }
  ]

  const pricingPlans = [
    {
      title: 'Location Journalière',
      price: 'À partir de 500 DH/jour',
      description: 'Idéal pour les petits projets',
      features: [
        'Station totale basique',
        'Niveau laser',
        'Support téléphonique',
        'Assurance incluse'
      ],
      cta: 'Réserver',
      popular: false
    },
    {
      title: 'Location Mensuelle',
      price: 'À partir de 12 000 DH/mois',
      description: 'Pour les projets de moyenne durée',
      features: [
        'Équipement haut de gamme',
        'GPS géodésique',
        'Support technique 24/7',
        'Formation incluse',
        'Maintenance comprise'
      ],
      cta: 'Réserver',
      popular: true
    },
    {
      title: 'Consultance Projet',
      price: 'Sur devis',
      description: 'Solution clé en main',
      features: [
        'Étude complète du site',
        'Levés topographiques',
        'Rapport détaillé',
        'Plans et modélisation 3D',
        'Accompagnement continu'
      ],
      cta: 'Demander un devis',
      popular: false
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/hero-image.jpg" 
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
                <span className="text-white">Services</span>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Nos <span className="text-brand-orange">Services</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                De la consultance à la formation, nous accompagnons vos projets topographiques 
                à chaque étape avec expertise et professionnalisme. Découvrez nos solutions 
                complètes adaptées à vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="space-y-24">
              {mainServices.map((service, index) => (
                <div 
                  key={index}
                  className={`animate-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[500px] lg:h-[650px] object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute -bottom-6 ${index % 2 === 1 ? '-right-6' : '-left-6'} bg-${service.color} text-white rounded-xl p-4 shadow-glow hidden lg:block`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${service.color}/10 rounded-full mb-6`}>
                      <span className={`text-${service.color} font-medium text-sm`}>{service.subtitle}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-brand-slate/80 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <CheckCircle2 className={`w-5 h-5 text-${service.color} flex-shrink-0`} />
                          <span className="text-brand-slate/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/contact" 
                      className={`inline-flex items-center px-8 py-4 bg-${service.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all`}
                    >
                      Demander un devis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                <span className="text-brand-olive font-medium text-sm">Notre Processus</span>
              </div>
              <h2 className="section-title mb-6">
                Comment Nous <span className="text-brand-orange">Travaillons</span>
              </h2>
              <p className="section-subtitle">
                Un processus simple et efficace pour vous accompagner de A à Z
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="animate-section relative text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-brand-slate/10" />
                  )}
                  
                  <div className="relative z-10 w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-brand-orange" />
                  </div>
                  
                  <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-lg font-serif font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-slate/70 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="text-brand-orange font-medium text-sm">Nos Tarifs</span>
              </div>
              <h2 className="section-title mb-6">
                Tarifs <span className="text-brand-orange">Transparents</span>
              </h2>
              <p className="section-subtitle">
                Des prix compétitifs adaptés à tous les budgets
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`animate-section bg-white rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-brand-orange shadow-glow' : 'shadow-soft'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="inline-block px-4 py-1 bg-brand-orange text-white text-sm font-medium rounded-full mb-6">
                      Le plus populaire
                    </div>
                  )}
                  
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-2xl font-bold text-brand-orange mb-2">
                    {plan.price}
                  </div>
                  <p className="text-brand-slate/60 text-sm mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-olive flex-shrink-0" />
                        <span className="text-brand-slate/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact"
                    className={`block text-center py-4 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                        : 'bg-brand-light text-brand-dark hover:bg-brand-slate/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="section-container">
          <div className="section-inner text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Besoin d'un Service <span className="text-brand-orange">Personnalisé</span> ?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir une solution sur mesure adaptée à vos exigences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="tel:+212500000000" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark">
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
