// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

/* eslint-disable no-unused-expressions */

const Current = require('./current');

function initProvider () {
  return new Current({
    sendAsync: (payload, callback) => {
      callback('error', payload); // eslint-disable-line
    }
  });
}

describe('api/provider/Current', () => {
  describe('send', () => {
    it('calls the sendAsync on the wrapped provider', (done) => {
      initProvider().send('method', ['params'], (error, payload) => {
        expect(error).to.equal('error');
        console.log(payload);
        expect(payload).to.deep.equal({
          id: 1,
          jsonrpc: '2.0',
          method: 'method',
          params: ['params']
        });
        done();
      });
    });
  });
});
