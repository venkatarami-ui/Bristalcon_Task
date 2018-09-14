module.exports = function(config) {

  var appBase    = 'src/';      
  var appSrcBase = appBase;     

  var testingBase    = 'testing/'; 
  var testingSrcBase = 'testing/'; 

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    client: {
      builtPaths: [appBase, testingBase], 
      clearContext: false 
    },

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      'node_modules/systemjs/dist/system.src.js',

      'node_modules/core-js/client/shim.js',

      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      { pattern: appBase + '/systemjs.config.js', included: false, watched: false },
      { pattern: appBase + '/systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js', 
      
      { pattern: appBase + '**/*.js', included: false, watched: true },
      { pattern: testingBase + '**/*.js', included: false, watched: true },


      { pattern: appBase + '**/*.html', included: false, watched: true },
      { pattern: appBase + '**/*.css', included: false, watched: true },

      { pattern: appBase + '**/*.ts', included: false, watched: false },
      { pattern: appBase + '**/*.js.map', included: false, watched: false },
      { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
      { pattern: testingBase + '**/*.js.map', included: false, watched: false}
    ],

    proxies: {
      '/base/src/node_modules/': '/base/node_modules/'
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
