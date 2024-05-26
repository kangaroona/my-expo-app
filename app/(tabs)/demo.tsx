import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
export default function Demo() {
  return (
    <View style={styles.container}>
      <Text>walk</Text>
      <Link href='/explore'>View home</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
