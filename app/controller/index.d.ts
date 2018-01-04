import Home from './home';

declare module 'egg' {
  export interface IController {
    home: Home;
  }
}
