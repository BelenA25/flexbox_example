import Ionicons from '@expo/vector-icons/Ionicons';

export type Habit = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  done: boolean;
};

export const initialHabits: Habit[] = [
  { id: '1', title: 'Tomar 2 litros de agua', icon: 'water-outline', done: true },
  { id: '2', title: 'Leer 10 páginas', icon: 'book-outline', done: false },
  { id: '3', title: 'Caminar 20 minutos', icon: 'walk-outline', done: true },
];