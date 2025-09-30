import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Heart, Shield, Truck } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="gradient-baby py-20 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-float">
              Todo para tu Bebé 👶
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre productos de calidad, seguros y adorables para los más pequeños de la casa
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Buscar productos..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-12 h-14 text-lg rounded-full border-2 border-pink-200 focus:border-primary shadow-lg"
              />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-baby-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">100% Seguro</h3>
              <p className="text-sm text-muted-foreground">Productos certificados y libres de tóxicos</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-baby-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Envío Rápido</h3>
              <p className="text-sm text-muted-foreground">Entrega en 24-48 horas</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-baby-mint rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Con Amor</h3>
              <p className="text-sm text-muted-foreground">Seleccionados con cuidado para tu bebé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-baby-yellow/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-lg text-muted-foreground">
                Explora nuestras colecciones especialmente seleccionadas
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? 'Productos de esta categoría' 
                  : 'Los mejores productos para tu bebé'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gradient-baby-soft rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-baby-pink/20 rounded-3xl">
              <div className="text-6xl mb-4">🍼</div>
              <p className="text-xl text-muted-foreground mb-2">
                {searchTerm 
                  ? 'No encontramos productos con ese nombre' 
                  : 'No hay productos disponibles'
                }
              </p>
              <p className="text-muted-foreground">
                {searchTerm && 'Intenta con otra búsqueda'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 gradient-baby-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¡Únete a Nuestra Familia! 💌
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Recibe ofertas exclusivas y consejos para el cuidado de tu bebé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="tu@email.com" 
              className="flex-1 h-12 rounded-full border-2 border-white bg-white/80"
            />
            <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};