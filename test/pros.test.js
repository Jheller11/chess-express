const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
chai.use(chaiHttp)

describe('Pros Router', () => {
  it('should respond with status 200', done => {
    chai
      .request(app)
      .get('/pros')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })
  it('should respond with dummy data', done => {
    chai
      .request(app)
      .get('/pros')
      .end((err, res) => {
        expect(res.text.includes('Test One')).to.equal(true)
        done()
      })
  })
  //   it('should show an individual player', done => {
  //     chai
  //       .request(app)
  //       .get('/pros')
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200)
  //         done()
  //       })
  //   })
})
