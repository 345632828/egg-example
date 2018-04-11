// app/router.js
module.exports = app => {
  const { router, controller,middleware } = app;

  
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user/:id/:name', controller.user.info);
};