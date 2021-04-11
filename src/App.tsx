import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import loadable from '@loadable/component';
import Header from './сomponents/Header';
import Main from './сomponents/Main';
import Footer from './сomponents/Footer';
import PrimaryLoader from './сomponents/PrimaryLoader';
import useTheme from './hooks/useTheme';
import GlobalStyle from './global-style';
import { Container } from './App.style';

const HomePage = loadable(() => import(/* webpackPrefetch: true */ './pages/Home'), { fallback: <PrimaryLoader /> });
const GiftCardsPage = loadable(() => import(/* webpackPrefetch: true */ './pages/GiftCards'), { fallback: <PrimaryLoader /> });
const MenuPage = loadable(() => import(/* webpackPrefetch: true */ './pages/Menu'), { fallback: <PrimaryLoader /> });
const RewardsPage = loadable(() => import(/* webpackPrefetch: true */ './pages/Rewards'), { fallback: <PrimaryLoader /> });
const NotFoundPage = loadable(() => import(/* webpackPrefetch: true */ './pages/NotFound'), { fallback: <PrimaryLoader /> });

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/gift"><GiftCardsPage /></Route>
            <Route exact path="/menu"><MenuPage /></Route>
            <Route exact path="/rewards"><RewardsPage /></Route>
            <Route path="*"><NotFoundPage /></Route>
          </Switch>
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
