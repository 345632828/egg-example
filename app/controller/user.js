// app/controller/user.js
const Controller = require('egg').Controller;
class UserController extends Controller {
    async info() {
        const ctx = this.ctx;
        const userId = ctx.params.id;

        console.log('ctx.params:',ctx.params)
        console.log(`user: ${ctx.params.id}, ${ctx.params.name}`)
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }
}
module.exports = UserController;