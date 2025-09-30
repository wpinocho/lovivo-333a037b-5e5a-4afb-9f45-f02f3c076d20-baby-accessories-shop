import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Heart, Shield, Truck, Users, Award, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="gradient-baby py-20 border-b border-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg animate-float">
            <Heart className="w-10 h-10 text-primary" fill="currentColor" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más que una tienda, somos una familia dedicada a cuidar de los más pequeños con amor y dedicación
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Todo Comenzó con un Sueño 💭
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  En 2020, cuando nos convertimos en padres por primera vez, nos dimos cuenta de lo difícil que era encontrar productos de calidad, seguros y hermosos para nuestro bebé.
                </p>
                <p>
                  Así nació nuestra tienda: un espacio donde cada producto es seleccionado con el mismo cuidado y amor que usaríamos para nuestros propios hijos.
                </p>
                <p>
                  Hoy, miles de familias confían en nosotros para los momentos más importantes de sus pequeños.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop" 
                  alt="Familia feliz con bebé"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">4+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-baby-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-muted-foreground">
              Lo que nos hace diferentes y especiales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-baby-pink rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Seguridad Primero
              </h3>
              <p className="text-muted-foreground">
                Todos nuestros productos están certificados y libres de sustancias tóxicas. La seguridad de tu bebé es nuestra prioridad número uno.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-baby-blue rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Selección con Amor
              </h3>
              <p className="text-muted-foreground">
                Cada producto es elegido personalmente por nuestro equipo de padres, pensando en lo mejor para tu pequeño.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-baby-mint rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Calidad Garantizada
              </h3>
              <p className="text-muted-foreground">
                Trabajamos solo con las mejores marcas y ofrecemos garantía en todos nuestros productos. Tu satisfacción es nuestra meta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Familias Felices</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 gradient-baby-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground">
              Padres apasionados dedicados a tu familia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-baby-soft">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                  alt="María González"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">María González</h3>
                <p className="text-primary font-medium mb-2">Fundadora & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Mamá de 2 y apasionada por el bienestar infantil
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-baby-soft">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                  alt="Carlos Ramírez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Carlos Ramírez</h3>
                <p className="text-primary font-medium mb-2">Director de Calidad</p>
                <p className="text-sm text-muted-foreground">
                  Papá primerizo y experto en seguridad infantil
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-baby-soft">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                  alt="Ana Martínez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Ana Martínez</h3>
                <p className="text-primary font-medium mb-2">Atención al Cliente</p>
                <p className="text-sm text-muted-foreground">
                  Mamá de 3 y especialista en servicio al cliente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-baby rounded-3xl p-12 shadow-xl">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ¿Listo para Comenzar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a miles de familias que confían en nosotros para cuidar de sus pequeños
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/">
                  Ver Productos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="#contacto">
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default About