import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  const policies = [
    {
      icon: Shield,
      title: "Proteção de Dados",
      description: "Seus dados pessoais são protegidos por criptografia avançada e armazenados em servidores seguros."
    },
    {
      icon: Lock,
      title: "Informações Seguras",
      description: "Utilizamos protocolos de segurança SSL para garantir que suas informações estejam sempre protegidas."
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Você tem total controle sobre seus dados e pode solicitar acesso, correção ou exclusão a qualquer momento."
    },
    {
      icon: UserCheck,
      title: "Consentimento",
      description: "Respeitamos sua privacidade e só coletamos dados com seu consentimento explícito e para fins específicos."
    }
  ];

  return (
    <section id="politica" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Política de <span className="text-primary">Privacidade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sua privacidade é nossa prioridade. Conheça como protegemos e utilizamos 
            suas informações pessoais de forma responsável e transparente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {policies.map((policy, index) => (
            <Card key={index} className="text-center border-0 shadow-soft bg-gradient-to-b from-card to-card/50 hover:shadow-elegant transition-all">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4">
                  <policy.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{policy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Coleta de Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Coletamos informações quando você se cadastra em nosso site, faz um pedido, 
                assina nossa newsletter ou preenche um formulário. As informações coletadas incluem:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Nome e informações de contato</li>
                <li>Endereço de entrega e cobrança</li>
                <li>Informações de pagamento (processadas com segurança)</li>
                <li>Histórico de compras e preferências</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Uso das Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Processar e entregar seus pedidos</li>
                <li>Melhorar nosso atendimento ao cliente</li>
                <li>Enviar emails promocionais e informativos (com sua permissão)</li>
                <li>Personalizar sua experiência de compra</li>
                <li>Melhorar nosso site e produtos</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
                <li>Portabilidade dos seus dados</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através 
                do email: <span className="text-primary">privacidade@multaaromas.com</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Privacy;