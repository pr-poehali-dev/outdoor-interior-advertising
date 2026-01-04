import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
