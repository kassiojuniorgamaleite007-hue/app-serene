'use client';

import { DayActivity } from '@/lib/types';
import { Check } from 'lucide-react';

interface CalendarStreakProps {
  activities: DayActivity[];
}

export default function CalendarStreak({ activities }: CalendarStreakProps) {
  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', { weekday: 'short' }).charAt(0).toUpperCase();
  };
  
  const getIntensity = (activity: DayActivity) => {
    if (!activity.completed) return 'bg-gray-200 dark:bg-gray-800';
    if (activity.sessions >= 3) return 'bg-gradient-to-br from-purple-500 to-blue-600';
    if (activity.sessions >= 2) return 'bg-gradient-to-br from-purple-400 to-blue-500';
    return 'bg-gradient-to-br from-purple-300 to-blue-400';
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
        Seu Progresso
      </h3>
      
      <div className="grid grid-cols-10 gap-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            {index % 10 === 0 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {getDayName(activity.date)}
              </span>
            )}
            <div
              className={`w-8 h-8 rounded-lg ${getIntensity(activity)} flex items-center justify-center transition-all hover:scale-110 cursor-pointer group relative`}
              title={`${activity.date}: ${activity.sessions} sessões, ${activity.minutes} min`}
            >
              {activity.completed && (
                <Check className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap z-10">
                {activity.sessions > 0 ? (
                  <>
                    {activity.sessions} sessões
                    <br />
                    {activity.minutes} minutos
                  </>
                ) : (
                  'Sem atividade'
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gray-200 dark:bg-gray-800"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Sem atividade</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-300 to-blue-400"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">1-2 sessões</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-gradient-to-br from-purple-500 to-blue-600"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">3+ sessões</span>
        </div>
      </div>
    </div>
  );
}
