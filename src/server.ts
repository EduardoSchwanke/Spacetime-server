import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = Fastify({
  logger: true,
})
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app.listen({ port: 3333 }, () => {
  return console.log('HTTP server is running on http://localhost:3333')
})
