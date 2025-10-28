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
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-gold/20">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-cormorant font-bold text-primary-foreground">LuxeCeiling</div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('catalog')} className="text-primary-foreground/90 hover:text-gold transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('gallery')} className="text-primary-foreground/90 hover:text-gold transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('services')} className="text-primary-foreground/90 hover:text-gold transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('calculator')} className="text-primary-foreground/90 hover:text-gold transition-colors">Калькулятор</button>
            <button onClick={() => scrollToSection('reviews')} className="text-primary-foreground/90 hover:text-gold transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="text-primary-foreground/90 hover:text-gold transition-colors">Контакты</button>
          </div>
          <Button className="bg-accent hover:bg-accent/90">Консультация</Button>
        </nav>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-0"></div>
        <img 
          src="https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/a1078336-548d-4758-ab29-03ec73b3d953.jpg" 
          alt="Luxury ceiling" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-cormorant font-bold text-primary-foreground mb-6">
            Потолки премиум-класса
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
            Воплощаем мечты о роскошном интерьере с натяжными потолками европейского качества
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              Заказать замер
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Каталог потолков</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите идеальное решение для вашего интерьера</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Матовые', desc: 'Классическая элегантность', price: 'от 800₽/м²', icon: 'Square' },
              { title: 'Глянцевые', desc: 'Зрительное расширение', price: 'от 1200₽/м²', icon: 'Sparkles' },
              { title: 'Сатиновые', desc: 'Мягкий блеск', price: 'от 1000₽/м²', icon: 'Star' },
              { title: 'Премиум', desc: 'Эксклюзивные решения', price: 'от 1800₽/м²', icon: 'Crown' },
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-all hover:-translate-y-2 border-border/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-cormorant">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-accent mb-4">{item.price}</p>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Галерея работ</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Реализованные проекты наших клиентов</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/a1078336-548d-4758-ab29-03ec73b3d953.jpg',
              'https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/9dc66c4b-5121-48d1-a17d-b91d47a56454.jpg',
              'https://cdn.poehali.dev/projects/63a3e678-2008-4dcf-81c0-6bc48a5cd819/files/af222b60-8bc3-47b7-95c5-bdc6fec4ac42.jpg',
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <h3 className="text-xl font-cormorant font-bold mb-2">Проект {i + 1}</h3>
                    <p className="text-sm">Премиальный потолок</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Услуги и цены</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Полный цикл работ под ключ</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Консультация', desc: 'Выезд дизайнера', price: 'Бесплатно', icon: 'MessageCircle' },
              { title: 'Замер', desc: 'Точные измерения', price: 'Бесплатно', icon: 'Ruler' },
              { title: 'Монтаж', desc: 'Профессиональная установка', price: 'от 300₽/м²', icon: 'Wrench' },
              { title: 'Освещение', desc: 'Установка светильников', price: 'от 500₽/шт', icon: 'Lightbulb' },
              { title: 'Демонтаж', desc: 'Старого потолка', price: 'от 150₽/м²', icon: 'Trash2' },
              { title: 'Гарантия', desc: 'До 15 лет', price: 'Включено', icon: 'Shield' },
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-accent" size={32} />
                  </div>
                  <CardTitle className="text-xl font-cormorant">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-accent">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Рассчитайте примерную стоимость вашего потолка</p>
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl font-cormorant">Параметры потолка</CardTitle>
              <CardDescription>Укажите данные для расчета</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Label className="text-base">Площадь помещения: <span className="font-bold text-accent">{area} м²</span></Label>
                <Slider 
                  value={[area]} 
                  onValueChange={(val) => setArea(val[0])} 
                  min={10} 
                  max={100} 
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="ceiling-type" className="text-base">Тип потолка</Label>
                <Select value={ceilingType} onValueChange={setCeilingType}>
                  <SelectTrigger id="ceiling-type">
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
                <Label htmlFor="lighting" className="text-base">Освещение</Label>
                <Select value={lighting} onValueChange={setLighting}>
                  <SelectTrigger id="lighting">
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

              <div className="pt-6 border-t-2 border-accent/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg">Итоговая стоимость:</span>
                  <span className="text-4xl font-cormorant font-bold text-accent">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg">
                  Заказать расчет
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  * Точная стоимость рассчитывается после замера
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-16">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '15 лет', desc: 'гарантии на все работы', icon: 'Award' },
              { title: '5000+', desc: 'довольных клиентов', icon: 'Users' },
              { title: '24/7', desc: 'поддержка и сервис', icon: 'Clock' },
              { title: '100%', desc: 'европейские материалы', icon: 'CheckCircle' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon} className="text-accent" size={40} />
                </div>
                <h3 className="text-4xl font-cormorant font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-cormorant font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Что говорят о нас</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Анна Петрова', text: 'Превосходное качество! Потолок выглядит потрясающе, монтаж выполнен идеально. Рекомендую всем!', rating: 5 },
              { name: 'Дмитрий Соколов', text: 'Профессиональная команда, точные сроки, разумные цены. Очень доволен результатом.', rating: 5 },
              { name: 'Елена Волкова', text: 'Установили потолки во всей квартире. Работа выполнена безупречно, интерьер преобразился!', rating: 5 },
            ].map((review, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-xl font-cormorant">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-cormorant font-bold mb-6">Готовы преобразить ваш интерьер?</h2>
          <p className="text-xl mb-12 opacity-90">Закажите бесплатную консультацию уже сегодня</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12">
            <Input 
              placeholder="Ваше имя" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Input 
              placeholder="Телефон" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Отправить
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-primary-foreground/20">
            <div>
              <Icon name="Phone" className="mx-auto mb-4 text-accent" size={32} />
              <p className="text-lg font-bold mb-2">Телефон</p>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" className="mx-auto mb-4 text-accent" size={32} />
              <p className="text-lg font-bold mb-2">Email</p>
              <p className="opacity-90">info@luxeceiling.ru</p>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-4 text-accent" size={32} />
              <p className="text-lg font-bold mb-2">Адрес</p>
              <p className="opacity-90">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-primary/95 text-primary-foreground/70 text-center border-t border-gold/20">
        <p>© 2024 LuxeCeiling. Все права защищены.</p>
      </footer>
    </div>
  );
}
