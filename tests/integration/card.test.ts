/** supertest */
import supertest from 'supertest'

/** app */
import app from '../../app/setting/app'

/** connect db */
import connect from '../../app/db/connect'

/** factory */
import { createListFactory } from '../factories/listFactory'

/** uuid */
import { v4 } from 'uuid'

describe('Card Test', () => {
  beforeAll(async () => {
    await connect
  })

  it('Should call router add new card with params correct and receive status 201', async () => {
    const createList = await createListFactory()
    const response = await supertest(app).post('/card').send({
      content: 'content@mock',
      list_id: createList._id
    })
    expect(response.statusCode).toBe(201)
  })

  it('Should call router add new card with content empty and receive status 422', async () => {
    const response = await supertest(app).post('/card').send({
      content: '',
      list_id: v4()
    })
    expect(response.statusCode).toBe(422)
    expect(response.body).toEqual({ error: 'please enter a content' })
  })

  it('Should call router add new card with uuid invalid and receive status 422', async () => {
    const response = await supertest(app).post('/card').send({
      content: 'mock@card',
      list_id: 'invalid@uuid'
    })
    expect(response.statusCode).toBe(422)
    expect(response.body).toEqual({ error: 'enter a valid uuid' })
  })
  it('Should call router add new card with list that does not exist and receive status 422', async () => {
    const response = await supertest(app).post('/card').send({
      content: 'mock@card',
      list_id: v4()
    })
    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual({ error: 'list not exist' })
  })
})
