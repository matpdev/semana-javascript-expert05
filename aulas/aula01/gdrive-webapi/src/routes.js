import { logger } from "./logger.js";

export default class Routes {
   io
   constructor() {

   }

   setSocketIstance(io){
      this.io = io;
   }

   async defaultRoute(request, response) {
      response.end('Hello World')
   }

   async options(request, response) {
      response.writeHead(204)
      response.end('Hello World')
   }

   async post(request, response) {
      logger.info('post')
      response.end()
   }

   async get(request, response) {
      logger.info('get')
      response.end()
   }

   handler(request, response) {
      response.setHeader('Access-Control-Allow-Origin', 'e')
      const chosen = this[request.method.toLowerCase()] || this.defaultRoute
      return chosen.apply(this, [request, response]);
   }
}