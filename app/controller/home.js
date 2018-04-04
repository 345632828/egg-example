'use strict';

const Controller = require('egg').Controller;

class hc extends Controller {
  async index() {
    this.ctx.body = 'hi, egg hc';
  }
}

module.exports = hc;
