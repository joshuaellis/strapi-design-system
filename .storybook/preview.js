import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { createCustomTheme } from './utils/createCustomTheme';
import Theme from './components/Theme';

import { darkTheme } from '../packages/strapi-design-system/src/themes/darkTheme';
import { lightTheme } from '../packages/strapi-design-system/src/themes/lightTheme';
import { VisuallyHidden } from '../packages/strapi-design-system/src/VisuallyHidden';
import { Box } from '../packages/strapi-design-system/src/Box';

export const parameters = {
  options: {
    storySort: {
      order: ['Design System', ['Subatomic', 'Atoms', 'Molecules', 'Organisms', 'Layouts']],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    // Override the default dark theme
    dark: createCustomTheme({ theme: darkTheme, asStorybookTheme: false }),
    // Override the default light theme
    light: createCustomTheme({ theme: lightTheme, asStorybookTheme: false }),
  },
};

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <Theme>
        <main>
          <VisuallyHidden>
            {/* Necessary in order to prevent axe core from providing errors on main / heading */}
            <h1>Storybook story</h1>
          </VisuallyHidden>
          <Box height="100%" padding={2}>
            <Story />
          </Box>
        </main>
      </Theme>
    </MemoryRouter>
  ),
];
