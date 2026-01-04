import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [calcText, setCalcText] = useState("");
  const [calcHeight, setCalcHeight] = useState([15]);
  const [calcFont, setCalcFont] = useState("Bebas Neue");
  const [calcColor, setCalcColor] = useState("#F97316");
  
  const pricePerCm = 120;
  const letterCount = calcText.length;
  const totalPrice = letterCount * calcHeight[0] * pricePerCm;
  
  const fonts = [
    { name: "Bebas Neue", value: "Bebas Neue" },
    { name: "Oswald", value: "Oswald" },
    { name: "Russo One", value: "Russo One" },
    { name: "Montserrat", value: "Montserrat" },
    { name: "Lobster", value: "Lobster" },
    { name: "Pacifico", value: "Pacifico" },
    { name: "Playfair Display", value: "Playfair Display" }
  ];
  
  const colors = [
    { name: "Оранжевый", value: "#F97316" },
    { name: "Фиолетовый", value: "#8B5CF6" },
    { name: "Красный", value: "#EF4444" },
    { name: "Синий", value: "#3B82F6" },
    { name: "Зелёный", value: "#10B981" },
    { name: "Жёлтый", value: "#FBBF24" },
    { name: "Белый", value: "#FFFFFF" }
  ];

  const services = [
    {
      icon: "Clipboard",
      title: "Наружная реклама",
      description: "Баннеры, вывески, билборды, световые короба — всё для привлечения внимания к вашему бизнесу"
    },
    {
      icon: "Home",
      title: "Интерьерная реклама",
      description: "Оформление торговых залов, офисов, выставочных стендов с использованием современных материалов"
    },
    {
      icon: "Zap",
      title: "Световая реклама",
      description: "LED-вывески, неоновые надписи, объёмные буквы с подсветкой для круглосуточной видимости"
    },
    {
      icon: "Truck",
      title: "Монтаж и установка",
      description: "Профессиональная установка любой сложности с гарантией качества и соблюдением сроков"
    }
  ];

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
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            РЕКЛАМА+
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-semibold mb-6">
            <Icon name="Zap" size={20} />
            <span>Гарантированные сроки выполнения</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight">
            Реклама, которая <br />работает на вас
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изготовление и монтаж наружной и интерьерной рекламы для владельцев бизнеса. 
            Быстро, качественно, с гарантией.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Image" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full text-secondary font-semibold mb-4">
              <Icon name="Calculator" size={20} />
              <span>Калькулятор стоимости</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Рассчитайте стоимость объёмных букв</h2>
            <p className="text-xl text-muted-foreground">С LED-подсветкой для вашего бизнеса</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="calc-text" className="text-lg font-semibold mb-3 block">Введите текст вывески</Label>
                    <Input
                      id="calc-text"
                      placeholder="Например: COFFEE SHOP"
                      value={calcText}
                      onChange={(e) => setCalcText(e.target.value)}
                      className="text-lg h-14"
                    />
                    <p className="text-sm text-muted-foreground mt-2">Количество символов: {letterCount}</p>
                  </div>
                
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">
                      Высота буквы: <span className="text-primary">{calcHeight[0]} см</span>
                    </Label>
                    <Slider
                      value={calcHeight}
                      onValueChange={setCalcHeight}
                      min={5}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>5 см</span>
                      <span>100 см</span>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Выберите шрифт</Label>
                    <Select value={calcFont} onValueChange={setCalcFont}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fonts.map((font) => (
                          <SelectItem key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                            {font.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-lg font-semibold mb-3 block">Выберите цвет</Label>
                    <div className="grid grid-cols-4 gap-3">
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setCalcColor(color.value)}
                          className={`h-12 rounded-lg border-2 transition-all ${
                            calcColor === color.value ? 'border-primary scale-110 shadow-lg' : 'border-gray-200 hover:border-gray-400'
                          }`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        >
                          {calcColor === color.value && (
                            <Icon name="Check" size={20} className={color.value === '#FFFFFF' ? 'text-black mx-auto' : 'text-white mx-auto'} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                
                  <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white text-center">
                    <div className="mb-3">
                      <Icon name="Sparkles" size={40} className="mx-auto mb-2" />
                      <p className="text-base opacity-90">Стоимость изготовления</p>
                    </div>
                    <div className="text-5xl font-bold mb-3">
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm opacity-90 space-y-1">
                      <p>{letterCount} {letterCount === 1 ? 'символ' : letterCount < 5 ? 'символа' : 'символов'} × {calcHeight[0]} см × {pricePerCm} ₽/см</p>
                      <p className="mt-3 text-sm">✓ С LED-подсветкой ✓ Монтаж включён ✓ Гарантия 24 месяца</p>
                    </div>
                    <Button size="lg" className="mt-4 bg-white text-primary hover:bg-white/90 font-semibold w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Заказать изготовление
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl animate-scale-in bg-gradient-to-br from-gray-900 to-gray-800" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-4">
                  <Label className="text-lg font-semibold text-white block mb-2">Превью вывески</Label>
                  <p className="text-sm text-gray-400">Так будет выглядеть ваша вывеска</p>
                </div>
                <div className="flex-1 flex items-center justify-center p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-gray-700">
                  {calcText ? (
                    <div className="text-center relative">
                      <div 
                        className="font-bold tracking-wider transition-all duration-300"
                        style={{ 
                          fontFamily: calcFont,
                          color: calcColor,
                          fontSize: `${Math.max(32, Math.min(96, calcHeight[0] * 1.5))}px`,
                          textShadow: `0 0 20px ${calcColor}80, 0 0 40px ${calcColor}60, 0 0 60px ${calcColor}40`,
                          lineHeight: 1.2
                        }}
                      >
                        {calcText}
                      </div>
                      <div className="mt-4 text-sm text-gray-400">
                        <p>Шрифт: {calcFont}</p>
                        <p>Высота: {calcHeight[0]} см</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <Icon name="Type" size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Введите текст для превью</p>
                    </div>
                  )}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Icon name="Info" size={20} />
                    <span className="font-semibold">LED-подсветка</span>
                  </div>
                  <p className="text-sm text-gray-300">Световой эффект имитирует реальную подсветку вывески в ночное время</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный цикл производства и установки рекламных конструкций</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeService === idx ? 'ring-2 ring-primary' : ''
                }`}
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;