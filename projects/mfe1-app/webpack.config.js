const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1-app',

  exposes: {
    './OrderModule': './projects/mfe1-app/src/app/order/order.module.ts',
  },
 
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
 
});
