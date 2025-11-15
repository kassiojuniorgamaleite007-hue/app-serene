'use client';

import { Sparkles, Play, Clock, Heart, Lightbulb, Coffee, Sunrise } from 'lucide-react';
import Navbar from '@/components/custom/navbar';

export default function MindfulnessPage() {
  const practices = [
    {
      id: 1,
      title: 'Atenção Plena ao Comer',
      description: 'Pratique mindfulness durante suas refeições',
      duration: 10,
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      title: 'Caminhada Consciente',
      description: 'Conecte-se com o presente enquanto caminha',
      duration: 15,
      icon: Sunrise,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 3,
      title: 'Gratidão Diária',
      description: 'Cultive gratidão e positividade',
      duration: 8,
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 4,
      title: 'Observação dos Pensamentos',
      description: 'Aprenda a observar sem julgar',
      duration: 12,
      icon: Lightbulb,
      color: 'from-purple-500 to-indigo-500',
    },
  ];
  
  const dailyPractices = [
    {
      time: 'Manhã',
      title: 'Intenção do Dia',
      description: 'Defina sua intenção para o dia',
      duration: 5,
    },
    {
      time: 'Tarde',
      title: 'Pausa Consciente',
      description: 'Momento de presença no meio do dia',
      duration: 3,
    },
    {
      time: 'Noite',
      title: 'Reflexão Noturna',
      description: 'Revise seu dia com compaixão',
      duration: 7,
    },
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mindfulness
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Viva o momento presente com práticas de atenção plena para o dia a dia
          </p>
        </div>
        
        {/* Quote of the Day */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 mb-6 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-relaxed">
                "O momento presente é tudo o que você tem. Faça dele o foco principal da sua vida."
              </h2>
              <p className="text-purple-100 text-lg">— Eckhart Tolle</p>
            </div>
          </div>
        </div>
        
        {/* Daily Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Práticas Diárias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyPractices.map((practice) => (
              <div
                key={practice.time}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer"
              >
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
                  {practice.time}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {practice.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {practice.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{practice.duration} min</span>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-3 rounded-xl hover:shadow-lg transition-all">
                    <Play className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mindfulness Practices */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Práticas de Mindfulness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${practice.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {practice.description}
                      </p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{practice.duration} min</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${practice.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                    <Play className="w-5 h-5" />
                    Começar Prática
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mindfulness Tips */}
        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Dicas para Praticar Mindfulness
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Comece Pequeno
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Inicie com apenas 5 minutos por dia e aumente gradualmente
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Seja Consistente
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pratique no mesmo horário todos os dias para criar um hábito
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Não Julgue
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Observe seus pensamentos sem julgamento ou crítica
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Respire Conscientemente
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use a respiração como âncora para o momento presente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
