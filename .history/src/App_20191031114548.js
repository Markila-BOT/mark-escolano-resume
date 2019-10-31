import React from 'react';
import { UITemplate, Navigation } from '@create-react-resume/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import EducationRoute from './pages/education';
import SkillsRoute from './pages/skills';
import HomeRoute from './pages/home';
import RolesRoute from './pages/roles';
import theme from './theme';
import {
  CssBaseline,
  Header,
  Main,
  Footer,
} from '@create-react-resume/theme-default';

const backGroundStyle = {
  color:
    'linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 30%,rgb(58, 102, 183) 30%,rgb(87, 179, 194) 100%)',
};

const App = () => {
  return (
    <>
      <Router>
        <UITemplate {...theme}>
          <CssBaseline />
          <Header style={{ background: backGroundStyle.color }}>
            <Navigation
              email="mailto:#"
              github="https://github.com/matmalkowski"
              linkedin="#"
              medium="#">
              <Link to="/">Home</Link>
              <Link to="/roles">Roles</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/education">Education</Link>
            </Navigation>
          </Header style={{ background: backGroundStyle.color }}>>
          <Main>
            <HomeRoute />
            <RolesRoute />
            <SkillsRoute />
            <EducationRoute />
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
