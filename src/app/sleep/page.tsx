'use client';

import { Moon, Play, Volume2, Clock, Star } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { sleepSessions } from '@/lib/data';

export default function SleepPage() {
  const soundCategories = [
    { name: 'Chuva', icon: '🌧️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Oceano', icon: '🌊', color: 'from-cyan-500 to-teal-500' },
    { name: 'Floresta', icon: '🌲', color: 'from-green-500 to-emerald-500' },
    { name: 'Fogueira', icon: '🔥', color: 'from-orange-500 to-red-500' },
    { name: 'Vento', icon: '💨', color: 'from-gray-400 to-gray-600' },
    { name: 'Trovão', icon: '⚡', color: 'from-purple-500 to-indigo-500' },
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-2xl">
            <Moon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Sons para Dormir
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Relaxe profundamente com sons da natureza e música ambiente para um sono tranquilo
          </p>
        </div>
        
        {/* Featured Sleep Story */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">História para Dormir</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Noite Estrelada na Montanha
              </h2>
              <p className="text-purple-100 mb-6 text-lg max-w-2xl">
                Uma jornada relaxante por uma noite tranquila nas montanhas, com sons suaves da natureza
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>45 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5" />
                  <span>Narração suave</span>
                </div>
              </div>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
                <Play className="w-6 h-6" />
                Ouvir Agora
              </button>
            </div>
          </div>
        </div>
        
        {/* Sound Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Sons da Natureza
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {soundCategories.map((category) => (
              <button
                key={category.name}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform shadow-xl`}
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <p className="font-bold">{category.name}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Sleep Music Sessions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Músicas para Dormir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sleepSessions.map((session) => (
              <div
                key={session.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {session.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {session.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {session.duration} min
                      </span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Reproduzir
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sleep Timer */}
        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Timer de Sono
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Configure um timer para pausar automaticamente a reprodução
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[15, 30, 45, 60].map((minutes) => (
                <button
                  key={minutes}
                  className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  {minutes} min
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
