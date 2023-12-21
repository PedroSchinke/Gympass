import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createNadAuthenticateUser } from '@/services/utils/test/create-and-authenticate-user'

describe('Nearby Gyms (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to list nearby gym', async () => {
    const { token } = await createNadAuthenticateUser(app, true)

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'test',
        description: 'test',
        phone: '51999999999',
        latitude: -30.0453749,
        longitude: -51.1655609,
      })

    await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'test1 gym',
        description: 'test1',
        phone: '51999999999',
        latitude: -29.1684595,
        longitude: -51.1791635,
      })

    const response = await request(app.server)
      .get('/gyms/nearby')
      .query({
        latitude: -29.1684595,
        longitude: -51.1791635,
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'test1 gym',
        description: 'test1',
        phone: '51999999999',
        latitude: '-29.1684595',
        longitude: '-51.1791635',
      }),
    ])
  })
})
