import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { DashboardPage, LinktreePage } from './views';
import { theme } from './store/theme';
import '@fontsource/karla';

const App: React.FC = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Switch>
            <Route path={'/:username'} component={LinktreePage} />
            <Route path={'/'} exact={true} component={DashboardPage} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
