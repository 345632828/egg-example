// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    //const result = await this.app.mysql.insert('runoob_tbl', { runoob_title: 'Hello World' });
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1',time:"2014-08-12 09:25:24 " },
        { id: 2, title: 'this is news 2', url: '/news/2',time:"2014-08-12 09:25:24 "}
      ]
    };
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;