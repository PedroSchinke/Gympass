import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createNadAuthenticateUser } from '@/services/utils/test/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Check-in History (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get check-in history', async () => {
    const { token } = await createNadAuthenticateUser(app)

    const user = await prisma.user.findFirstOrThrow()

    const { id } = await prisma.gym.create({
      data: {
        title: 'test',
        latitude: -27.2092052,
        longitude: -49.6401091,
      },
    })

    await prisma.checkIn.createMany({
      data: [
        {
          gym_id: id,
          user_id: user.id,
        },
        {
          gym_id: id,
          user_id: user.id,
        },
      ],
    })

    const response = await request(app.server)
      .get('/check-ins/history')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.checkIns).toEqual([
      expect.objectContaining({
        gym_id: id,
        user_id: user.id,
      }),
      expect.objectContaining({
        gym_id: id,
        user_id: user.id,
      }),
    ])
  })
})
