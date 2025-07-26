import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer id="contato" className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-gold to-accent bg-clip-text text-transparent">
              Mult Aromas
            </h3>
            <p className="text-cream/80 mb-4">
              Desperte seus sentidos com nossas fragrâncias exclusivas. 
              Qualidade premium e elegância em cada borrifo.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-cream hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-cream hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-cream hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cream/80 hover:text-accent transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-cream/80 hover:text-accent transition-colors">Produtos</a></li>
              <li><a href="#sobre" className="text-cream/80 hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#contato" className="text-cream/80 hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-cream/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-cream/80">contato@multaaromas.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-cream/80">São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Fale Conosco</h4>
            <ContactForm />
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center">
          <p className="text-cream/60 mb-2">
            © {new Date().getFullYear()} Mult Aromas. Todos os direitos reservados.
          </p>
          <p className="text-cream/60 text-sm">
            Desenvolvido com <span role="img" aria-label="coração">❤️</span> por{' '}
            <a 
              href="https://instagram.com/guittzoom"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Guittzoom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;