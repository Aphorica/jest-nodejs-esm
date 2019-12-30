import app from '../app.js'
import supertest from 'supertest'

const request = supertest(app)

describe('basic tests', () => {
  test('get test', async done => {
    const rsp = await request.get('/testme')

    expect(rsp.status).toBe(200)
    expect(rsp.text).toBe("I'm here!!")
    done()
  })
})
