import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const services = [
    {
      icon: 'Home',
      title: 'Косметический ремонт',
      description: 'Быстрое обновление интерьера: покраска, поклейка обоев, замена напольных покрытий'
    },
    {
      icon: 'Hammer',
      title: 'Капитальный ремонт',
      description: 'Полная перепланировка и ремонт с нуля: от демонтажа до финишной отделки'
    },
    {
      icon: 'Paintbrush',
      title: 'Дизайн-проект',
      description: 'Разработка индивидуального дизайна с 3D-визуализацией и подбором материалов'
    },
    {
      icon: 'Sofa',
      title: 'Ремонт под ключ',
      description: 'Комплексное решение: от проекта до сдачи с мебелью и техникой'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличная работа! Ремонт завершили точно в срок, качество на высоте. Особенно понравилась внимательность к деталям.',
      project: 'Капитальный ремонт квартиры 65м²'
    },
    {
      name: 'Дмитрий Соколов',
      rating: 5,
      text: 'Профессиональная команда! Помогли с выбором материалов, учли все наши пожелания. Результат превзошел ожидания.',
      project: 'Ремонт кухни и гостиной'
    },
    {
      name: 'Елена Морозова',
      rating: 5,
      text: 'Благодарю за качественный ремонт! Чистота на объекте, вежливые мастера, прозрачная смета. Рекомендую!',
      project: 'Ремонт ванной комнаты'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">КВАРТМЕНЫЕ КЕТРУСЫ</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Ремонт квартир <br />
                <span className="text-primary">под ключ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Современные интерьеры с гарантией качества. Работаем быстро, честно и с душой.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Бесплатный замер
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-lg px-8">
                  Портфолио
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary">250+</div>
                  <div className="text-sm text-muted-foreground">Завершенных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop" 
                alt="Современный интерьер" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр ремонтных работ для вашего комфорта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши работы говорят сами за себя</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Гостиная: До и После</h3>
            <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&h=800&fit=crop" 
                  alt="До ремонта" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop" 
                  alt="После ремонта" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  const container = e.currentTarget.parentElement;
                  if (!container) return;
                  
                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    const rect = container.getBoundingClientRect();
                    const x = moveEvent.clientX - rect.left;
                    const percentage = (x / rect.width) * 100;
                    setSliderPosition(Math.max(0, Math.min(100, percentage)));
                  };
                  const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                  };
                  document.addEventListener('mousemove', handleMouseMove);
                  document.addEventListener('mouseup', handleMouseUp);
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Icon name="MoveHorizontal" size={24} className="text-primary" />
                </div>
              </div>
              <div className="absolute top-8 left-8 bg-black/70 text-white px-4 py-2 rounded-lg font-bold">
                ДО
              </div>
              <div className="absolute top-8 right-8 bg-primary/90 text-white px-4 py-2 rounded-lg font-bold">
                ПОСЛЕ
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop" 
                alt="Кухня" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-1">Современная кухня</h4>
                  <p className="text-sm">45 м² • 3 месяца</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop" 
                alt="Спальня" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-1">Уютная спальня</h4>
                  <p className="text-sm">28 м² • 2 месяца</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop" 
                alt="Ванная" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold mb-1">Стильная ванная</h4>
                  <p className="text-sm">12 м² • 1 месяц</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши заказчики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку и получите бесплатный замер</p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Площадь квартиры</label>
                    <Input placeholder="65 м²" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                  </div>
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-lg">
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" size={32} className="mx-auto mb-2 text-primary" />
                <div className="font-bold">Телефон</div>
                <div className="text-muted-foreground">+7 (495) 123-45-67</div>
              </div>
              <div>
                <Icon name="Mail" size={32} className="mx-auto mb-2 text-primary" />
                <div className="font-bold">Email</div>
                <div className="text-muted-foreground">info@remont.ru</div>
              </div>
              <div>
                <Icon name="MapPin" size={32} className="mx-auto mb-2 text-primary" />
                <div className="font-bold">Адрес</div>
                <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-primary">КВАРТМЕНЫЕ КЕТРУСЫ</div>
              <p className="text-sm opacity-80">Профессиональный ремонт квартир под ключ в Москве</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Косметический ремонт</li>
                <li>Капитальный ремонт</li>
                <li>Дизайн-проект</li>
                <li>Ремонт под ключ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@remont.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            © 2024 Квартменые Кетрусы. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;