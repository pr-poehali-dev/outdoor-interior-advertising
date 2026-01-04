import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const Calculator = () => {
  const [calcText, setCalcText] = useState("");
  const [calcHeight, setCalcHeight] = useState([15]);
  const [calcFont, setCalcFont] = useState("Bebas Neue");
  const [calcColor, setCalcColor] = useState("#F97316");
  const [email, setEmail] = useState("");
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
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
  
  const downloadVisualization = () => {
    if (!calcText) {
      toast({
        title: "Ошибка",
        description: "Введите текст вывески для создания визуализации",
        variant: "destructive"
      });
      return;
    }
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = 1200;
    canvas.height = 600;
    
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#2d2d2d');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const fontSize = Math.max(48, Math.min(120, calcHeight[0] * 2));
    ctx.font = `bold ${fontSize}px "${calcFont}", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.shadowBlur = 40;
    ctx.shadowColor = calcColor;
    ctx.fillStyle = calcColor;
    ctx.fillText(calcText, canvas.width / 2, canvas.height / 2);
    
    ctx.shadowBlur = 20;
    ctx.fillText(calcText, canvas.width / 2, canvas.height / 2);
    
    ctx.shadowBlur = 0;
    ctx.font = '20px "Open Sans", sans-serif';
    ctx.fillStyle = '#888';
    ctx.fillText(`Шрифт: ${calcFont} | Высота: ${calcHeight[0]} см | Цвет: ${colors.find(c => c.value === calcColor)?.name}`, canvas.width / 2, canvas.height - 40);
    
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `вывеска-${calcText.replace(/\s+/g, '-')}.png`;
      a.click();
      URL.revokeObjectURL(url);
      
      toast({
        title: "Готово!",
        description: "Визуализация сохранена на ваше устройство"
      });
    });
  };
  
  const sendToEmail = () => {
    if (!email) {
      toast({
        title: "Ошибка",
        description: "Введите email для отправки",
        variant: "destructive"
      });
      return;
    }
    
    if (!calcText) {
      toast({
        title: "Ошибка",
        description: "Введите текст вывески для расчёта",
        variant: "destructive"
      });
      return;
    }
    
    const emailSubject = encodeURIComponent('Расчёт стоимости вывески');
    const emailBody = encodeURIComponent(
      `Здравствуйте!\n\n` +
      `Прошу рассчитать стоимость изготовления объёмных букв с подсветкой:\n\n` +
      `Текст: ${calcText}\n` +
      `Количество символов: ${letterCount}\n` +
      `Высота букв: ${calcHeight[0]} см\n` +
      `Шрифт: ${calcFont}\n` +
      `Цвет: ${colors.find(c => c.value === calcColor)?.name} (${calcColor})\n\n` +
      `Расчётная стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽\n\n` +
      `Жду вашего предложения.\n\n` +
      `С уважением.`
    );
    
    window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
    
    setIsEmailDialogOpen(false);
    toast({
      title: "Готово!",
      description: "Откроется почтовое приложение для отправки"
    });
  };

  return (
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
                        <SelectItem key={font.value} value={font.value} style={{ fontFamily: `"${font.value}", sans-serif` }}>
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
                  <div className="space-y-3 mt-4">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold w-full">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Заказать изготовление
                    </Button>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                        onClick={downloadVisualization}
                        disabled={!calcText}
                      >
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать превью
                      </Button>
                      <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                            disabled={!calcText}
                          >
                            <Icon name="Mail" size={16} className="mr-2" />
                            Отправить на email
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Отправить расчёт на email</DialogTitle>
                            <DialogDescription>
                              Введите email, на который нужно отправить расчёт стоимости вывески
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 mt-4">
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2"
                              />
                            </div>
                            <div className="bg-muted p-4 rounded-lg text-sm space-y-1">
                              <p><strong>Текст:</strong> {calcText}</p>
                              <p><strong>Высота:</strong> {calcHeight[0]} см</p>
                              <p><strong>Шрифт:</strong> {calcFont}</p>
                              <p><strong>Цвет:</strong> {colors.find(c => c.value === calcColor)?.name}</p>
                              <p className="text-lg font-bold text-primary mt-2">{totalPrice.toLocaleString('ru-RU')} ₽</p>
                            </div>
                            <Button onClick={sendToEmail} className="w-full">
                              <Icon name="Send" size={18} className="mr-2" />
                              Отправить
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
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
                        fontFamily: `"${calcFont}", sans-serif`,
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
  );
};

export default Calculator;