import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";
import collectionImage from "@/assets/perfume-collection.jpg";
import featuredImage from "@/assets/featured-perfume.jpg";
import ProductModal from "./ProductModal";
import { CartItem } from "./Cart";

interface ProductsProps {
  onAddToCart: (product: any) => void;
}

const Products = ({ onAddToCart }: ProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = [
    {
      id: 1,
      name: "Essence Rose",
      price: "R$ 189,90",
      originalPrice: "R$ 249,90",
      image: featuredImage,
      rating: 4.8,
      badge: "Mais Vendido",
      description: "Fragrância floral sofisticada com notas de rosa búlgara"
    },
    {
      id: 2,
      name: "Golden Dreams",
      price: "R$ 159,90",
      image: collectionImage,
      rating: 4.6,
      badge: "Novo",
      description: "Perfume oriental com toques de âmbar e baunilha"
    },
    {
      id: 3,
      name: "Mystic Bloom",
      price: "R$ 199,90",
      image: featuredImage,
      rating: 4.9,
      badge: "Premium",
      description: "Composição única com jasmim e madeiras nobres"
    }
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="produtos" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossa <span className="text-primary">Coleção</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra fragrâncias únicas criadas com ingredientes premium 
            e técnicas artesanais tradicionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-gradient-to-b from-card to-card/80 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                  >
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onAddToCart={onAddToCart}
        />
      </div>
    </section>
  );
};

export default Products;