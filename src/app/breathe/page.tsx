'use client';

import { useState } from 'react';
import { Wind, Play, Pause, RotateCcw } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import { breatheSessions } from '@/lib/data';

export default function BreathePage() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  
  const techniques = [
    {
      name: '4-7-8',
      description: 'Inspire 4s, segure 7s, expire 8s',
      inhale: 4,
      hold: 7,
      exhale: 8,
    },
    {
      name: 'Box Breathing',
      description: 'Inspire 4s, segure 4s, expire 4s, segure 4s',
      inhale: 4,
      hold: 4,
      exhale: 4,
    },
    {
      name: 'Respiração Profunda',
      description: 'Inspire 6s, expire 6s',
      inhale: 6,
      hold: 0,
      exhale: 6,
    },
  ];
  
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 shadow-2xl">
            <Wind className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Exercícios de Respiração
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Acalme sua mente e reduza o estresse com técnicas de respiração comprovadas
          </p>
        </div>
        
        {/* Interactive Breathing Circle */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center">
              {/* Breathing Circle */}
              <div className="relative mb-8">
                <div
                  className={`w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center transition-all duration-1000 ${
                    isActive
                      ? phase === 'inhale'
                        ? 'scale-110'
                        : phase === 'exhale'
                        ? 'scale-90'
                        : 'scale-100'
                      : 'scale-100'
                  }`}
                >
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold mb-2">
                      {isActive ? (
                        phase === 'inhale' ? 'Inspire' : phase === 'hold' ? 'Segure' : 'Expire'
                      ) : (
                        'Pronto?'
                      )}
                    </p>
                    <p className="text-5xl font-bold">
                      {isActive ? '4' : '•'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-3"
                >
                  {isActive ? (
                    <>
                      <Pause className="w-6 h-6" />
                      Pausar
                    </>
                  ) : (
                    <>
                      <Play className="w-6 h-6" />
                      Começar
                    </>
                  )}
                </button>
                
                <button
                  onClick={() => {
                    setIsActive(false);
                    setPhase('inhale');
                  }}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-4 rounded-2xl hover:scale-105 transition-transform"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Técnicas de Respiração
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techniques.map((technique) => (
              <div
                key={technique.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {technique.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {technique.description}
                </p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Praticar
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Guided Sessions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Sessões Guiadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breatheSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {session.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {session.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {session.duration} min
                  </span>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-xl hover:shadow-lg transition-all">
                    <Play className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
