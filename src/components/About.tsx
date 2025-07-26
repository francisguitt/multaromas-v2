import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Seleção Premium",
      description: "Nossa equipe de especialistas seleciona as melhores fragrâncias de marcas renomadas, garantindo uma coleção diversificada e de alta qualidade."
    },
    {
      icon: Award,
      title: "Autenticidade Garantida",
      description: "Trabalhamos apenas com fornecedores oficiais e garantimos a autenticidade de todos os nossos produtos. Sua confiança é nossa prioridade."
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Com mais de 20 anos de experiência no mercado, oferecemos um atendimento personalizado para ajudar você a encontrar o perfume perfeito."
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
              Há mais de duas décadas, a Mult Aromas tem sido sinônimo de elegância 
              e sofisticação no universo das fragrâncias. Nossa paixão pela perfumaria 
              começou como um sonho familiar e hoje se reflete em uma curadoria cuidadosa, 
              que nos posiciona entre as lojas mais queridas do Brasil.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa especialidade é selecionar perfumes excepcionais. Firmamos parcerias com 
              as melhores casas de perfumaria para trazer até você uma coleção exclusiva, 
              repleta de experiências olfativas inesquecíveis.
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