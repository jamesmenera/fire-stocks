export default {
  name: 'company',
  initialize: function(container, app) {
    app.inject('controller', 'company', 'service:company');
    app.inject('route', 'company', 'service:company');
  }
};
