'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, Globe, MapPin, Building, Truck, Download, Share2, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function VirtualBusinessCard() {
  const [activeContact, setActiveContact] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showLogoOverlay, setShowLogoOverlay] = useState(true)

  // Foton company images for the gallery
  const galleryImages = [
    { id: 1, name: 'Foton Trucks', src: '/imagenes/otras fotos/F1.jpeg' },
    { id: 2, name: 'Foton Commercial Vehicles', src: '/imagenes/otras fotos/F2.jpg' },
    { id: 3, name: 'Foton International', src: '/imagenes/otras fotos/F3.jpg' },
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Hide logo overlay after 3 seconds
    const logoTimer = setTimeout(() => {
      setShowLogoOverlay(false)
    }, 3000)

    return () => clearTimeout(logoTimer)
  }, [])

  const handleContactClick = (type: string) => {
    setActiveContact(type)
    setTimeout(() => setActiveContact(null), 2000)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+51 937375605',
      action: () => {
        handleContactClick('whatsapp')
        window.open('https://wa.me/51937375605?text=' + encodeURIComponent('Hola Jhon, vi tu tarjeta de presentación y me gustaría contactarte.'), '_blank')
      }
    },
    {
      icon: Mail,
      label: 'Email 1',
      value: 'jhonperez@foton.com.cn',
      action: () => {
        handleContactClick('gmail')
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jhonperez@foton.com.cn&su=' + encodeURIComponent('Consulta – Tarjeta FOTON') + '&body=' + encodeURIComponent('Hola Jhon,\\n\\nTe contacto desde tu tarjeta de presentación.\\n\\nGracias,'), '_blank')
      }
    },
    {
      icon: Mail,
      label: 'Email 2',
      value: 'jhoncarlosperezcubas@gmail.com',
      action: () => {
        handleContactClick('gmail')
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jhoncarlosperezcubas@gmail.com&su=' + encodeURIComponent('Consulta – Tarjeta FOTON') + '&body=' + encodeURIComponent('Hola Jhon,\\n\\nTe contacto desde tu tarjeta de presentación.\\n\\nGracias,'), '_blank')
      }
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.fotonmotor.com',
      action: () => {
        handleContactClick('website')
        window.open('https://www.fotonmotor.com', '_blank')
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white/90 backdrop-blur-sm p-4 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Blue Header Space for Future Image */}
        <div className="h-32 bg-[#00529E] rounded-t-lg mb-4 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-sm opacity-75">Espacio para imagen</p>
          </div>
        </div>

        {/* Name and Title Section */}
        <div className="text-center mb-6">
          <h1 className={`text-3xl font-bold text-black mb-2 transform transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Jhon Carlos Pérez Cubas
          </h1>
          <p className={`text-lg text-[#00529E] font-semibold transform transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Business Manager - Foton International Trade Co., Ltd.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Information Card */}
          <Card className={`bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <CardContent className="p-6">
              {/* Personal Info */}
              <div className={`space-y-4 mb-6 transform transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-[#00529E]" />
                  <div>
                    <p className="font-semibold text-black text-sm">
                      Foton International Trade Co., Ltd.
                    </p>
                    <Badge variant="secondary" className="mt-1">
                      Peru Office
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#00529E]" />
                  <div>
                    <p className="text-xs text-gray-600">
                      Especializado en:
                    </p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs border-[#00529E] text-[#00529E]">PV</Badge>
                      <Badge variant="outline" className="text-xs border-[#00529E] text-[#00529E]">MT</Badge>
                      <Badge variant="outline" className="text-xs border-[#00529E] text-[#00529E]">LDT</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className={`space-y-3 mb-6 transform transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                {contactInfo.map((contact, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start gap-3 h-auto p-3 hover:bg-[#00529E] hover:text-white transition-all duration-200 group border-[#00529E] text-[#00529E]"
                    onClick={contact.action}
                    aria-label={
                      contact.label.includes('Email') ? 
                        `Enviar correo a Jhon (${contact.label.toLowerCase().includes('1') ? 'corporativo' : 'personal'})` : 
                        contact.label.includes('Teléfono') ? 
                        'Contactar por WhatsApp' : 
                        contact.label.includes('Website') ? 
                        'Visitar sitio web' : 
                        contact.label
                    }
                  >
                    <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <p className="font-semibold text-sm">
                        {contact.label}
                      </p>
                      <p className="text-xs opacity-75">
                        {contact.value}
                      </p>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Interactive Feedback */}
              {activeContact && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200 animate-pulse transform transition-all duration-300">
                  <p className="text-green-700 text-center font-medium text-sm">
                    {activeContact === 'whatsapp' && 'Abriendo WhatsApp...'}
                    {activeContact === 'gmail' && 'Abriendo Gmail...'}
                    {activeContact === 'website' && 'Abriendo sitio web...'}
                  </p>
                </div>
              )}

              {/* Addresses */}
              <div className={`space-y-3 mb-6 transform transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00529E] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-black mb-1">
                      HQ Oficina Central Beijing:
                    </p>
                    <p className="text-xs text-gray-600">
                      No.15, Shayang Road, Shahe, Changping District, Beijing 102206
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00529E] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-black mb-1">
                      FOTON Internacional (Perú):
                    </p>
                    <p className="text-xs text-gray-600">
                      Av. Guardia Civil 1321, Int. 802, Surquillo, Lima
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className={`grid grid-cols-2 gap-2 transform transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8 border-[#00529E] text-[#00529E] hover:bg-[#00529E] hover:text-white"
                  onClick={() => {
                    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Jhon Carlos Pérez Cubas\nORG:Foton International Trade Co., Ltd.\nTITLE:Business Manager\nTEL:+51937375605\nEMAIL:jhonperez@foton.com.cn\nEMAIL:jhoncarlosperezcubas@gmail.com\nURL:https://www.fotonmotor.com\nADR:;;No.15, Shayang Road, Shahe, Changping District;Beijing;;102206;China\nEND:VCARD`
                    const blob = new Blob([vcard], { type: 'text/vcard' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'Jhon_Carlos_Perez_Cubas.vcf'
                    a.click()
                    URL.revokeObjectURL(url)
                  }}
                  aria-label="Guardar tarjeta de contacto"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Guardar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-8 border-[#00529E] text-[#00529E] hover:bg-[#00529E] hover:text-white"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Jhon Carlos Pérez Cubas - Business Manager',
                        text: 'Business Manager en Foton International Trade Co., Ltd.',
                        url: window.location.href
                      })
                    }
                  }}
                  aria-label="Compartir tarjeta de presentación"
                >
                  <Share2 className="w-3 h-3 mr-1" />
                  Compartir
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Company Gallery Card */}
          <Card className={`bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg transform transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <CardContent className="p-6">
              <h3 className={`text-xl font-bold text-black mb-4 text-center transform transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
                Foton International Trade
              </h3>

              {/* Image Gallery */}
              <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
                {/* Image display with horizontal scrolling */}
                <div className="w-full h-full overflow-hidden">
                  <div 
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(${-currentImageIndex * 100}%)` }}
                  >
                    {galleryImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 h-full">
                        <img 
                          src={image.src} 
                          alt={image.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logo Overlay */}
                {showLogoOverlay && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-1000">
                    <div className="text-white text-center animate-pulse">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[#00529E] font-bold text-lg">FOTON</span>
                      </div>
                      <p className="text-sm">Cargando galería...</p>
                    </div>
                  </div>
                )}

                {/* Navigation Arrows */}
                {!showLogoOverlay && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black hover:text-[#00529E]"
                      onClick={prevImage}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-black hover:text-[#00529E]"
                      onClick={nextImage}
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {galleryImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-[#00529E]' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Company Info */}
              <div className={`space-y-3 transform transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Líder mundial en vehículos comerciales
                  </p>
                  <div className="flex justify-center gap-2">
                    <Badge variant="outline" className="text-xs border-[#00529E] text-[#00529E]">Calidad</Badge>
                    <Badge variant="outline" className="text-xs border-[#00529E] text-[#00529E]">Innovación</Badge>
                    <Badge variant="outline" className="text-xs border-[#00529E] text-[#00529E]">Global</Badge>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Presencia en más de 110 países
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className={`text-center mt-6 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-xs text-gray-500">
            {new Date().getFullYear()}
          </p>
        </div>
        
        {/* Final image at the bottom */}
        <div className="mt-6 flex justify-center">
          <img 
            src="/imagenes/otras fotos/GF1.jpeg" 
            alt="Foton Final"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
