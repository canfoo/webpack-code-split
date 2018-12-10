/**
 * This file handles all routing and async loading of
 * split JavaScript files. The splitting of components
 * is based off the routes created in this file.
 */
import Core from './components/Core';

// throws an error in the console if the page wasn't able to load
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

/**
 * This object we are exporting is the equivalent of:
 * <Route path="/" component={Core}>
 *   <IndexRoute component={Home}/>
 *   <Route path="about" component={About}/>
 *   <Route path="users" component={Users}>
 *   <Route path="*" component={Home}/>
 * </Route>
 */
export default {
  path: '/',
  component: Core,
  indexRoute: {
    getComponent(location, cb) {
      System.import(/* webpackChunkName: "home-chunk" */ './components/Home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'add',
      getComponent(location, cb) {
        System.import(/* webpackChunkName: "add-chunk" */ './components/add')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    // {
    //   path: 'about',
    //   getComponent(location, cb) {
    //     System.import(/* webpackChunkName: "about-chunk" */ './components/About')
    //       .then(loadRoute(cb))
    //       .catch(errorLoading);
    //   },
    // },
    // {
    //   path: 'users',
    //   getComponent(location, cb) {
    //     System.import(/* webpackChunkName: "users-chunk" */ './components/Users')
    //       .then(loadRoute(cb))
    //       .catch(errorLoading);
    //   },
    // },
    // {
    //   path: 'doc',
    //   getComponent(location, cb) {
    //     System.import(/* webpackChunkName: "doc-chunk" */ './components/Doc')
    //       .then(loadRoute(cb))
    //       .catch(errorLoading);
    //   },
    // },
    {
      path: '*',
      getComponent(location, cb) {
        System.import(/* webpackChunkName: "home-chunk" */ './components/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
