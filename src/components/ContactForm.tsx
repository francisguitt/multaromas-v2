import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          toast({
            title: "Mensagem enviada!",
            description: "Obrigado por entrar em contato. Responderemos em breve.",
          });
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          toast({
            title: "Erro ao enviar mensagem.",
            description: "Por favor, tente novamente mais tarde.",
            variant: "destructive",
          });
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <Label htmlFor="user_name">Nome</Label>
        <Input type="text" id="user_name" name="user_name" required />
      </div>
      <div>
        <Label htmlFor="user_email">Email</Label>
        <Input type="email" id="user_email" name="user_email" required />
      </div>
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" className="w-full">Enviar Mensagem</Button>
    </form>
  );
};

export default ContactForm;
