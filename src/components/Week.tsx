import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Week() {
  return (
    <View style={styles.week}>
      <View style={styles.day}>
        <Text style={styles.letter}>L</Text>
        <View style={styles.circleDone}>
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.day}>
        <Text style={styles.letter}>M</Text>
        <View style={styles.circleDone}>
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.day}>
        <Text style={styles.letter}>M</Text>
        <View style={styles.circleDone}>
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      </View>
      <View style={styles.day}>
        <Text style={styles.letter}>J</Text>
        <View style={styles.circlePending} />
      </View>
      <View style={styles.day}>
        <Text style={styles.letter}>V</Text>
        <View style={styles.circlePending} />
      </View>
      <View style={styles.day}>
        <Text style={styles.letter}>S</Text>
        <View style={styles.circlePending} />
      </View>
      <View style={styles.day}>
        <Text style={styles.letter}>D</Text>
        <View style={styles.circlePending} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
  },
  day: { alignItems: 'center', gap: 8 },
  letter: { fontSize: 12, fontWeight: 'bold', color: colors.textMuted },
  circleDone: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlePending: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.border,
  },
});