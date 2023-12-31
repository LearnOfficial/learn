import { Platform } from 'react-native';
const STATIC_IMAGES = {
  LearnLogo:
    Platform.OS === 'web'
      ? //@ts-ignore
        new URL(`assets/imgs/learn-logo.png`, import.meta.url).href
      : require('./assets/imgs/learn-logo.png'),
  GitHubIcon:
    Platform.OS === 'web'
      ? //@ts-ignore
        new URL(`assets/imgs/github-icon.png`, import.meta.url).href
      : require('./assets/imgs/github-icon.png'),
  LearnDesktopApp:
    Platform.OS === 'web'
      ? //@ts-ignore
        new URL(`assets/imgs/learn-desktop-app.png`, import.meta.url).href
      : require('./assets/imgs/learn-desktop-app.png'),
  FemaleProfileImage:
    Platform.OS === 'web'
      ? //@ts-ignore
        new URL(`assets/imgs/female-profile-image.png`, import.meta.url).href
      : require('./assets/imgs/female-profile-image.png')
};

export { STATIC_IMAGES };
