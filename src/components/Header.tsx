import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
