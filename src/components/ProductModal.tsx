import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating?: number;
  badge: string;
  description: string;
  notes?: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              {product.badge}
            </Badge>
          </div>
          
          <div className="space-y-4">
            {product.rating && (
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="font-medium ml-1">{product.rating}</span>
                </div>
              </div>
            )}
            
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            {product.notes && (
              <div>
                <h4 className="font-semibold mb-2">Notas Olfativas:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-primary to-accent"
              size="lg"
            >
              <Plus className="h-4 w-4 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;