import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './screen/auth/navigation';
import { HomeNavigation } from './screen/home/navigation';
import { useCallback, useState } from 'react';
import { i18n } from './i18n';
import { Provider, useSelector } from 'react-redux';
import appStore from './store';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { OnboardingNavigation } from './screen/onboarding/navigation';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export function App() {
  const [fontsLoaded] = useFonts({
    Lexend: require('../assets/Lexend.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={appStore}>
        <AppLoader />
      </Provider>
      <StatusBar />
    </View>
  );
}

export function AppLoader() {
  const token = useSelector((state) => state.accountSliceReducer.token);
  const isAuthenticated = token !== '';

  const locale = useSelector((state) => state.settingsSliceReducer.locale);
  const isOnboardingCompleted = useSelector(
    (state) => state.statusSliceReducer.onboardingCompleted
  );

  i18n.locale = locale;

  let Navigation: any = HomeNavigation;

  if (!isAuthenticated) {
    if (!isOnboardingCompleted) {
      Navigation = OnboardingNavigation;
    } else {
      Navigation = AuthNavigation;
    }
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
