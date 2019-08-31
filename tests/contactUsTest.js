beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
  it('Should be able to submit a successful submission via contact us form', function(done) {
    [name='first_name']
    [name='last_name']
    [name='email']
    [name='message']
    [type='submit']
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {

  });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {

  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {

  });
});