import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { LinktreePage } from './views';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <LinktreePage />
    </ChakraProvider>
  );
}

export default App;
