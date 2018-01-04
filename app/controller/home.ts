import { Controller } from 'egg';

export default class HomeController extends Controller {
  public index() {
    this.ctx.body = {
      name: this.app.name,
      version: this.app.version,
    };
  }
}
