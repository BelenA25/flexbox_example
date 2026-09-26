import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  box1: { width: 80, height: 80, backgroundColor: 'tomato' },
  box2: { width: 80, height: 80, backgroundColor: 'gold' },
  box3: { width: 80, height: 80, backgroundColor: 'dodgerblue' },
});