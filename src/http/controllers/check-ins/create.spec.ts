import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createNadAuthenticateUser } from '@/services/utils/test/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Create Check-in (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create check-in', async () => {
    const { token } = await createNadAuthenticateUser(app)

    const { id } = await prisma.gym.create({
      data: {
        title: 'test',
        latitude: -27.2092052,
        longitude: -49.6401091,
      },
    })

    const response = await request(app.server)
      .post(`/gyms/${id}/check-ins`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'test',
        description: 'test',
        phone: '51999999999',
        latitude: -27.2092052,
        longitude: -49.6401091,
      })

    expect(response.statusCode).toEqual(201)
  })
})
