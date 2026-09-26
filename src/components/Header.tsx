import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hola, Vale</Text>
        <Text style={styles.date}>Jueves 1 de octubre</Text>
      </View>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>VA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { fontSize: 24, fontWeight: 'bold', color: colors.text },
  date: { fontSize: 14, color: colors.textMuted },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { fontSize: 16, fontWeight: 'bold', color: colors.primary },
});