import { addons } from '@storybook/addons';

import { lightTheme } from '../packages/strapi-design-system/src/themes/lightTheme';

import { createCustomTheme } from './utils/createCustomTheme';

addons.setConfig({
  theme: createCustomTheme({
    theme: lightTheme,
    options: {
      base: 'light'
    },
  })
});