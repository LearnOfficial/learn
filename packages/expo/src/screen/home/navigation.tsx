import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './Home';
import { SCREENS } from '..';

const HomeDrawerNavigation = createDrawerNavigator();

export function HomeNavigation() {
  return (
    <HomeDrawerNavigation.Navigator initialRouteName={SCREENS.HOME.ROOT}>
      <HomeDrawerNavigation.Screen name={SCREENS.HOME.ROOT} component={Home} />
    </HomeDrawerNavigation.Navigator>
  );
}