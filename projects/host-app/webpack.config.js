const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    // "mfe1-app": "mfe1-app@http://localhost:4001/remoteEntry.js",
    // "mfe2-app": "mfe2- app@http://localhost:4002/remoteEntry.js",    

    // or(both works)
     //"mfe1-app": "http://localhost:4001/remoteEntry.js",//recommended 
    // "mfe2-app": "http://localhost:4002/remoteEntry.js",   


    //even all this section commented also working why?

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
