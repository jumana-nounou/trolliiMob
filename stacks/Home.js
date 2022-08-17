import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Oneway from '../views/flightsearch/Oneway';
import Round from '../views/flightsearch/Round';
import Search from '../views/flightsearch/Search';
import OnBoarding from '../views/onBoarding/OnBoarding';



const Stack = createNativeStackNavigator();
function MyStack() {
 
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="onBoarding"
        component={OnBoarding}
        options={{headerShown:true  
        }}
      /> */}
   <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown:false  
        }}
      />
      {/* <Stack.Screen
        name="Round"
        component={Round}
        options={{headerShown:false  
        }}
      /> */}
    </Stack.Navigator>
  );
}


  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
    return {
      leftButtonStyle: { opacity },
      rightButtonStyle: { opacity },
      titleStyle: { opacity },
      backgroundStyle: { opacity },
    };
  };




export default MyStack;