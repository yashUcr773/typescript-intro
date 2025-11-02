import express, { type Request, type Response } from 'express'

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.get('/hello', (req: Request, res: Response) => {
      res.send('Hello')
    })

    this.app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  }
}

new Server().startServer()
