'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('ui-starter-kit', function () {
    it ('should have Hello World on its home page', function () {
        browser.get('/');


        var header = element(by.css('.core-header'));
        expect(header).to.not.be.undefined;
        expect(header.getText()).to.eventually.equal('Hello World');
    });
});
