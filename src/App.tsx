import React from 'react';
import { ChakraProvider, ColorModeScript, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { LinktreePage } from './views';

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <LinktreePage />
    </ChakraProvider>
  );
}

export default App;
