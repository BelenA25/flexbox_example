import HabitList from '@/components/HabitList';
import Stats from '@/components/Stats';
import StreakCard from '@/components/StreakCard';
import Week from '@/components/Week';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { colors } from '../constants/colors';

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <StreakCard />
        <Stats />
        <Week />
        <HabitList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 20, gap: 16 },
});