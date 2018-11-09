const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
chai.use(chaiHttp)

describe('App', () => {
  it('should respond with status 200', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })
})
