In order to install the pro version of Font Awesome which includes the light theme that we want to use, you need to configure the @fortawesome scope to use their Pro NPM registry.
```
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" 172AF3C7-B8A6-4A2C-B23D-2EF850C863E4
```

Once the configuration is updated you can proceed and install Font Awesome
```
npm install @fortawesome/angular-fontawesome --save
npm install @fortawesome/pro-light-svg-icons --save
npm install @fortawesome/fontawesome-svg-core --save
npm install @fortawesome/fontawesome-pro --save-dev
```

