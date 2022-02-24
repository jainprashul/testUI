const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// Configure chai
chai.should();
chai.use(chaiHttp);


describe('UI App', () => {
    describe('GET /', () => {
        it('should return index page', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });

        it('should return 404', (done) => {
            chai.request(server)
                .get('/404')
                .end((err, res) => {
                    res.should.have.status(404)
                });
            done();
        });
    });

    describe('POST /signup', () => {
        it('should return signup page', (done) => {
            chai.request(server)
                .post('/signup')
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });

        it('should return 404', (done) => {
            chai.request(server)
                .post('/signup/404')
                .end((err, res) => {
                    res.should.have.status(404)
                });
            done();
        });
    });
});

