import { expect, describe, it, beforeEach, vi, afterEach } from 'vitest'
import { SearchGymsService } from './search-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsService

describe('Search Gyms Service', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsService(gymsRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'testgym1',
      description: null,
      phone: null,
      latitude: -30.0453749,
      longitude: -51.1655609,
    })

    await gymsRepository.create({
      title: 'testgym2',
      description: null,
      phone: null,
      latitude: -30.0453749,
      longitude: -51.1655609,
    })

    const { gyms } = await sut.execute({
      query: 'testgym1',
      page: 1,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'testgym1' })])
  })

  it('should be able to fetch paginated gyms search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `testgym ${i}`,
        description: null,
        phone: null,
        latitude: -30.0453749,
        longitude: -51.1655609,
      })
    }

    const { gyms } = await sut.execute({
      query: 'testgym',
      page: 2,
    })

    expect(gyms).toHaveLength(2)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'testgym 21' }),
      expect.objectContaining({ title: 'testgym 22' }),
    ])
  })
})
