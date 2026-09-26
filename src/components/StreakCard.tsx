import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function StreakCard() {
  return (
    <View style={styles.card}>
      <Ionicons name="flame" size={32} color={colors.primary} />
      <Text style={styles.number}>12 días</Text>
      <Text style={styles.label}>Racha actual</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 4,
  },
  number: { fontSize: 32, fontWeight: 'bold', color: colors.text },
  label: { fontSize: 14, color: colors.textMuted },
});