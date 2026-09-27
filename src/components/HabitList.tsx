import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Habit, initialHabits } from '../constants/habits';
import { theme } from '../constants/theme';
import AddButton from './AddButton';
import HabitItem from './HabitItem';
export default function HabitList() {
  const [habits, setHabits] = useState(initialHabits);

  function toggleHabit(id: string) {
    setHabits(habits.map((habit) => (habit.id === id ? { ...habit, done: !habit.done } : habit)));
  }

  function addHabit() {
    const newHabit: Habit = { id: String(Date.now()), title: 'Nuevo hábito', icon: 'star-outline', done: false };
    setHabits([...habits, newHabit]);
  }

  const many = Array.from({ length: 200 }, (_, i) => ({ ...initialHabits[0], id: String(i), title: 'Hábito ' + i }));

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Hábitos de hoy</Text>
      <FlatList
        data={habits}
        keyExtractor={(habit) => habit.id}
        renderItem={({ item }) => <HabitItem habit={item} onToggle={toggleHabit} />}
        contentContainerStyle={styles.items}
      />
      <AddButton onPress={addHabit} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, gap: theme.spacing.sm },
  title: { fontSize: theme.text.heading, fontWeight: 'bold', color: theme.colors.text },
  items: { gap: theme.spacing.sm },
});