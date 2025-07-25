import { useState } from "react";
import { Menu, Search, ShoppingBag, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cart, { CartItem } from "./Cart";

interface HeaderProps {
  cartItems: CartItem[];
  onUpdateCartQuantity: (id: number, quantity: number) => void;
  onRemoveCartItem: (id: number) => void;
  onCartCheckout: () => void;
}

const Header = ({ cartItems, onUpdateCartQuantity, onRemoveCartItem, onCartCheckout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Mult Aromas
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('produtos')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('politica')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Política
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Cart 
              items={cartItems}
              onUpdateQuantity={onUpdateCartQuantity}
              onRemoveItem={onRemoveCartItem}
              onCheckout={onCartCheckout}
            />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Cart 
              items={cartItems}
              onUpdateQuantity={onUpdateCartQuantity}
              onRemoveItem={onRemoveCartItem}
              onCheckout={onCartCheckout}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 border-t border-border mt-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('produtos')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('politica')} 
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
            >
              Política
            </button>
            
            {/* Mobile Actions in Menu */}
            <div className="flex items-center space-x-4 pt-4 border-t border-border">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>Favoritos</span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;