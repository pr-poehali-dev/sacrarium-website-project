import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Лампа-Шишка',
    category: 'Освещение',
    price: '12 900 ₽',
    image: 'https://cdn.poehali.dev/files/942c97d3-d8d5-48f8-9b6b-480c77daf567.jpg',
    description: 'Деревянная лампа ручной работы в форме шишки'
  },
  {
    id: 2,
    name: 'Мандала "Лотос"',
    category: 'Декор',
    price: '8 500 ₽',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    description: 'Резная мандала из дерева с позолотой'
  },
  {
    id: 3,
    name: 'Набор благовоний',
    category: 'Ароматы',
    price: '1 200 ₽',
    image: 'https://images.unsplash.com/photo-1602524206684-749bfb81e8e7?w=800',
    description: 'Натуральные благовония: сандал, лаванда, роза'
  },
  {
    id: 4,
    name: 'Статуэтка Будда',
    category: 'Статуэтки',
    price: '5 800 ₽',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800',
    description: 'Бронзовая статуэтка медитирующего Будды'
  },
  {
    id: 5,
    name: 'Мандала "Космос"',
    category: 'Декор',
    price: '9 900 ₽',
    image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800',
    description: 'Настенная мандала с кристаллами'
  },
  {
    id: 6,
    name: 'Благовония Premium',
    category: 'Ароматы',
    price: '2 400 ₽',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800',
    description: 'Коллекция редких ароматов со всего мира'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-serif font-bold text-primary">Sacrarium</h1>
          <div className="flex gap-8">
            <button 
              onClick={() => setActiveSection('home')}
              className={`transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('catalog')}
              className={`transition-colors ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('philosophy')}
              className={`transition-colors ${activeSection === 'philosophy' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Философия
            </button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-6xl font-serif font-bold leading-tight">
                  Обретая <span className="text-primary">осознанность</span>
                  <br />
                  через свет и гармонию
                </h2>
                <p className="text-xl text-muted-foreground">
                  Уникальные предметы для создания пространства любви и медитации
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => setActiveSection('catalog')}
                >
                  Открыть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="relative animate-fade-in">
                <div className="absolute inset-0 bg-primary/20 blur-3xl animate-glow rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/942c97d3-d8d5-48f8-9b6b-480c77daf567.jpg"
                  alt="Лампа-шишка"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'catalog' && (
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-serif font-bold mb-4 text-center animate-fade-in">
              Коллекция Sacrarium
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in">
              Каждый предмет создан с любовью и намерением
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden animate-fade-in bg-card border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-serif font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-primary">{product.price}</span>
                      <Button variant="secondary">
                        В корзину
                        <Icon name="ShoppingCart" size={18} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'philosophy' && (
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-serif font-bold">Наша философия</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Icon name="Sparkles" size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">Осознанность в каждом предмете</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Мы верим, что окружающие нас вещи несут энергию и влияют на состояние души. 
                        Каждый предмет в Sacrarium создан с намерением привнести в мир больше света, 
                        спокойствия и гармонии.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full">
                      <Icon name="Heart" size={32} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">Любовь как основа</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Наши лампы-шишки излучают мягкий свет, напоминающий о природе и её мудрости. 
                        Мандалы помогают сосредоточиться на внутренней гармонии. Благовония создают 
                        атмосферу умиротворения. Каждая статуэтка — проводник древней мудрости.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                      <Icon name="Compass" size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">Путь к себе</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Sacrarium — это не просто магазин. Это пространство для тех, кто ищет красоту, 
                        смысл и глубину. Для дизайнеров, ценящих эстетику. Для практикующих медитацию. 
                        Для всех, кто хочет создать дома святилище спокойствия.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <Button 
                  size="lg"
                  onClick={() => setActiveSection('catalog')}
                  className="text-lg px-8"
                >
                  Начать путь с Sacrarium
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border mt-24 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Sacrarium</h3>
          <p className="text-muted-foreground mb-6">
            Пространство осознанности и любви
          </p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Mail" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
