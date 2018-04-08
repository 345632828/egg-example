// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        let data={
            list:{
                orderBy: "showd",
                startAt: 'shos',
                endAt: 'djs',
            }
            
        }

        const ctx = this.ctx;
        const page = ctx.query.page || 1;
        const newsList = await ctx.service.news.list(page);

       return newsList.map(res => res.data);
    }
}

module.exports = NewsService;