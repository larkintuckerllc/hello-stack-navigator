import { createStackNavigator, createAppContainer } from 'react-navigation';
import A from './A';
import B from './B';
import C from './C';
import Home from './Home';

const AppNavigator = createStackNavigator({
  A,
  B,
  C,
  Home,
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
