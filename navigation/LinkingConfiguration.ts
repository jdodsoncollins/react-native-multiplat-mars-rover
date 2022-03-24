/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Tab1: {
            screens: {
              TabOneScreen: 'Tab1',
            },
          },
          Tab2: {
            screens: {
              TabTwoScreen: 'Tab2',
            },
          },
          Tab3: {
            screens: {
              TabTwoScreen: 'Tab3',
            },
          },
          Tab4: {
            screens: {
              TabTwoScreen: 'Tab4',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
