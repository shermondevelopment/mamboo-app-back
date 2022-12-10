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

  it('Should call router /new/list with title empty and receive status 422', async () => {
    const response = await supertest(app).post('/new/list').send({
      title: ''
    })
    expect(response.statusCode).toBe(422)
  })
  it('Should call router /new/list not providing property title and receive status 422', async () => {
    const response = await supertest(app).post('/new/list').send({
      title: ''
    })
    expect(response.statusCode).toBe(422)
  })
  it('Should call router /new/list with title other than a string and receive status 422', async () => {
    const response = await supertest(app).post('/new/list').send({
      title: 1
    })
    expect(response.statusCode).toBe(422)
    expect(response.body).toEqual({ error: 'title must be a string' })
  })
})
