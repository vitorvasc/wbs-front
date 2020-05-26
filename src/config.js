const dev = {
  cms: {
    URL: "http://localhost:3007"
  }
};

const prod = {
  cms: {
    URL: "https://wbs.advanced-roleplay.com.br:3007"
  }
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {    
  ...config
};