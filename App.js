import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const App = () => {
  const scrollTop = useSharedValue(0);
  const handleScroll = useAnimatedScrollHandler(e => {
    scrollTop.value = e.contentOffset.y;
  }, []);

  const style = useAnimatedStyle(
    () => ({
      transform: [{ translateY: scrollTop.value + 10 }],
    }),
    [],
  );

  return (
    <Animated.ScrollView scrollEventThrottle={16} onScroll={handleScroll}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          { width: 100, height: 100, backgroundColor: 'red' },
          style,
        ]}
      />
      {Array.from({ length: 100 }).map((_, index) => (
        <View key={index} style={{ paddingVertical: 16 }}>
          <Text>{index}</Text>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default App;
