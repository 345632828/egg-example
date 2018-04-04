'use strict';

const Controller = require('egg').Controller;

class hc extends Controller {
  async index() {
    this.ctx.body = 'hi, egg show';
  }
}

module.exports = hc;
