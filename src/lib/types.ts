export interface Session {
  id: string;
  title: string;
  duration: number;
  category: 'meditation' | 'breathe' | 'sleep' | 'mindfulness';
  description: string;
  image?: string;
  completed?: boolean;
}

export interface UserProgress {
  totalSessions: number;
  totalMinutes: number;
  currentStreak: number;
  longestStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
}

export interface DayActivity {
  date: string;
  completed: boolean;
  sessions: number;
  minutes: number;
}
