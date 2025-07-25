import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import perfume images
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";

const PerfumeCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [autoplay]
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const perfumes = [
    {
      id: 1,
      name: "Essence Rose Luxury",
      price: "R$ 289,90",
      image: perfume1,
      description: "Fragrância floral premium com notas de rosa búlgara e sândalo",
      badge: "Premium",
      notes: ["Rosa Búlgara", "Sândalo", "Âmbar"]
    },
    {
      id: 2,
      name: "Crystal Dreams",
      price: "R$ 259,90",
      image: perfume2,
      description: "Perfume cristalino com essências orientais e toques cítricos",
      badge: "Bestseller",
      notes: ["Bergamota", "Jasmim", "Almíscar"]
    },
    {
      id: 3,
      name: "Pink Blossom",
      price: "R$ 199,90",
      image: perfume3,
      description: "Delicada composição floral com pétalas de cerejeira",
      badge: "Novo",
      notes: ["Cerejeira", "Peônia", "Cedro"]
    },
    {
      id: 4,
      name: "Mystic Violet",
      price: "R$ 319,90",
      image: perfume4,
      description: "Fragrância misteriosa com violetas e madeiras nobres",
      badge: "Exclusivo",
      notes: ["Violeta", "Oud", "Patchouli"]
    },
    {
      id: 5,
      name: "Golden Amber",
      price: "R$ 349,90",
      image: perfume5,
      description: "Perfume sofisticado com âmbar dourado e especiarias",
      badge: "Luxo",
      notes: ["Âmbar", "Canela", "Baunilha"]
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const autoplayPlugin = emblaApi?.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    if (autoplayPlugin.isPlaying()) {
      autoplayPlugin.stop();
      setIsPlaying(false);
    } else {
      autoplayPlugin.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Coleção <span className="text-primary">Exclusiva</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Descubra nossas fragrâncias mais especiais, criadas com ingredientes 
            raros e técnicas artesanais
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {perfumes.map((perfume, index) => (
                <div key={perfume.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <Card className="group mx-2 overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 bg-gradient-to-b from-card to-card/80 transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={perfume.image} 
                        alt={perfume.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-primary-foreground animate-scale-in">
                        {perfume.badge}
                      </Badge>
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex flex-wrap gap-1">
                          {perfume.notes.map((note, noteIndex) => (
                            <span 
                              key={noteIndex}
                              className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {perfume.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {perfume.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {perfume.price}
                        </span>
                        <Button 
                          className="bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                        >
                          Comprar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-elegant"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-elegant"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {perfumes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAutoplay}
            className="border-primary/20 hover:bg-primary hover:text-primary-foreground"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerfumeCarousel;