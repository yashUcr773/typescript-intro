import express, { type Request, type Response } from 'express'
import employeesRouter from './api/employees/employee.route.js'
const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.get('/hello', (req: Request, res: Response) => {
      res.send('Hello')
    })

    this.app.use('/api/employees', employeesRouter)

    this.app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  }
}

new Server().startServer()
