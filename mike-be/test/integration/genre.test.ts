import app from '../../src/app';
import axios from 'axios';
import httpStatus from 'http-status';
import supertest from 'supertest';
import {
    expected_Response_success,
    getBadResponse,
    mockedTMDBResponse
} from '../data/movies.integration.data';
jest.mock('axios');
const mockedAxios = axios.get as jest.Mock;

describe('movies API', () => {
    const request = supertest(app);
    mockedAxios.mockResolvedValueOnce({ data: mockedTMDBResponse });
    it('should return movies and sort', (done) => {
        request
            .get('/movies?genres=16,27')
            .expect(httpStatus.OK)
            .then((res) => {
                expect(res.body).toEqual(expected_Response_success);
                done();
            })
            .catch(done);
    });
    it('should return movies and sort', (done) => {
        request
            .get('/movies?genres=16,,27')
            .expect(httpStatus.BAD_REQUEST)
            .then((res) => {
                expect(res.body).toEqual(getBadResponse("16,,27"));
                done();
            })
            .catch(done);
    });
    it('should return movies and sort', (done) => {
        request
            .get('/movies?genres=16,27%')
            .expect(httpStatus.BAD_REQUEST)
            .then((res) => {
                expect(res.body).toEqual(getBadResponse("16,27%"));
                done();
            })
            .catch(done);
    });
    it('should return movies and sort', (done) => {
        request
            .get('/movies?genres=')
            .expect(httpStatus.BAD_REQUEST)
            .then((res) => {
                expect(res.body).toEqual(getBadResponse(''));
                done();
            })
            .catch(done);
    });

});

