'use client';

import { Play, Clock, Heart, Star } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { meditationSessions } from '@/lib/data';

export default function MeditatePage() {
  const categories = [
    { name: 'Ansiedade', color: 'from-blue-500 to-cyan-500' },
    { name: 'Sono', color: 'from-indigo-500 to-purple-500' },
    { name: 'Estresse', color: 'from-purple-500 to-pink-500' },
    { name: 'Foco', color: 'from-orange-500 to-red-500' },
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-2xl">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meditação Guiada
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Encontre paz interior e reduza a ansiedade com nossas meditações guiadas
          </p>
        </div>
        
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Categorias
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white font-bold text-lg hover:scale-105 transition-transform shadow-xl`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Session */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">Destaque do Dia</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meditação para Ansiedade
            </h2>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl">
              Uma jornada guiada para acalmar sua mente, reduzir a ansiedade e encontrar paz interior profunda
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>15 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>4.9/5 (2.3k avaliações)</span>
              </div>
            </div>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
              <Play className="w-6 h-6" />
              Começar Agora
            </button>
          </div>
        </div>
        
        {/* All Sessions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Todas as Meditações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meditationSessions.map((session) => (
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
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Iniciar Sessão
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
