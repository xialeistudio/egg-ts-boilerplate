import Demo from './demo';

declare module 'egg' {
  export interface IService {
    demo: Demo;
  }
}
