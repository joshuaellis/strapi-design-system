import React, { useEffect, useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { parse } from 'qs';

import { ThemeProvider } from '../../packages/strapi-design-system/src/ThemeProvider';
import { Box } from '../../packages/strapi-design-system/src/Box';
import { lightTheme } from '../../packages/strapi-design-system/src/themes/lightTheme';
import { darkTheme } from '../../packages/strapi-design-system/src/themes/darkTheme';

const themeQueryURL = parse(document.location.search).theme;

const Theme = ({ children }) => {
  const isDarkAddon = useDarkMode();
  const [isDark, setIsDark] = useState(themeQueryURL || isDarkAddon);

  useEffect(() => {
    if(!themeQueryURL && isDarkAddon !== isDark) {
      setIsDark(isDarkAddon);
    }
  }, [isDarkAddon, isDark]);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Box padding={2} background='neutral0'>{children}</Box>
    </ThemeProvider>
  )
};

export default Theme;