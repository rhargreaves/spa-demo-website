const Browser = require('zombie');
const expect = require('chai').expect;

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('example.com', 3000);

describe('Given I have my browser open', function() {
  const browser = new Browser();

  describe('When I navigate to the home page', function() {
    this.timeout(15000);

    before(function(done) {
      browser.visit('/', done);
    });

    it('I should see welcome text', function() {
      browser.assert.text('#tagline-container', "Aren't these little fluffy clouds pretty?");
    });

    it('I should see a counter on the page', function() {
      browser.assert.text('#counter', function(actual) {
        return actual.indexOf("raindrops") > -1
      });
    });
  });
});
