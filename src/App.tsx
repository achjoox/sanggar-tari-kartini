import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Users,
  Clock,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Globe
} from 'lucide-react';

// Language content
const content = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      services: 'Layanan',
      gallery: 'Galeri',
      contact: 'Kontak'
    },
    hero: {
      title: 'Sanggar Tari Bali',
      subtitle: 'Kartini',
      description: 'Melestarikan kebudayaan Bali melalui seni tari yang autentik dan elegan',
      viewClasses: 'Lihat Kelas',
      contactUs: 'Hubungi Kami'
    },
    about: {
      title: 'Tentang Sanggar Tari Bali Kartini',
      description1: 'Sanggar Tari Bali Kartini didirikan tahun 1984 yang memiliki icon atau maskot "Tari Kartini". Sanggar ini memiliki misi yaitu untuk melestarikan dan mengembangkan seni tari tradisional Bali. Kami berkomitmen untuk memberikan pendidikan tari yang berkualitas tinggi dengan tetap mempertahankan nilai-nilai budaya dan tradisi yang autentik.',
      description2: 'Dengan pengalaman lebih dari 41 tahun, kami telah melatih dan menamatkan hingga ribuan penari dari berbagai kalangan, mulai dari anak-anak hingga dewasa. Kami adalah Sanggar yang cukup lama dibidang Tari dan Legendaris',
      stats: {
        students: 'Siswa Terlatih',
        experience: 'Tahun Pengalaman',
        performances: 'Penampilan'
      }
    },
    services: {
      title: 'Layanan Kami',
      description: 'Kami menyediakan berbagai paket pembelajaran tari yang disesuaikan dengan kebutuhan Anda',
      private: {
        title: 'Kelas Privat',
        description: 'Pembelajaran satu-on-satu dengan instruktur berpengalaman. Cocok untuk pemula yang ingin belajar dengan intensif atau yang memiliki jadwal khusus.',
        features: [
          'Pembelajaran personal dan fleksibel',
          'Jadwal bisa disesuaikan',
          'Progress lebih cepat',
        ],
        register: 'Daftar Sekarang'
      },
      regular: {
        title: 'Kelas Reguler',
        description: 'Pembelajaran berkelompok dengan suasana yang menyenangkan. Cocok untuk bersosialisasi sambil belajar seni tari tradisional Bali.',
        features: [
          'Belajar bersama teman-teman baru',
          'Jadwal tetap dan terstruktur',
          'Biaya lebih terjangkau',
          'Kesempatan tampil bersama'
        ],
        register: 'Daftar Sekarang'
      }
    },
    gallery: {
      title: 'Galeri Kami',
      description: 'Saksikan keindahan gerakan tari tradisional Bali yang kami ajarkan'
    },
    contact: {
      title: 'Hubungi Kami',
      description: 'Siap memulai perjalanan Anda dalam seni tari tradisional Bali? Hubungi kami sekarang!',
      phone: 'Telepon',
      email: 'Email',
      address: 'Alamat',
      addressText: 'Jl. Waturenggong No.113\nDenpasar, Bali\n80223, Indonesia',
      hours: 'Jam Operasional',
      hoursText: 'Senin - Jumat: 09.00 - 18.00 WITA\nSabtu - Minggu: 09.00 - 18.00 WITA',
      form: {
        title: 'Kirim Pesan',
        name: 'Nama Lengkap',
        namePlaceholder: 'Masukkan nama lengkap Anda',
        email: 'Email',
        emailPlaceholder: 'nama@email.com',
        phone: 'No. Telepon',
        phonePlaceholder: '+62 xxx-xxxx-xxxx',
        message: 'Pesan',
        messagePlaceholder: 'Ceritakan tentang kelas tari yang Anda inginkan...',
        send: 'Kirim Pesan'
      }
    },
    footer: {
      description: 'Melestarikan kebudayaan Bali melalui seni tari yang autentik dan elegan. Bergabunglah dengan kami untuk merasakan keindahan tari tradisional.',
      services: 'Layanan',
      servicesList: ['Kelas Privat', 'Kelas Reguler'],
      contact: 'Kontak',
      copyright: '© 2024 Sanggar Tari Bali Kartini. Semua hak dilindungi undang-undang.'
    },
    whatsapp: {
      message: 'Halo, saya ingin bertanya tentang kelas tari di Sanggar Tari Kartini'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact'
    },
    hero: {
      title: 'Kartini Dance',
      subtitle: 'Studio',
      description: 'Preserving Balinese culture through authentic and elegant traditional dance',
      viewClasses: 'View Classes',
      contactUs: 'Contact Us'
    },
    about: {
      title: 'About Kartini Bali Dance Studio',
      description1: 'Kartini Bali Dance Studio was founded at 1984 with the mascot is "Tari Kartini". Our mission is to preserve and develop traditional Balinese dance arts. We are committed to providing high-quality dance education while maintaining authentic cultural values and traditions.',
      description2: 'With over 41 years of experience, we have trained thousands of dancers from various backgrounds, from children to adults. We are dance studio that having a long experience in balinese dance and legendary.',
      stats: {
        students: 'Trained Students',
        experience: 'Years Experience',
        performances: 'Performances'
      }
    },
    services: {
      title: 'Our Services',
      description: 'We provide various dance learning packages tailored to your needs',
      private: {
        title: 'Private Class',
        description: 'One-on-one learning with experienced instructors. Perfect for beginners who want intensive learning or those with special schedules.',
        features: [
          'Personal and flexible learning',
          'Adjustable schedule',
          'Faster progress',
        ],
        register: 'Register Now'
      },
      regular: {
        title: 'Regular Class',
        description: 'Group learning with a fun atmosphere. Perfect for socializing while learning traditional Balinese dance arts.',
        features: [
          'Learn with new friends',
          'Fixed and structured schedule',
          'More affordable cost',
          'Opportunity to perform together'
        ],
        register: 'Register Now'
      }
    },
    gallery: {
      title: 'Our Gallery',
      description: 'Witness the beauty of traditional Balinese dance movements that we teach'
    },
    contact: {
      title: 'Contact Us',
      description: 'Ready to start your journey in traditional Balinese dance arts? Contact us now!',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressText: 'Jl. Waturenggong No.113\nDenpasar, Bali\n80223, Indonesia',
      hours: 'Operating Hours',
      hoursText: 'Monday - Friday: 9:00 AM - 6:00 PM WITA\nSaturday - Sunday: 9:00 AM - 6:00 PM WITA',
      form: {
        title: 'Send Message',
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        email: 'Email',
        emailPlaceholder: 'name@email.com',
        phone: 'Phone Number',
        phonePlaceholder: '+62 xxx-xxxx-xxxx',
        message: 'Message',
        messagePlaceholder: 'Tell us about the dance class you want...',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'Preserving Balinese culture through authentic and elegant traditional dance. Join us to experience the beauty of traditional dance.',
      services: 'Services',
      servicesList: ['Private Class', 'Regular Class'],
      contact: 'Contact',
      copyright: '© 2024 Kartini Bali Dance Studio. All rights reserved.'
    },
    whatsapp: {
      message: 'Hello, I would like to ask about dance classes at Kartini Dance Studio'
    }
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openWhatsApp = () => {
    const phoneNumber = '6281234567890'; // Replace with actual WhatsApp number
    const message = t.whatsapp.message;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {language === 'id' ? 'Sanggar Tari Bali Kartini' : 'Kartini Bali Dance Studio'}
            </span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('beranda')}
                className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('tentang')}
                className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.about}
              </button>
              <button 
                onClick={() => scrollToSection('layanan')}
                className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.services}
              </button>
              <button 
                onClick={() => scrollToSection('galeri')}
                className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.gallery}
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {t.nav.contact}
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full border transition-all duration-300 ${
                  isScrolled 
                    ? 'border-gray-300 text-gray-800 hover:bg-gray-100' 
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full border transition-all duration-300 ${
                  isScrolled 
                    ? 'border-gray-300 text-gray-800' 
                    : 'border-white/30 text-white'
                }`}
              >
                <Globe size={14} />
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              <div className="flex flex-col space-y-2 p-4">
                <button 
                  onClick={() => scrollToSection('beranda')}
                  className="text-left py-2 text-gray-800 hover:text-amber-600 transition-colors"
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => scrollToSection('tentang')}
                  className="text-left py-2 text-gray-800 hover:text-amber-600 transition-colors"
                >
                  {t.nav.about}
                </button>
                <button 
                  onClick={() => scrollToSection('layanan')}
                  className="text-left py-2 text-gray-800 hover:text-amber-600 transition-colors"
                >
                  {t.nav.services}
                </button>
                <button 
                  onClick={() => scrollToSection('galeri')}
                  className="text-left py-2 text-gray-800 hover:text-amber-600 transition-colors"
                >
                  {t.nav.gallery}
                </button>
                <button 
                  onClick={() => scrollToSection('kontak')}
                  className="text-left py-2 text-gray-800 hover:text-amber-600 transition-colors"
                >
                  {t.nav.contact}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.hero.title}
            <span className="block text-amber-400">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('layanan')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.viewClasses}
            </button>
            <button 
              onClick={openWhatsApp}
              className="border-2 border-white hover:bg-white hover:text-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.contactUs}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.description2}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">3000+</h3>
                  <p className="text-sm text-gray-600">{t.about.stats.students}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">41+</h3>
                  <p className="text-sm text-gray-600">{t.about.stats.experience}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">15+</h3>
                  <p className="text-sm text-gray-600">{t.about.stats.performances}</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/about-section.jpg"
                  alt="Penari Bali" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-r from-amber-200 to-orange-300 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Private Class */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.services.private.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.services.private.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.services.private.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.services.private.register}
                </button>
              </div>
            </div>

            {/* Regular Class */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.services.regular.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.services.regular.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.services.regular.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button 
                  onClick={openWhatsApp}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.services.regular.register}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.gallery.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Gallery Display */}
            <div className="relative mb-8">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={galleryImages[currentGalleryImage]}
                  alt="Galeri Sanggar Tari Kartini"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button 
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2 md:gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentGalleryImage 
                      ? 'ring-4 ring-amber-500 scale-105' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.contact.phone}</h3>
                  <p className="text-gray-600">+62 813-338-522-011</p>
                  <p className="text-gray-600">+62 812-361-383-89</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.contact.address}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {t.contact.addressText}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.contact.hours}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {t.contact.hoursText}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.contact.form.title}</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.form.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              {/* Brand Name Only - No Logo */}
              <h3 className="text-xl font-bold mb-4">
                {language === 'id' ? 'Sanggar Tari Bali Kartini' : 'Kartini Bali Dance Studio'}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-gray-300">
                {t.footer.servicesList.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
              <div className="space-y-2 text-gray-300">
                <p>+62 81-338-522-011</p>
                <p>Jl. Waturenggong No.113 Panjer, Denpasar, Bali</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-300 transform hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}

export default App;