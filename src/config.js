const dev = {
  cms: {
    URL: "http://localhost:3007"
  }
};

const prod = {
  cms: {
    URL: "https://NOT/SET"
  }
};

const config = process.env.REACT_APP_STAGE === 'production'
  ? prod
  : dev;

export default {    
  ...config
};