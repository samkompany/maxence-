import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  ChevronRight,
  CheckCircle2,
  Search,
  Info,
  Star,
  Phone,
  Wrench,
  Shield,
  Truck
} from 'lucide-react'

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

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

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'stations', name: 'Stations Totales' },
    { id: 'niveaux', name: 'Niveaux Laser' },
    { id: 'gps', name: 'GPS Géodésiques' },
    { id: 'accessoires', name: 'Accessoires' }
  ]

  const products = [
    {
      id: 1,
      name: 'Station Totale Trimble S5',
      category: 'stations',
      price: '450 000 DH',
      priceType: 'Achat',
      rentalPrice: '2 500 DH/jour',
      image: '/station-totale.jpg',
      description: 'Station totale robotisée haute précision avec autolock et tracking.',
      features: [
        'Précision angulaire : 1"',
        'Portée EDM : 5 000m',
        'Autolock et tracking',
        'Écran tactile couleur'
      ],
      rating: 5,
      inStock: true,
      badge: 'Meilleure vente'
    },
    {
      id: 2,
      name: 'Station Totale Leica TS16',
      category: 'stations',
      price: '520 000 DH',
      priceType: 'Achat',
      rentalPrice: '3 000 DH/jour',
      image: '/station-totale.jpg',
      description: 'Station totale manuelle haute performance pour tous chantiers.',
      features: [
        'Précision angulaire : 0.5"',
        'Portée EDM : 7 000m',
        'Caméra overview',
        'WiFi et Bluetooth'
      ],
      rating: 5,
      inStock: true,
      badge: null
    },
    {
      id: 3,
      name: 'Niveau Laser Rotatif Spectra HV302',
      category: 'niveaux',
      price: '35 000 DH',
      priceType: 'Achat',
      rentalPrice: '500 DH/jour',
      image: '/niveau-laser.jpg',
      description: 'Niveau laser rotatif automatique pour travaux intérieurs et extérieurs.',
      features: [
        'Précision : ± 2mm/30m',
        'Portée : 300m avec cellule',
        'Autonivellement',
        'Résistant aux chocs'
      ],
      rating: 4,
      inStock: true,
      badge: 'Location populaire'
    },
    {
      id: 4,
      name: 'Niveau Laser Topcon RL-H5A',
      category: 'niveaux',
      price: '28 000 DH',
      priceType: 'Achat',
      rentalPrice: '400 DH/jour',
      image: '/niveau-laser.jpg',
      description: 'Niveau laser robuste idéal pour les chantiers de construction.',
      features: [
        'Précision : ± 1.5mm/30m',
        'Portée : 400m',
        'Autonomie 100h',
        'Étanche IP66'
      ],
      rating: 4,
      inStock: true,
      badge: null
    },
    {
      id: 5,
      name: 'GPS Géodésique Trimble R12',
      category: 'gps',
      price: '180 000 DH',
      priceType: 'Achat',
      rentalPrice: '1 500 DH/jour',
      image: '/gps-geodesique.jpg',
      description: 'Récepteur GNSS multi-fréquence haute précision.',
      features: [
        'Précision RTK : ± 8mm + 1ppm',
        'Tracking 672 canaux',
        'Inclinaison compensée',
        'Batterie 10h'
      ],
      rating: 5,
      inStock: true,
      badge: 'Haute précision'
    },
    {
      id: 6,
      name: 'GPS Géodésique Emlid Reach RS2',
      category: 'gps',
      price: '45 000 DH',
      priceType: 'Achat',
      rentalPrice: '600 DH/jour',
      image: '/gps-geodesique.jpg',
      description: 'Solution GNSS abordable avec performance professionnelle.',
      features: [
        'Précision RTK : ± 2cm',
        'LoRa radio intégrée',
        'Autonomie 22h',
        'Application mobile'
      ],
      rating: 4,
      inStock: true,
      badge: 'Bon rapport qualité/prix'
    },
    {
      id: 7,
      name: 'Trépied Aluminium Robuste',
      category: 'accessoires',
      price: '2 500 DH',
      priceType: 'Achat',
      rentalPrice: '100 DH/jour',
      image: '/equipment-image.jpg',
      description: 'Trépied professionnel en aluminium léger et stable.',
      features: [
        'Hauteur : 1.05 - 1.70m',
        'Poids : 4.5kg',
        'Tête plate précise',
        'Serrages rapides'
      ],
      rating: 4,
      inStock: true,
      badge: null
    },
    {
      id: 8,
      name: 'Mire Nivellement 5m',
      category: 'accessoires',
      price: '1 800 DH',
      priceType: 'Achat',
      rentalPrice: '80 DH/jour',
      image: '/equipment-image.jpg',
      description: 'Mire de nivellement télescopique en aluminium.',
      features: [
        'Hauteur : 5m',
        'Graduation E',
        'Niveau sphérique',
        'Sac de transport'
      ],
      rating: 4,
      inStock: true,
      badge: null
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const services = [
    {
      icon: Wrench,
      title: 'Maintenance & Calibration',
      description: 'Service complet de maintenance et calibration de vos instruments'
    },
    {
      icon: Shield,
      title: 'Garantie Étendue',
      description: 'Options de garantie allant jusqu\'à 3 ans sur tous nos produits'
    },
    {
      icon: Truck,
      title: 'Livraison & Installation',
      description: 'Livraison sur site et formation à l\'utilisation incluse'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/equipment-image.jpg" 
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
                <span className="text-white">Équipements</span>
              </nav>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                Nos <span className="text-brand-orange">Équipements</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed">
                Découvrez notre gamme complète d'instruments topographiques professionnels. 
                Vente et location d'équipements de précision des meilleures marques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-brand-slate/10 sticky top-20 z-30">
        <div className="section-container">
          <div className="section-inner">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-slate/50" />
                <input 
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-brand-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      activeCategory === category.id
                        ? 'bg-brand-orange text-white'
                        : 'bg-brand-light text-brand-slate hover:bg-brand-orange/10'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-brand-slate">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-section bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-brand-orange text-white text-xs font-medium rounded-full">
                        {product.badge}
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center">
                        <span className="text-white font-medium">Rupture de stock</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-brand-orange fill-current" />
                      ))}
                    </div>

                    <h3 className="font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-brand-slate/70 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-xs text-brand-slate/60">
                          <CheckCircle2 className="w-3 h-3 text-brand-olive" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-xs text-brand-slate/60">Achat</p>
                        <p className="text-lg font-bold text-brand-orange">{product.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-brand-slate/60">Location</p>
                        <p className="text-sm font-medium text-brand-dark">{product.rentalPrice}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link 
                        to="/contact"
                        className="flex-1 py-2 bg-brand-orange text-white text-sm font-medium rounded-lg text-center hover:bg-brand-orange-dark transition-colors"
                      >
                        Acheter
                      </Link>
                      <Link 
                        to="/contact"
                        className="flex-1 py-2 bg-brand-light text-brand-dark text-sm font-medium rounded-lg text-center hover:bg-brand-slate/20 transition-colors"
                      >
                        Louer
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Info className="w-16 h-16 text-brand-slate/30 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-brand-slate/70">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-olive/10 rounded-full mb-6">
                <span className="text-brand-olive font-medium text-sm">Nos Services</span>
              </div>
              <h2 className="section-title mb-6">
                Services <span className="text-brand-orange">Complémentaires</span>
              </h2>
              <p className="section-subtitle">
                Nous vous accompagnons au-delà de la simple vente ou location d'équipements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="animate-section bg-brand-light rounded-2xl p-8 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-slate/70 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-brand-light">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section text-center mb-12">
              <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">
                Les Marques Que Nous Distribuons
              </h2>
              <p className="text-brand-slate/70">
                Nous travaillons avec les meilleurs fabricants d'instruments topographiques
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['Trimble', 'Leica Geosystems', 'Topcon', 'Sokkia', 'Spectra Precision', 'Emlid'].map((brand, index) => (
                <div 
                  key={index} 
                  className="animate-section text-2xl font-serif font-bold text-brand-slate/30 hover:text-brand-orange transition-colors cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="section-container">
          <div className="section-inner">
            <div className="animate-section grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Besoin de Conseils pour Choisir Votre <span className="text-brand-orange">Équipement</span> ?
                </h2>
                <p className="text-white/70 mb-8 text-lg leading-relaxed">
                  Nos experts sont à votre disposition pour vous aider à sélectionner 
                  l'instrument le plus adapté à vos besoins et votre budget.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-primary">
                    Demander conseil
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a href="tel:+212500000000" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark">
                    <Phone className="w-5 h-5 mr-2" />
                    Nous appeler
                  </a>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8">
                <h3 className="text-xl font-serif font-bold mb-6">
                  Pourquoi Choisir Nos Équipements ?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Produits neufs garantis par le fabricant',
                    'Stock disponible immédiat',
                    'Formation à l\'utilisation incluse',
                    'Service après-vente réactif',
                    'Possibilité de location avant achat'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Equipment
