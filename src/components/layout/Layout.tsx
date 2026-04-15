import { useState, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Map, Menu, X, Phone, ChevronRight } from 'lucide-react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/equipements', label: 'Équipements' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen bg-brand-light">
      {/* Navigation */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-white py-4'
      }`}>
        <div className="section-container">
          <div className="section-inner flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center group-hover:bg-brand-orange-dark transition-colors">
                <Map className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-brand-dark block leading-tight">
                  TOPOGRAPHIE
                </span>
                <span className="text-xs text-brand-slate/60">Consulting</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-brand-orange bg-brand-orange/10'
                      : 'text-brand-dark hover:text-brand-orange hover:bg-brand-orange/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to="/contact"
                className="btn-primary text-sm py-3 px-6"
              >
                Demander un devis
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 hover:bg-brand-light rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="section-container py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-brand-orange bg-brand-orange/10'
                    : 'text-brand-dark hover:bg-brand-light'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="btn-primary text-sm py-3 px-6 mt-4 text-center"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white">
        {/* CTA Section */}
        <div className="bg-brand-orange py-16">
          <div className="section-container">
            <div className="section-inner text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Prêt à Démarrer Votre Projet ?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour obtenir un devis personnalisé et gratuit 
                pour tous vos besoins en topographie.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-brand-dark hover:text-white transition-all duration-300">
                  Demander un devis
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <a href="tel:+212500000000" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-brand-orange transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-16">
          <div className="section-container">
            <div className="section-inner">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Logo & Description */}
                <div className="lg:col-span-1">
                  <Link to="/" className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                      <Map className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="font-serif font-bold text-xl block leading-tight">TOPOGRAPHIE</span>
                      <span className="text-xs text-white/60">Consulting</span>
                    </div>
                  </Link>
                  <p className="text-white/60 text-sm mb-6">
                    Expertise en topographie pour les secteurs minier et de la construction. 
                    Vente et location d'instruments de précision.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold mb-6 text-lg">Liens Rapides</h4>
                  <ul className="space-y-3">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link 
                          to={link.path}
                          className="text-white/60 hover:text-brand-orange transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold mb-6 text-lg">Nos Services</h4>
                  <ul className="space-y-3">
                    {[
                      'Consultance Topographique',
                      'Levés Miniers',
                      'Contrôle Construction',
                      'Vente d\'Instruments',
                      'Location d\'Équipements',
                      'Formation Certifiante'
                    ].map((item, index) => (
                      <li key={index}>
                        <span className="text-white/60 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="font-semibold mb-6 text-lg">Contact</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Map className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-white/60 text-sm">
                        123 Avenue des Champs,<br />
                        Quartier Industriel, Casablanca
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                      <a href="tel:+212500000000" className="text-white/60 hover:text-brand-orange text-sm transition-colors">
                        +212 5XX XX XX XX
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:contact@topographie.com" className="text-white/60 hover:text-brand-orange text-sm transition-colors">
                        contact@topographie.com
                      </a>
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
        </div>
      </footer>
    </div>
  )
}

export default Layout
