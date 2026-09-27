import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../constants/theme';
export default function Lab() {
  let clicks = 0;
  const [count, setCount] = useState(0);
  const [names, setNames] = useState(['Ana', 'Leo']);
  const [taps, setTaps] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Variable: {clicks} · Estado: {count}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          clicks = clicks + 1;
          console.log('clicks', clicks);
        }}
      >
        <Text style={styles.buttonText}>Sumar a la variable</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Sumar al estado</Text>
      </Pressable>
      <Text style={styles.label}>{names.join(', ')}</Text>
<Pressable
  style={styles.button}
  onPress={() => {
    names.push('Sol');
    setNames(names);
  }}
>
  <Text style={styles.buttonText}>Agregar con push</Text>
</Pressable>
<Pressable style={styles.button} onPress={() => setNames([...names, 'Sol'])}>
  <Text style={styles.buttonText}>Agregar con array nuevo</Text>
</Pressable>
<View style={styles.row}>
  <Pressable hitSlop={16} style={styles.dot} onPress={() => setTaps(taps + 1)} />
  <Text style={styles.label}>Toques: {taps}</Text>
</View>
      {/* EXPERIMENTS: paste each one right above this line */}
      <View style={styles.row}>
  <Pressable style={({ pressed }) => [styles.box, pressed && styles.boxPressed]}>
    <Text>Pressable</Text>
  </Pressable>
  <TouchableOpacity style={styles.box} activeOpacity={0.4}>
    <Text>TouchableOpacity</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.xl,
    paddingTop: 60,
    gap: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
  label: { fontSize: theme.text.body, color: theme.colors.text },
  button: { backgroundColor: theme.colors.primary, padding: theme.spacing.md, borderRadius: theme.radius.sm },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold' },
  row: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md },
  box: {
    width: 140,
    height: 60,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxPressed: { backgroundColor: theme.colors.primary },
  dot: { width: 12, height: 12, borderRadius: theme.radius.full, backgroundColor: theme.colors.primary },
  // STYLES: paste each new style right above this line
});