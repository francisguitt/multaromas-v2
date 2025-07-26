import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-perfumes.jpg";
import { number } from "@/utils/number";
const Hero = () => {
  const handleKnowMore = () => {
    const message = "Olá! Gostaria de saber mais sobre a Mult Aromas e seus produtos.";
    const whatsappUrl = `https://wa.me/${number.num}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Descubra Sua
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Essência Única
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Uma coleção exclusiva de fragrâncias que despertam os sentidos e contam sua história. 
            Explore o mundo dos aromas premium e encontre o perfume perfeito para cada momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#produtos">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-elegant hover:opacity-90 transition-all"
              >
                Explorar Coleção
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleKnowMore}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;