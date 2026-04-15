import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ChevronRight,
  Award,
  Target,
  Eye,
  Heart,
  TrendingUp,
  Shield
} from 'lucide-react'

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null)

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

  const values = [
    {
      icon: Target,
      title: 'Précision',
      description: 'Nous nous engageons à fournir des mesures exactes et fiables, garantissant la qualité de chaque projet.'
    },
    {
      icon: Shield,
      title: 'Intégrité',
      description: 'Transparence et honnêteté dans toutes nos interactions avec nos clients et partenaires.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Nous investissons continuellement dans les dernières technologies pour rester à la pointe.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre amour pour la topographie se reflète dans la qualité de notre travail quotidien.'
    }
  ]

  const team = [
    {
      name: 'Mohamed Alami',
      role: 'Directeur Général',
      description: 'Ingénieur topographe avec 20 ans d\'expérience dans le secteur minier.',
      image: '/hero-image.jpg'
    },
    {
      name: 'Karim Benali',
      role: 'Chef de Projets',
      description: 'Expert en levés topographiques pour grands projets d\'infrastructure.',
      image: '/about-image.jpg'
    },
    {
      name: 'Youssef Fassi',
      role: 'Responsable Technique',
      description: 'Spécialiste des instruments de mesure et technologies GPS.',
      image: '/mining-image.jpg'
    },
    {
      name: 'Ahmed Tazi',
      role: 'Formateur Senior',
      description: 'Formateur certifié avec plus de 15 ans d\'expérience pédagogique.',
      image: '/construction-image.jpg'
    }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Gestion de la qualité' },
    { name: 'ISO 14001:2015', description: 'Gestion environnementale' },
    { name: 'OHSAS 18001', description: 'Santé et sécurité' },
    { name: 'Certification Marocaine', description: 'Bureau d\'études agréé' }
  ]

  const milestones = [
    { year: '2009', title: 'Création', description: 'Fondation de Topographie Consulting' },
    { year: '2012', title: 'Expansion', description: 'Ouverture de nouveaux bureaux régionaux' },
    { year: '2015', title: 'Certification ISO', description: 'Obtention de la certification ISO 9001' },
    { year: '2018', title: 'Partenariats', description: 'Partenariats avec les grandes marques' },
    { year: '2021', title: 'Innovation', description: 'Intégration des drones et scanners 3D' },
    { year: '2024', title: 'Leadership', description: 'Leader du marché topographique au Maroc' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/team-office.jpg" 
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
                <span className="text-white">À Propos</span>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                À Propos de <span className="text-brand-orange">Nous</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Depuis plus de 15 ans, Topographie Consulting accompagne les professionnels 
                des secteurs minier et de la construction avec expertise et passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/team-office.jpg" 
                    alt="Notre équipe" 
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white rounded-2xl p-6 shadow-glow hidden lg:block">
                  <div className="text-5xl font-serif font-bold">15+</div>
                  <div className="text-sm opacity-90">Années d'excellence</div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                  <span className="text-brand-olive font-medium text-sm">Notre Histoire</span>
                </div>
                
                <h2 className="section-title mb-6">
                  Une Histoire de <span className="text-brand-orange">Passion</span> et d'Excellence
                </h2>
                
                <div className="space-y-4 text-brand-slate/80 leading-relaxed">
                  <p>
                    Fondée en 2009, Topographie Consulting est née de la volonté de fournir 
                    des services topographiques de haute qualité aux entreprises marocaines. 
                    Ce qui a commencé comme une petite équipe de passionnés est devenu aujourd'hui 
                    l'un des bureaux d'études topographiques les plus respectés du pays.
                  </p>
                  <p>
                    Au fil des années, nous avons constamment investi dans la formation de nos 
                    équipes et l'acquisition d'équipements de dernière génération. Cette 
                    démarche d'amélioration continue nous a permis de réaliser plus de 320 projets 
                    pour des clients prestigieux dans les secteurs minier, de la construction 
                    et de l'infrastructure.
                  </p>
                  <p>
                    Notre mission reste inchangée : fournir des solutions topographiques précises, 
                    fiables et innovantes qui contribuent au succès de vos projets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-brand-orange text-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: 15, suffix: '+', label: 'Années d\'expérience' },
                { value: 320, suffix: '+', label: 'Projets réalisés' },
                { value: 35, suffix: '+', label: 'Partenaires' },
                { value: 50, suffix: '+', label: 'Experts qualifiés' }
              ].map((stat, index) => (
                <div key={index} className="animate-section text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-5xl lg:text-6xl font-serif font-bold mb-2">
                    <span className="stat-number" data-target={stat.value}>0</span>
                    {stat.suffix}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="text-brand-orange font-medium text-sm">Nos Valeurs</span>
              </div>
              <h2 className="section-title mb-6">
                Les Valeurs Qui Nous <span className="text-brand-orange">Guident</span>
              </h2>
              <p className="section-subtitle">
                Ces principes fondamentaux définissent notre approche et notre engagement 
                envers nos clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="animate-section bg-white rounded-2xl p-8 text-center hover:shadow-soft transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-slate/70 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-brand-light rounded-2xl p-10">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">
                  Notre Mission
                </h3>
                <p className="text-brand-slate/80 leading-relaxed">
                  Fournir des services topographiques de excellence qui dépassent les attentes 
                  de nos clients, en utilisant les technologies les plus avancées et en 
                  maintenant les plus hauts standards de qualité et de précision. Nous nous 
                  engageons à contribuer au succès de chaque projet que nous entreprendons.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-brand-light rounded-2xl p-10">
                <div className="w-16 h-16 bg-brand-olive/10 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-brand-olive" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">
                  Notre Vision
                </h3>
                <p className="text-brand-slate/80 leading-relaxed">
                  Devenir le leader de référence en Afrique du Nord dans le domaine de la 
                  topographie et des géosciences, reconnu pour notre expertise, notre 
                  innovation et notre engagement envers l'excellence. Nous aspirons à façonner 
                  l'avenir de la topographie grâce à l'innovation technologique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                <span className="text-brand-olive font-medium text-sm">Notre Parcours</span>
              </div>
              <h2 className="section-title mb-6">
                Les Jalons de Notre <span className="text-brand-orange">Histoire</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-slate/10 -translate-x-1/2" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className={`animate-section grid lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-left' : 'lg:text-right'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-soft inline-block">
                        <div className="text-3xl font-serif font-bold text-brand-orange mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-lg font-semibold text-brand-dark mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-brand-slate/70 text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden lg:flex justify-center">
                      <div className="w-4 h-4 bg-brand-orange rounded-full ring-4 ring-brand-orange/20" />
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
                <span className="text-brand-orange font-medium text-sm">Certifications</span>
              </div>
              <h2 className="section-title mb-6">
                Reconnus et <span className="text-brand-orange">Certifiés</span>
              </h2>
              <p className="section-subtitle">
                Nos certifications témoignent de notre engagement envers la qualité 
                et l'excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="animate-section bg-brand-light rounded-2xl p-8 text-center hover:shadow-soft transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-dark mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-brand-slate/70 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                <span className="text-brand-olive font-medium text-sm">Notre Équipe</span>
              </div>
              <h2 className="section-title mb-6">
                Les Experts Qui Vous <span className="text-brand-orange">Accompagnent</span>
              </h2>
              <p className="section-subtitle">
                Une équipe passionnée et qualifiée à votre service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="animate-section bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-serif font-bold text-brand-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-orange text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-brand-slate/70 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
