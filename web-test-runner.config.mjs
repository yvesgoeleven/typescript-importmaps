import { esbuildPlugin } from '@web/dev-server-esbuild';
import { importMapsPlugin } from '@web/dev-server-import-maps';

export default {
  plugins: [
    esbuildPlugin({ ts: true, target: 'auto-always' }),
    importMapsPlugin({
      inject: {
          importMap: {
              imports: {
                "chai": "/node_modules/chai/esm/chai.js",
                "@constants" : "/dist/constants.js",
                "@helloWorld" : "/dist/helloWorld.js"
              }
          }
      }
  })
  ],
  nodeResolve: true
};