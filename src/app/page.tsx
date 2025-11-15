'use client';

import { TrendingUp, Flame, Target, Clock, Brain, Wind, Moon, Sparkles, Play } from 'lucide-react';
import Navbar from '@/components/custom/navbar';
import CalendarStreak from '@/components/custom/calendar-streak';
import { mockProgress, meditationSessions, breatheSessions, sleepSessions, generateMockActivity } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const activities = generateMockActivity();
  const allSessions = [...meditationSessions.slice(0, 2), ...breatheSessions.slice(0, 1), ...sleepSessions.slice(0, 1)];
  
  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Bem-vindo ao Serene
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Seu refúgio diário para meditação, mindfulness e sono tranquilo
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">{mockProgress.currentStreak}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">dias seguidos</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">{mockProgress.totalSessions}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">sessões totais</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">{mockProgress.totalMinutes}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">minutos</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800 dark:text-gray-100">{mockProgress.weeklyProgress}/{mockProgress.weeklyGoal}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">meta semanal</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar Streak */}
        <div className="mb-8">
          <CalendarStreak activities={activities} />
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/meditate" className="group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Brain className="w-12 h-12 text-white mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Meditar</h3>
              <p className="text-blue-100">Encontre paz interior</p>
            </div>
          </Link>
          
          <Link href="/breathe" className="group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Wind className="w-12 h-12 text-white mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Respirar</h3>
              <p className="text-cyan-100">Acalme sua mente</p>
            </div>
          </Link>
          
          <Link href="/sleep" className="group">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Moon className="w-12 h-12 text-white mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Dormir</h3>
              <p className="text-indigo-100">Sons relaxantes</p>
            </div>
          </Link>
          
          <Link href="/mindfulness" className="group">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <Sparkles className="w-12 h-12 text-white mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Mindfulness</h3>
              <p className="text-purple-100">Viva o presente</p>
            </div>
          </Link>
        </div>
        
        {/* Recommended Sessions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Recomendado para Você
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allSessions.map((session) => (
              <div
                key={session.id}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {session.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {session.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {session.duration} min
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-5 h-5 text-white ml-0.5" />
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
