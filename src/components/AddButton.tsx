import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../constants/colors';

export default function AddButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <Ionicons name="add" size={22} color="#FFFFFF" />
      <Text style={styles.buttonText}>Agregar hábito</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 16,
  },
  pressed: { opacity: 0.8, transform: [{ scale: 0.98 }] },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
});