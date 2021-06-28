import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { LinktreePage } from './views';
import { theme } from './theme';
import '@fontsource/karla';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <LinktreePage />
    </ChakraProvider>
  );
}

export default App;
