import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              AccountScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              FeedScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              SearchScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
