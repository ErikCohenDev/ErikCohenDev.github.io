import GA4React from 'ga-4-react';
import { useEffect } from 'react';

const config = {
  ua: process.env.REACT_APP_GA_TOKEN ?? '',
};

const Analytics = () => {
  useEffect(() => {
    try {
      const ga4react = new GA4React(config.ua);
      ga4react.initialize();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Analytics is disabled', err);
    }
  }, []);
  return null;
};

export default Analytics;
