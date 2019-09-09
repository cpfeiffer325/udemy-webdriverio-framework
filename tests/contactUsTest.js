let request = require('sync-request');

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
	let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
	let contactusDetails = JSON.parse(res.getBody().toString('utf8'));

	let firstNameSelector = "[name='first_name']";
	let lastNameSelector = "[name='last_name']";
	let emailSelector = "[name='email']";
	let commentsSelector = "[name='textarea']";
	let successfulSubmissionSelector = "#contact_reply h1";
	let unsuccessfulSubmissionSelector = "body";
	let submitButtonSelector = "[type='submit']"
	
contactusDetails.forEach(function (contactDetail) {
  it('Should be able to submit a successful submission via contact us form', function(done) {
  	browser.submitDataViaContactUsForm('joe', 'Blogs', contactDetail.email, contactDetail.body);

  	let successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.true;

  	let successfulSubmission = browser.getText('#contact_reply h1');
  	expect(successfulSubmission).to.equal('Thank You for your Message!');
  		})
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	browser.setValue("[name='first_name']",'Mike');
  	browser.setValue("[name='last_name']",'Woods');
  	browser.setValue("[name='email']", 'mike_woods@mail.com');
  	browser.click("[type='submit']");

  	let successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	browser.setValue("[name='first_name']",'Sarah');
  	browser.setValue("[name='email']", 'sarah_woods@mail.com');
  	browser.click("[type='submit']");

	let successfulContactConfirmation = browser.isExisting('#contact_reply h1');
  	expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	browser.setValue("[name='first_name']",'Jim');
  	browser.setValue("[name='last_name']",'Jomes');
  	browser.click("[type='submit']");

  	let errorText = browser.getText('body');
  	expect(errorText).to.include('Error: all fields are required');

  	errorText = browser.isVisible('body');
  	expect(errorText, 'Error message is not visible').to.be.true;
    });
});