/** supertest */
import supertest from 'supertest'

/** app */
import app from '../../app/setting/app'

/** connect with db */
import connect from '../../app/db/connect'

describe('List', () => {
  beforeAll(async () => {
    await connect
  })

  afterAll(async () => {
    await (await connect).deleteModel('list')
    await (await connect).disconnect()
  })

  it('Should call router /new/list with parameters correct and receive status  201', async () => {
    const response = await supertest(app).post('/new/list').send({
      title: 'mockList'
    })
    expect(response.statusCode).toBe(201)
  })
})
