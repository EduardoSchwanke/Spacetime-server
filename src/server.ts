import Fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'

const app = Fastify({
  logger: true,
})

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app.listen({ port: 3333 }, () => {
  return console.log('HTTP server is running on http://localhost:3333')
})

//01:18:00