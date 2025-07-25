import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Ingredientes Premium",
      description: "Selecionamos os melhores ingredientes naturais de todo o mundo para oferecer fragrâncias únicas e duradouras."
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Todos os nossos produtos passam por rigorosos testes de qualidade e são certificados pelos principais órgãos internacionais."
    },
    {
      icon: Users,
      title: "Tradição Familiar",
      description: "Com mais de 20 anos de experiência, nossa empresa familiar se dedica à arte da perfumaria com paixão e expertise."
    }
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre a <span className="text-primary">Mult Aromas</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Há mais de duas décadas, a Multa Aromas tem sido sinônimo de elegância 
              e sofisticação no mundo das fragrâncias. Nossa paixão pela perfumaria 
              começou como um sonho familiar e hoje se transformou em uma das marcas 
              mais respeitadas do Brasil.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Cada fragrância é cuidadosamente desenvolvida por nossos mestres perfumistas, 
              que combinam técnicas tradicionais com inovação moderna para criar 
              experiências olfativas inesquecíveis.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft bg-gradient-to-r from-card to-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-accent">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;