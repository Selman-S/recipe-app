
import { ThemeProvider } from 'styled-components';

import theme from './components/globalStyles/theme';

import RouterPage from './router/RouterPage';

function App() {
  return (

      <ThemeProvider theme={theme}>

      <RouterPage/>
      </ThemeProvider>

   
  );
}

export default App;
