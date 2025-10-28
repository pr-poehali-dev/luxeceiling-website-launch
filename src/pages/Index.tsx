import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [area, setArea] = useState<number>(20);
  const [ceilingType, setCeilingType] = useState<string>('glossy');
  const [lighting, setLighting] = useState<string>('standard');

  const pricePerSqm: Record<string, number> = {
    'matte': 800,
    'glossy': 1200,
    'satin': 1000,
    'premium': 1800,
  };

  const lightingPrice: Record<string, number> = {
    'none': 0,
    'standard': 300,
    'premium': 800,
    'designer': 1500,
  };

  const calculatePrice = () => {
    const basePrice = area * pricePerSqm[ceilingType];
    const lightingCost = lightingPrice[lighting] * Math.ceil(area / 10);
    return basePrice + lightingCost;
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-3xl font-cormorant font-bold text-primary flex items-center gap-2">
            <Icon name="Sparkles" className="text-accent" size={32} />
            LuxeCeiling
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <button onClick={() => scrollToSection('catalog')} className="text-foreground/70 hover:text-accent transition-colors font-medium">Каталог</button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground/70 hover:text-accent transition-colors font-medium">Галерея</button>
            <button onClick={() => scrollToSection('calculator')} className="text-foreground/70 hover:text-accent transition-colors font-medium">Калькулятор</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/70 hover:text-accent transition-colors font-medium">Контакты</button>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white shadow-lg">Бесплатная консультация</Button>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-cormorant font-bold text-primary mb-6 leading-tight">
              Натяжные потолки европейского качества
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Создаем идеальные интерьеры с гарантией 15 лет. Бесплатный замер и дизайн-проект в подарок.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 shadow-xl">
                Заказать замер
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white text-lg px-10 py-6">
                Посмотреть каталог
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">15 лет</div>
                <div className="text-sm text-muted-foreground">гарантии</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/a1078336-548d-4758-ab29-03ec73b3d953.jpg" 
              alt="Luxury ceiling" 
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="catalog" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-primary mb-4">Каталог решений</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Найдите идеальный вариант для вашего интерьера</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Матовые', desc: 'Классическая элегантность для любого интерьера', price: 'от 800₽/м²', icon: 'Square', gradient: 'from-slate-500 to-slate-600' },
              { title: 'Глянцевые', desc: 'Визуально увеличат пространство', price: 'от 1200₽/м²', icon: 'Sparkles', gradient: 'from-blue-500 to-blue-600' },
              { title: 'Сатиновые', desc: 'Мягкий перламутровый блеск', price: 'от 1000₽/м²', icon: 'Star', gradient: 'from-purple-500 to-purple-600' },
              { title: 'Премиум', desc: 'Эксклюзивные дизайнерские решения', price: 'от 1800₽/м²', icon: 'Crown', gradient: 'from-amber-500 to-amber-600' },
            ].map((item, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 hover:border-accent overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-cormorant mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-4">{item.price}</div>
                  <Button variant="outline" className="w-full border-2 hover:bg-accent hover:text-white hover:border-accent">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Более 5000 реализованных проектов по всей России</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/a1078336-548d-4758-ab29-03ec73b3d953.jpg',
              'https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/9dc66c4b-5121-48d1-a17d-b91d47a56454.jpg',
              'https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/af222b60-8bc3-47b7-95c5-bdc6fec4ac42.jpg',
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={img} 
                  alt={`Проект ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-cormorant font-bold mb-2">Проект #{i + 1}</h3>
                    <p className="text-sm opacity-90">Премиальный натяжной потолок</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-primary mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">Рассчитайте приблизительную стоимость за 1 минуту</p>
          </div>
          <Card className="border-2 border-accent/20 shadow-2xl">
            <CardHeader className="bg-gradient-to-br from-slate-50 to-white border-b">
              <CardTitle className="text-3xl font-cormorant">Параметры вашего потолка</CardTitle>
              <CardDescription className="text-base">Укажите данные для точного расчета</CardDescription>
            </CardHeader>
            <CardContent className="space-y-10 pt-8">
              <div className="space-y-4">
                <Label className="text-lg font-medium">Площадь помещения: <span className="font-bold text-accent text-2xl ml-2">{area} м²</span></Label>
                <Slider 
                  value={[area]} 
                  onValueChange={(val) => setArea(val[0])} 
                  min={10} 
                  max={100} 
                  step={1}
                  className="py-6"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>10 м²</span>
                  <span>100 м²</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="ceiling-type" className="text-lg font-medium">Тип потолка</Label>
                <Select value={ceilingType} onValueChange={setCeilingType}>
                  <SelectTrigger id="ceiling-type" className="h-14 text-base border-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matte">Матовый (800₽/м²)</SelectItem>
                    <SelectItem value="glossy">Глянцевый (1200₽/м²)</SelectItem>
                    <SelectItem value="satin">Сатиновый (1000₽/м²)</SelectItem>
                    <SelectItem value="premium">Премиум (1800₽/м²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="lighting" className="text-lg font-medium">Освещение</Label>
                <Select value={lighting} onValueChange={setLighting}>
                  <SelectTrigger id="lighting" className="h-14 text-base border-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Без освещения</SelectItem>
                    <SelectItem value="standard">Стандартное (300₽/точка)</SelectItem>
                    <SelectItem value="premium">Премиум (800₽/точка)</SelectItem>
                    <SelectItem value="designer">Дизайнерское (1500₽/точка)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-8 border-t-2 border-accent/20 bg-gradient-to-br from-slate-50 to-white -mx-6 px-6 -mb-6 pb-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl text-muted-foreground">Итоговая стоимость:</span>
                  <div className="text-right">
                    <div className="text-5xl font-cormorant font-bold text-accent">
                      {calculatePrice().toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">с учётом всех работ</div>
                  </div>
                </div>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg py-7 shadow-lg">
                  Получить точный расчет
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  * Финальная стоимость определяется после бесплатного замера специалистом
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-primary mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: '15 лет', desc: 'гарантии на все виды работ', icon: 'Award', gradient: 'from-blue-500 to-blue-600' },
              { title: '5000+', desc: 'довольных клиентов по всей России', icon: 'Users', gradient: 'from-green-500 to-green-600' },
              { title: '24/7', desc: 'поддержка и сервисное обслуживание', icon: 'Clock', gradient: 'from-purple-500 to-purple-600' },
              { title: '100%', desc: 'европейские материалы премиум класса', icon: 'CheckCircle', gradient: 'from-amber-500 to-amber-600' },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon name={item.icon} className="text-white" size={48} />
                </div>
                <h3 className="text-5xl font-cormorant font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-cormorant font-bold mb-6">Готовы преобразить интерьер?</h2>
          <p className="text-xl mb-16 opacity-90 max-w-2xl mx-auto">Оставьте заявку и получите бесплатную консультацию дизайнера и замер помещения</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-3xl mx-auto mb-20">
            <Input 
              placeholder="Ваше имя" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 text-lg backdrop-blur"
            />
            <Input 
              placeholder="Телефон" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 text-lg backdrop-blur"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12 h-14 shadow-xl">
              Отправить
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto pt-16 border-t border-white/20">
            <div className="group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <Icon name="Phone" className="text-white" size={32} />
              </div>
              <p className="text-lg font-bold mb-2">Телефон</p>
              <p className="opacity-90 text-xl">+7 (495) 123-45-67</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <Icon name="Mail" className="text-white" size={32} />
              </div>
              <p className="text-lg font-bold mb-2">Email</p>
              <p className="opacity-90 text-xl">info@luxeceiling.ru</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                <Icon name="MapPin" className="text-white" size={32} />
              </div>
              <p className="text-lg font-bold mb-2">Адрес</p>
              <p className="opacity-90 text-xl">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-primary/95 text-primary-foreground/70 text-center border-t border-white/10">
        <p className="text-sm">© 2024 LuxeCeiling. Все права защищены.</p>
      </footer>
    </div>
  );
}
