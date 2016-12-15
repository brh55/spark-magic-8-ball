const expect = require('chai').expect;

describe('Util Test', function Test() {
    it('Should ensure keys are defined', (done) => {
        const defConfig = {
            foo: 'bar'
        };

        const undefConfig = {
            foo: undefined
        };

        expect(() => utils.checkUndefined(defined)).to.not.throw;
        expect(() => utils.checkUndefined(undefConfig)).to.throw;
        done();
    });
});
