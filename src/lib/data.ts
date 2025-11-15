import { Session, UserProgress, DayActivity } from './types';

export const mockProgress: UserProgress = {
  totalSessions: 47,
  totalMinutes: 823,
  currentStreak: 7,
  longestStreak: 14,
  weeklyGoal: 5,
  weeklyProgress: 4,
};

export const meditationSessions: Session[] = [
  {
    id: '1',
    title: 'Meditação Matinal',
    duration: 10,
    category: 'meditation',
    description: 'Comece seu dia com clareza e foco',
  },
  {
    id: '2',
    title: 'Ansiedade e Calma',
    duration: 15,
    category: 'meditation',
    description: 'Reduza a ansiedade e encontre paz interior',
  },
  {
    id: '3',
    title: 'Meditação para Dormir',
    duration: 20,
    category: 'meditation',
    description: 'Relaxe profundamente antes de dormir',
  },
  {
    id: '4',
    title: 'Mindfulness Diário',
    duration: 12,
    category: 'mindfulness',
    description: 'Pratique presença no momento atual',
  },
];

export const breatheSessions: Session[] = [
  {
    id: 'b1',
    title: 'Respiração 4-7-8',
    duration: 5,
    category: 'breathe',
    description: 'Técnica poderosa para relaxamento rápido',
  },
  {
    id: 'b2',
    title: 'Respiração Box',
    duration: 8,
    category: 'breathe',
    description: 'Equilibre sua mente e corpo',
  },
  {
    id: 'b3',
    title: 'Respiração Profunda',
    duration: 10,
    category: 'breathe',
    description: 'Acalme o sistema nervoso',
  },
];

export const sleepSessions: Session[] = [
  {
    id: 's1',
    title: 'Chuva Suave',
    duration: 30,
    category: 'sleep',
    description: 'Sons relaxantes de chuva para dormir',
  },
  {
    id: 's2',
    title: 'Ondas do Oceano',
    duration: 45,
    category: 'sleep',
    description: 'Deixe-se levar pelas ondas',
  },
  {
    id: 's3',
    title: 'Floresta Noturna',
    duration: 60,
    category: 'sleep',
    description: 'Sons da natureza para sono profundo',
  },
];

// Gera últimos 30 dias de atividade
export const generateMockActivity = (): DayActivity[] => {
  const activities: DayActivity[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const completed = Math.random() > 0.3; // 70% chance de ter completado
    activities.push({
      date: date.toISOString().split('T')[0],
      completed,
      sessions: completed ? Math.floor(Math.random() * 3) + 1 : 0,
      minutes: completed ? Math.floor(Math.random() * 30) + 10 : 0,
    });
  }
  
  return activities;
};
