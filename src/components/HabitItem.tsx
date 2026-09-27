import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Habit } from '../constants/habits';
import { theme } from '../constants/theme';

export default function HabitItem({ habit, onToggle }: { habit: Habit; onToggle: (id: string) => void }) {
    console.log('draw', habit.title)
        return (
    <View style={styles.habit}>
      <View style={styles.icon}>
        <Ionicons name={habit.icon} size={22} color={theme.colors.primary} />
      </View>
      <Text style={styles.title}>{habit.title}</Text>
      <Pressable
        hitSlop={8}
        onPress={() => onToggle(habit.id)}
        style={({ pressed }) => [habit.done ? styles.checkDone : styles.checkPending, pressed && styles.pressed]}
      >
        {habit.done && <Ionicons name="checkmark" size={18} color="#FFFFFF" />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  habit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    gap: theme.spacing.md,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { flex: 1, fontSize: theme.text.body, color: theme.colors.text },
  checkDone: {
    width: 28,
    height: 28,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkPending: {
    width: 28,
    height: 28,
    borderRadius: theme.radius.full,
    borderWidth: 2,
    borderColor: theme.colors.border,
  },
  pressed: { opacity: 0.5 },
});