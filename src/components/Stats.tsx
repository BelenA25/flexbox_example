import { theme } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Stats() {
  return (
    <View style={styles.row}>
      <View style={styles.stat}>
        <Text style={styles.number}>3/5</Text>
        <Text style={styles.label}>Hábitos</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>80%</Text>
        <Text style={styles.label}>Semana</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.number}>45m</Text>
        <Text style={styles.label}>Enfoque</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12 },
  stat: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },
  number: { fontSize: theme.spacing.xl, fontWeight: 'bold', color: colors.text },
  label: { fontSize: 12, color: colors.textMuted },
});