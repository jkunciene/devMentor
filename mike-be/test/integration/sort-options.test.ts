import httpStatus from 'http-status';
import supertest from 'supertest';

import app from '../../src/app';

import { getSortOptions } from '../../src/services/sort-option.service';

const expectedResponse =  getSortOptions() ;

describe('Sort Options', () => {
  const request = supertest(app);

  describe('GET /sort-options', () => {
    it('should return sort options json', (done) => {
      request
        .get('/sort-options')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).toEqual(expectedResponse);
          done();
        })
        .catch(done);
    });
  });
});
