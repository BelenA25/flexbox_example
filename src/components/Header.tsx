import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants/theme';

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
  greeting: { fontSize: theme.text.title, fontWeight: 'bold', color: theme.colors.text },
  date: { fontSize: theme.text.small, color: theme.colors.textMuted },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { fontSize: theme.text.body, fontWeight: 'bold', color: theme.colors.primary },
});