import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function HabitList() {
  return (
    <View style={styles.list}>
      <Text style={styles.title}>Hábitos de hoy</Text>

      <View style={styles.habit}>
        <View style={styles.icon}>
          <Ionicons name="water-outline" size={22} color={colors.primary} />
        </View>
        <Text style={styles.habitText}>Tomar 2 litros de agua</Text>
        <View style={styles.checkDone}>
          <Ionicons name="checkmark" size={18} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.habit}>
        <View style={styles.icon}>
          <Ionicons name="book-outline" size={22} color={colors.primary} />
        </View>
        <Text style={styles.habitText}>Leer 10 páginas</Text>
        <View style={styles.checkPending} />
      </View>

      <View style={styles.habit}>
        <View style={styles.icon}>
          <Ionicons name="walk-outline" size={22} color={colors.primary} />
        </View>
        <Text style={styles.habitText}>Caminar 20 minutos</Text>
        <View style={styles.checkDone}>
          <Ionicons name="checkmark" size={18} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: { flex: 1, gap: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: colors.text },
  habit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 10,
    gap: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitText: { flex: 1, fontSize: 16, color: colors.text },
  checkDone: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkPending: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.border,
  },
});