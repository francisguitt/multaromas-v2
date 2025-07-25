import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";
import perfume5 from "@/assets/perfume-5.jpg";
import heroImage from "@/assets/hero-perfumes.jpg";
import collectionImage from "@/assets/perfume-collection.jpg";
import featuredImage from "@/assets/featured-perfume.jpg";

const ImageGrid = () => {
  const images = [
    { src: heroImage, alt: "Coleção de Perfumes", span: "col-span-2 row-span-2" },
    { src: perfume1, alt: "Essence Rose Luxury", span: "col-span-1 row-span-1" },
    { src: perfume2, alt: "Crystal Dreams", span: "col-span-1 row-span-1" },
    { src: featuredImage, alt: "Perfume Destaque", span: "col-span-1 row-span-2" },
    { src: perfume3, alt: "Pink Blossom", span: "col-span-1 row-span-1" },
    { src: collectionImage, alt: "Nossa Coleção", span: "col-span-2 row-span-1" },
    { src: perfume4, alt: "Mystic Violet", span: "col-span-1 row-span-1" },
    { src: perfume5, alt: "Golden Amber", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Galeria de <span className="text-primary">Fragrâncias</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma coleção visual das nossas fragrâncias mais exclusivas
          </p>
        </div>

        <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[800px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;