'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
    async index() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        const dataList = {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
            ]
        };
        await this.ctx.render('index/show.html');

    }
    async data() {
        const { ctx } = this;
        // ctx.body = 'hi, egg';
        const name = 'success';
        const msg = 'hello world!';
        ctx.body = {
            result:true,
            name:name,
            msg:msg
        }

    }
}

module.exports = IndexController;
