var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async() => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  it('Test1: Should be able to submit a successful submission via contact us form', function(done) {
	ContactUs_Page.submitAllInfoViaContactUSForm('joe', 'Blogs', 'joe_blogs123@outlook.com', 'this is a great day to learn coding')
	});

  it('Test4: Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setLastName('Tom');
  	ContactUs_Page.setEmailAddress('tom_Jomes@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });
});