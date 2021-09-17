import { 
   describe,
   test,
   expect
} from '@jest/globals'

import Routes from './../../src/routes.js'

describe('#Routes suite test', () => {
   
   describe('#setSocketInstance', () => {
      test('setSocket should store io instance', () => {
         const routes = new Routes()
         const ioObj = {
            to: (id) => ioObj,
            emit: (event, message) => {}
         }

         routes.setSocketIstance(ioObj)
         expect(routes.io).toStrictEqual(ioObj)
      })
   })
   
   describe('#handler', () => {
      test.todo('given an inexistent rout it should choose default route')
      test.todo('it should set any request with CORS enable')
      test.todo('given method OPTONS it should choose options routes')
      test.todo('given method POST it should choose options routes')
      test.todo('given method GET it should choose options routes')
   })
})