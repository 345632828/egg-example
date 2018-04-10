const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息

        const result = await this.app.mysql.insert('runoob_tbl', {
            runoob_title: 'Hello World',
            runoob_author: '王五',
            submission_date: new Date(new Date().getTime() + 28800000)
        });

       

        const user = await this.app.mysql.get('runoob_tbl');
       
        return {
            user
        };
    }
}

module.exports = UserService;