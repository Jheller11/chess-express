const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect
chai.use(chaiHttp)

const newUser = {
  username: 'testuser1',
  password: 'testpassword1',
  confirmPassword: 'testpassword1',
  _id: ''
}

describe('Users Controller', () => {
  it('should respond with status 200 at signup', done => {
    chai
      .request(app)
      .get('/users/signup')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })
  it('should respond with status 200 at login', done => {
    chai
      .request(app)
      .get('/users/login')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })
  it('should accept new user registration', done => {
    chai
      .request(app)
      .post('/users/signup')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send(newUser)
      .end((err, res) => {
        expect(res.req.path).to.equal('/users/profile')
        done()
      })
  })
  //   it('should delete a user', done => {
  //     chai
  //       .request(app)
  //       .delete('/users/signup')
  //       .set('content-type', 'application/x-www-form-urlencoded')
  //       .send(newUser)
  //       .end((err, res) => {
  //         console.log(res)
  //         expect(res.redirects).to.equal(
  //           "[ 'http://127.0.0.1:56165/users/profile' ]"
  //         )
  //         done()
  //       })
  //   })
})
