'use client'

import { MapPin, Clock, Award, Zap, Droplets, Wind, Shield, ChevronRight, Eye, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLiveCamActive, setIsLiveCamActive] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const hour = currentTime.getHours()
    const isActive = hour >= 7 && hour < 23
    setIsLiveCamActive(isActive)
  }, [currentTime])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
  }

  const washers = [
    {
      name: 'Pack Básico',
      price: '3€',
      duration: '20 minutos',
      description: 'Ideal para 1-2 prendas',
      features: ['20 minutos de lavado', 'Detergente incluido', 'Suavizante incluido', 'Capacidad hasta 5kg'],
      popular: false
    },
    {
      name: 'Pack Estándar',
      price: '5€',
      duration: '35 minutos',
      description: 'Ideal para carga completa',
      features: ['35 minutos de lavado', 'Detergente incluido', 'Suavizante incluido', 'Capacidad hasta 15kg'],
      popular: true
    },
    {
      name: 'Pack Jumbo',
      price: '8€',
      duration: '60 minutos',
      description: 'Capacidad máxima 12kg',
      features: ['60 minutos de lavado', 'Detergente incluido', 'Suavizante incluido', 'Programa intensivo'],
      bestValue: true
    }
  ]

  const dryers = [
    {
      name: 'Pack Básico',
      price: '3€',
      duration: '15 minutos',
      description: 'Ideal para 1-2 prendas',
      features: ['15 minutos de secado', 'Secado suave', 'Protección de tejidos', 'Capacidad hasta 5kg'],
      popular: false
    },
    {
      name: 'Pack Estándar',
      price: '5€',
      duration: '30 minutos',
      description: 'Ideal para carga completa',
      features: ['30 minutos de secado', 'Secado inteligente', 'Protección de tejidos', 'Capacidad hasta 15kg'],
      popular: true
    },
    {
      name: 'Pack Jumbo',
      price: '8€',
      duration: '50 minutos',
      description: 'Máxima eficiencia',
      features: ['50 minutos de secado', 'Secado turbo', 'Anti-arrugas', 'Capacidad hasta 12kg'],
      bestValue: true
    }
  ]

  const tips = [
    'Carga la máquina correctamente (no la sobrecargues)',
    'Separa los colores y las prendas blancas',
    'Vacía todos los bolsillos antes de lavar',
    'Lee las etiquetas de cuidado de las prendas',
    'Cierra las cremalleras y botones antes de lavar'
  ]

  const errors = [
    'Sobrecargar la máquina reduce la calidad del lavado',
    'Usar demasiado jabón daña las prendas',
    'Mezclar colores incompatibles puede destiñir todo',
    'No vaciar bolsillos puede dañar otras prendas',
    'Ignorar etiquetas de cuidado daña las prendas'
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-80 md:h-[600px]">
        <img
          src="https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/tienda%20lavalab.webp"
          alt="Lavalab Lavandería"
          className="w-full h-full object-cover object-top"
        />
        {/* Content container - address and icons with white background for readability */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-4 md:gap-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center px-4">
            Calle Cañaveral, 94
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm md:text-base">
            <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2.5 md:px-3 py-1 md:py-1.5 rounded-full">
              <Award className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-xs md:text-sm">12 kg</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2.5 md:px-3 py-1 md:py-1.5 rounded-full">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-xs md:text-sm">7-23 Horario</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2.5 md:px-3 py-1 md:py-1.5 rounded-full">
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-xs md:text-sm">8 Máquinas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Por qué elegir Lavalab?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Atención 24/7</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Siempre disponibles para ti</p>
            </Card>
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Horario Flexible</h3>
              <p className="text-xs md:text-sm text-muted-foreground">A tu conveniencia, 7:00 - 23:00</p>
            </Card>
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Ubicación Central</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Fácil acceso en Madrid</p>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Machinery Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestra Maquinaria</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            4 lavadoras y 4 secadoras profesionales de 12kg
          </p>
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {/* Superwash Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <Droplets className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                  Superwash
                </CardTitle>
                <CardDescription className="text-sm md:text-base">Capacidad 12kg</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <img
                  src="https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/lavadora.jpg"
                  alt="Lavadora Superwash"
                  className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg bg-muted/20"
                />
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 mb-2">
                    <span className="text-lg">🛑</span>
                    <span className="font-bold">NO NECESITAS AÑADIR JABÓN</span>
                  </div>
                  <p className="text-sm text-amber-600 dark:text-amber-400">
                    La máquina dosifica automáticamente
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Características:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Detergente automático
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Suavizante incluido
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Oxígeno activo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Programas ajustables
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Superdry Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <Wind className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                  Superdry
                </CardTitle>
                <CardDescription className="text-sm md:text-base">Capacidad 12kg</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <img
                  src="https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/secadora.jpg"
                  alt="Secadora Superdry"
                  className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg bg-muted/20"
                />
                <div>
                  <h4 className="font-semibold mb-2">Características:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Secado inteligente
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Protección de tejidos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Anti-arrugas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Temperatura controlada
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Precios Transparentes</h2>
            <p className="text-muted-foreground text-lg">
              Elige el pack de minutos que mejor se adapte a tus necesidades. Paga solo por el tiempo que uses.
            </p>
          </div>

          {/* Washers Pricing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-blue-500" />
              Lavadoras Superwash
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {washers.map((washer, index) => (
                <Card key={index} className={`relative ${washer.popular ? 'border-primary shadow-lg' : ''} ${washer.bestValue ? 'border-green-500 shadow-lg' : ''}`}>
                  {washer.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-xs md:text-sm">
                      Más Popular
                    </Badge>
                  )}
                  {washer.bestValue && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-xs md:text-sm">
                      Mejor Valor
                    </Badge>
                  )}
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-base md:text-xl">{washer.name}</CardTitle>
                    <CardDescription className="text-xs md:text-sm">{washer.description}</CardDescription>
                    <div className="mt-3 md:mt-4">
                      <span className="text-2xl md:text-4xl font-bold">{washer.price}</span>
                      <p className="text-xs md:text-sm text-muted-foreground">por {washer.duration}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <ul className="space-y-1 md:space-y-2">
                      {washer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dryers Pricing */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wind className="w-6 h-6 text-orange-500" />
              Secadoras Superdry
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {dryers.map((dryer, index) => (
                <Card key={index} className={`relative ${dryer.popular ? 'border-primary shadow-lg' : ''} ${dryer.bestValue ? 'border-green-500 shadow-lg' : ''}`}>
                  {dryer.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-xs md:text-sm">
                      Más Popular
                    </Badge>
                  )}
                  {dryer.bestValue && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-xs md:text-sm">
                      Mejor Valor
                    </Badge>
                  )}
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-base md:text-xl">{dryer.name}</CardTitle>
                    <CardDescription className="text-xs md:text-sm">{dryer.description}</CardDescription>
                    <div className="mt-3 md:mt-4">
                      <span className="text-2xl md:text-4xl font-bold">{dryer.price}</span>
                      <p className="text-xs md:text-sm text-muted-foreground">por {dryer.duration}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <ul className="space-y-1 md:space-y-2">
                      {dryer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                          <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg text-sm text-center">
            <p className="font-semibold mb-1">Nota:</p>
            <p className="text-muted-foreground">
              El tiempo se detiene automáticamente al finalizar el ciclo. Puedes añadir más minutos si lo necesitas durante el proceso.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Cómo llegar</h2>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Tráfico de la tienda en tiempo real
          </p>
          <div className="mb-4 text-center">
            <p className="text-sm text-muted-foreground">
              Haz click en Lavalab en el mapa para ver la afluencia en tiempo real
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.685406!3d40.437819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a0b9e6c8eb%3A0x1234567890abcdef!2sC.%20del%20Ca%C3%B1averal%2094%2C%2028028%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1234567890123`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Live Cam Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Mira la ocupación en tiempo real</h2>
          <p className="text-center text-muted-foreground text-lg mb-8">
            Verifica la disponibilidad sin comprometer la privacidad
          </p>

          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">Live cam - Lavalab interior</CardTitle>
                  <CardDescription className="text-base">
                    {isLiveCamActive ? 'Cámara activa' : 'Cámara inactiva - Horario 7:00 - 23:00'}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isLiveCamActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                  <Badge variant={isLiveCamActive ? 'default' : 'secondary'}>
                    {isLiveCamActive ? 'EN VIVO' : 'DESCONECTADO'}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <img
                  src="https://xmtqaakrlplknmhcmiha.supabase.co/storage/v1/object/public/lavalab/livecam2.webp"
                  alt="Live cam - Lavalab interior"
                  className="w-full h-96 object-cover rounded-lg"
                />
                {isLiveCamActive && (
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-sm">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{formatTime(currentTime)}</span>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-3 rounded-lg text-white text-sm">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Privacidad Garantizada</p>
                      <p className="text-xs opacity-90">
                        Sistema de privacidad activo: Las imágenes se muestran con desenfoque de identificación facial y de caracteres para garantizar la privacidad de nuestros clientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Actualización: Tiempo real</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Privacidad: Desenfoque facial activo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Horario: 7:00 - 23:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Tips and Errors Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Consejos y Errores Comunes</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Guía para un mejor lavado
          </p>

          <div className="grid grid-cols-2 gap-6">
            {/* Tips */}
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  5 Consejos Útiles
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ol className="space-y-3 md:space-y-4">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex gap-2 md:gap-3">
                      <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xs md:text-sm">
                        {index + 1}
                      </span>
                      <span className="text-xs md:text-sm pt-0.5 md:pt-1">{tip}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Errors */}
            <Card>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  5 Errores Comunes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <ol className="space-y-3 md:space-y-4">
                  {errors.map((error, index) => (
                    <li key={index} className="flex gap-2 md:gap-3">
                      <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center font-bold text-red-600 dark:text-red-400 text-xs md:text-sm">
                        {index + 1}
                      </span>
                      <span className="text-xs md:text-sm pt-0.5 md:pt-1">{error}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <p className="font-semibold text-lg mb-2">Recuerda:</p>
            <p className="text-muted-foreground">
              Usar las máquinas correctamente te ayudará a obtener mejores resultados, proteger tus prendas y ahorrar tiempo y dinero.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Contacto
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                <p className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                  <span>C. del Cañaveral 94, 28028 Madrid, España</span>
                </p>
                <p className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-muted-foreground" />
                  <span>+34 912 345 678</span>
                </p>
                <p className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-muted-foreground" />
                  <span>info@lavalab.es</span>
                </p>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                Horario
              </h3>
              <div className="space-y-2 text-xs md:text-sm">
                <p className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-muted-foreground" />
                  <span>Lunes - Domingo</span>
                </p>
                <p className="flex items-center gap-2 font-semibold">
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 text-primary" />
                  <span>7:00 - 23:00</span>
                </p>
                <p className="text-muted-foreground">Abierto todos los días</p>
              </div>
            </div>

            {/* About */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Lavalab</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                Tu lavandería autoservicio en Madrid. Maquinaria profesional de 12kg.
              </p>
              <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-semibold">
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                <span>Abierto 24/7</span>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p className="font-semibold mb-2">Lavalab Logo</p>
            <p>© 2026 Lavalab. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">
              Lavandería Autoservicio en Madrid | Superwash & Superdry
            </p>
            <p className="mt-2 text-xs">
              Servicio de calidad garantizado
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
