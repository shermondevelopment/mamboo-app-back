/** supertest */
import supertest from 'supertest'

/** app */
import app from '../../app/setting/app'

/** connect db */
import connect from '../../app/db/connect'

/** factory */
import { createListFactory } from '../factories/listFactory'

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
})
