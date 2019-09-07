let request = require('sync-request');

browser.addCommand("submitDataVioContactUsForm", function (firstName, lastName, email, comments) {
  if(firstName) {
    browser.setValue("[name='first_name']", firstName);
  }
  if(lastName) {
    browser.setValue("[name='last_name']", lastName);
  }
  if(email) {
    browser.setValue("[name='email']", email);
  }
  if(comments) {
    browser.setValue("[name='message']", comments);
  }
  browser.click("[type='submit']");
})

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
  let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');

  let contactusDetails = JSON.parse(res.getBody().toString('utf8'));
  
  beforeEach(function() {
    console.log('we are inside the describe function');
  })

contactusDetails.forEach(function (contactDetail) {
  it('Should be able to submit a successful submission via contact us form', function(done) {
    browser.setValue("[name='first_name']", 'Joe');
    browser.setValue("[name='last_name']", 'Blogs');
    browser.setValue("[name='email']", contactDetail.email);
    browser.setValue("[name='message']", contactDetail.body);
    browser.click("[type='submit']");

    let successfulContactConfirmation = browser.isExisting('#contact_reply h1');
    expect(successfulContactConfirmation, 'Succesful submission Message does not exist').to.be.true;

    let successfulSubmission = browser.getText('#contact_reply h1');
    expect(successfulSubmission).to.equal('Thank You for your Message!');
    })
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Mike');
    browser.setValue("[name='last_name']", 'Woods');
    browser.setValue("[name='email']", 'mike_woods@mail.com');
    browser.click("[type='submit']");

    let successfulContactConfirmation = browser.isExisting('#contact_reply h1');
    expect(successfulContactConfirmation, 'Succesful submission Message does not exist').to.be.false;
  });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Sarah');
    browser.setValue("[name='email']", 'sarah_woods@mail.com');
    browser.click("[type='submit']");

    let successfulContactConfirmation = browser.isExisting('#contact_reply h1');
    expect(successfulContactConfirmation, 'Succesful submission Message does not exist').to.be.false;
  });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']", 'Jimmy');
    browser.setValue("[name='last_name']", 'John');
    browser.click("[type='submit']");

    let errorText = browser.getText('body');
    expect(errorText).to.include('Error: all fields are required');

    errorText = browser.isVisible('body');
    expect(errorText, 'Error message is not visible').to.be.true;
  });
});