import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PerfumeCarousel from "@/components/PerfumeCarousel";
import Products from "@/components/Products";
import About from "@/components/About";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";
import ImageGrid from "@/components/ImageGrid";
import { CartItem } from "@/components/Cart";
import { useToast } from "@/hooks/use-toast";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const Index = () => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('perfume-cart', []);
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      toast({
        title: "Este item já está no seu carrinho.",
        description: "Você pode alterar a quantidade na cesta.",
      });
      return; 
    }

    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    };
    setCartItems([...cartItems, newItem]);

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleUpdateCartQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveCartItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveCartItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCartCheckout = () => {
    toast({
      title: "Pedido enviado!",
      description: "Seu pedido foi enviado via WhatsApp.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header 
        cartItems={cartItems}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onRemoveCartItem={handleRemoveCartItem}
        onCartCheckout={handleCartCheckout}
      />
      <Hero />
      <PerfumeCarousel onAddToCart={handleAddToCart} />
      <About />
      <Products onAddToCart={handleAddToCart} />
      <ImageGrid />
      <Privacy />
      <Footer />
    </div>
  );
};

export default Index;
