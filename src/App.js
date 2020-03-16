import React from 'react';
import { UITemplate, Navigation } from '@create-react-resume/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SkillsRoute from './pages/skills';
import HomeRoute from './pages/home';
import RolesRoute from './pages/roles';
import theme from './theme';
import {
  CssBaseline,
  Header,
  Main,
  Footer
} from '@create-react-resume/theme-default';

const App = () => {
  return (
    <>
      <Router>
        <UITemplate {...theme}>
          <CssBaseline />
          <Header>
            <Navigation
              email="mailto:mark.escolano14@gmail.com"
              github="https://github.com/Markila-BOT"
              linkedin="https://www.linkedin.com/in/mark-escolano-2715ab129/"
              medium="https://medium.com/@markilabot"
            >
              <Link to="/">Home</Link>
              <Link to="/roles">Roles</Link>
              <Link to="/skills">Skills</Link>
            </Navigation>
          </Header>
          <Main>
            <HomeRoute />
            <RolesRoute />
            <SkillsRoute />
          </Main>
          <Footer>
            Made with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>{' '}
            using{' '}
            <a href="https://github.com/matmalkowski/create-react-resume">
              Create React Resume{' '}
              <span role="img" aria-label="document">
                📄
              </span>
            </a>
          </Footer>
        </UITemplate>
      </Router>
    </>
  );
};

export default App;
