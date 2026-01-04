import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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

  return (
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
  );
};

export default ServicesSection;
