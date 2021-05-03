import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import loadable from '@loadable/component';
import {HOME_ROUT, MENU_ROUT, REWARDS_ROUT, GIFT_ROUT} from './constants/routs';
import Header from './сomponents/Header';
import Main from './сomponents/Main';
import Footer from './сomponents/Footer';
import PrimaryLoader from './сomponents/PrimaryLoader';
import useTheme from './hooks/useTheme';
import GlobalStyle from './global-style';
import * as SC from './App.style';

const HomePage = loadable(() => import(/* webpackPrefetch: true */ './pages/Home'), {fallback: <PrimaryLoader />});
const GiftCardsPage = loadable(() => import(/* webpackPrefetch: true */ './pages/GiftCards'), {
  fallback: <PrimaryLoader />,
});
const MenuPage = loadable(() => import(/* webpackPrefetch: true */ './pages/Menu'), {fallback: <PrimaryLoader />});
const RewardsPage = loadable(() => import(/* webpackPrefetch: true */ './pages/Rewards'), {
  fallback: <PrimaryLoader />,
});
const NotFoundPage = loadable(() => import(/* webpackPrefetch: true */ './pages/NotFound'), {
  fallback: <PrimaryLoader />,
});

const App = (): JSX.Element => {
  const {theme} = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SC.Container>
        <Header />
        <Main>
          <Switch>
            <Route exact path={HOME_ROUT}>
              <HomePage />
            </Route>
            <Route exact path={GIFT_ROUT}>
              <GiftCardsPage />
            </Route>
            <Route exact path={MENU_ROUT}>
              <MenuPage />
            </Route>
            <Route exact path={REWARDS_ROUT}>
              <RewardsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </SC.Container>
    </ThemeProvider>
  );
};

export default App;
