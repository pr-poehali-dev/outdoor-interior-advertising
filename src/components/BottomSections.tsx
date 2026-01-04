import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const BottomSections = () => {
  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/768494f1-f83b-41c8-9097-56993d1b2166/files/85c44d72-e733-4cae-bb2e-9ca2bf66f81b.jpg",
      title: "Уличный билборд",
      category: "Наружная реклама"
    },
    {
      image: "https://cdn.poehali.dev/projects/768494f1-f83b-41c8-9097-56993d1b2166/files/a26869c8-31c2-411a-9d9a-68dd70ec59ee.jpg",
      title: "Торговый центр",
      category: "Интерьерная реклама"
    },
    {
      image: "https://cdn.poehali.dev/projects/768494f1-f83b-41c8-9097-56993d1b2166/files/f72f06fe-1552-4ebb-9057-d2b064953ad6.jpg",
      title: "Световая вывеска",
      category: "Световая реклама"
    }
  ];

  const faqs = [
    {
      question: "Какие сроки изготовления?",
      answer: "Стандартный заказ выполняем за 3-5 рабочих дней. Срочные заказы — от 24 часов. Все сроки прописываем в договоре с гарантией."
    },
    {
      question: "Даёте ли вы гарантию?",
      answer: "Да, на все виды работ предоставляем гарантию от 12 месяцев. На световые конструкции — до 24 месяцев."
    },
    {
      question: "Можно ли увидеть макет перед производством?",
      answer: "Обязательно! Мы создаём 3D-визуализацию вашей рекламы и согласовываем все детали перед запуском в производство."
    },
    {
      question: "Занимаетесь ли вы монтажом?",
      answer: "Да, у нас собственная бригада монтажников с допусками на высотные работы. Монтаж входит в стоимость проекта."
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">Реализованные проекты для различных сфер бизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, idx) => (
              <div key={idx} className="group cursor-pointer animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-semibold mb-2">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground">Простой и прозрачный процесс от заявки до установки</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "Phone", title: "Заявка", desc: "Оставьте заявку или позвоните нам" },
              { icon: "Pencil", title: "Макет", desc: "Создаём 3D-визуализацию и согласовываем" },
              { icon: "Settings", title: "Производство", desc: "Изготавливаем с соблюдением всех стандартов" },
              { icon: "CheckCircle", title: "Монтаж", desc: "Устанавливаем точно в срок" }
            ].map((step, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{animationDelay: `${idx * 0.15}s`}}>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={step.icon} size={36} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 bg-gradient-to-r from-primary to-secondary rounded-3xl text-white text-center">
            <Icon name="Clock" size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Гарантия сроков</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Мы настолько уверены в своих процессах, что прописываем сроки выполнения в договоре. 
              Опоздание? Получите скидку 10% на следующий заказ!
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы наших клиентов</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-xl px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-background rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут для обсуждения деталей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (XXX) XXX-XX-XX
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <Icon name="Clock" size={32} className="mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-2">Режим работы</h4>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб-Вс: 10:00 - 16:00</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-2">Адрес офиса</h4>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, 123<br />офис 456</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-muted-foreground">info@reklama-plus.ru<br />zakaz@reklama-plus.ru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              РЕКЛАМА+
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 РЕКЛАМА+. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomSections;
