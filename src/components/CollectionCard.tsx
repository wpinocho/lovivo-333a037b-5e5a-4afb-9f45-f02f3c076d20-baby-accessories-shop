import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-2 border-pink-100 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl group cursor-pointer">
      <CardContent className="p-0" onClick={() => onViewProducts(collection.id)}>
        <div className="aspect-[4/3] bg-gradient-baby-soft overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-5xl">
              👶
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md">
              ⭐ Destacado
            </span>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-foreground font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold group-hover:shadow-md transition-all"
            onClick={(e) => {
              e.stopPropagation()
              onViewProducts(collection.id)
            }}
          >
            Ver Productos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}