import ReactGA from 'react-ga';

if (process.env.GA_TOKEN) {
  ReactGA.initialize(process.env.GA_TOKEN);
  ReactGA.pageview(window.location.pathname + window.location.search);
}
