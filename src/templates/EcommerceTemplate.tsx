import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Heart, User } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white border-b-2 border-pink-100 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-3xl">👶</div>
              <div>
                <BrandLogoLeft />
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-baby-pink"
            >
              <Heart className="h-5 w-5 text-pink-500" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-baby-blue"
            >
              <User className="h-5 w-5 text-blue-500" />
            </Button>

            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative rounded-full hover:bg-baby-mint"
              >
                <ShoppingCart className="h-5 w-5 text-green-500" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 py-12 border-t-2 border-pink-100 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">👶</div>
              <BrandLogoLeft />
            </div>
            <p className="text-muted-foreground mb-4">
              Tu tienda de confianza para todo lo que tu bebé necesita. Productos seguros, de calidad y con mucho amor.
            </p>
            <SocialLinks />
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Información</h3>
            <div className="space-y-2">
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Envíos
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Devoluciones
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </a>
              <a 
                href="#" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Privacidad
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-pink-200 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Tienda de Bebés. Hecho con 💕 para los más pequeños.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}