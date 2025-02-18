import {fastify} from 'fastify';  
import {fastifyCors} from '@fastify/cors'
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform
} from 'fastify-type-provider-zod'
import {z} from 'zod'
import {fastifySwagger} from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors,{
  origin: true,
})

app.register(fastifySwagger,{
  openapi: {
     info:{
      title: 'Nlw connect',
      version: '0.0.1'
     }
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi,{
  routePrefix: '/docs'
})

app.post('/subscriptions', {
schema: {
  body: z.object({
    name: z.string(),
    email: z.string().email()
  }),
  response:{
    201: z.object({
      name: z.string()
    })
  }
}
}, async (request, reply) =>{
  const { name, email} = request.body

  return reply.status(201).send({
    name
  })
})

app.get('/dev', () => {
  return "Dev"
})

app.listen({port: 3333}).then(() =>{
  console.log("server running")
})



