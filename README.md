  webpack.config.js

  ``` bash
  // const isEnvDevelopment = webpackEnv === 'development';
  // const isEnvProduction = webpackEnv === 'production';

  const isEnvDevelopment = true;
  const isEnvProduction = false;
  ```

  Run
  ``` bash
  sudo apt install xsel && npm install && npm run build
  npm install -g serve
  serve -s build
  ```