// src/server.js
import { Server } from "miragejs"
import {data} from './data.js'
export default function makeServer({ environment = "test" } = {}) {
  let server = new Server({


    
    

    routes() {
      this.namespace = "api"

      this.get("/users", () => {
        return data
      })

      this.post("/add", (schema,req) => {
        const requestdata=JSON.parse(req.requestBody)
        data.push(requestdata)
return data
      })


      
    },
  })

  return server
}