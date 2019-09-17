var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async() => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {
  it('Test1: Should be able to submit a successful submission via contact us form', () => {
	ContactUs_Page.submitAllInfoViaContactUSForm('joe', 'Blogs', 'joe_blogs123@outlook.com', 'this is a great day to learn coding')
	});

  it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
  	ContactUs_Page.setLastName('Tom');
  	ContactUs_Page.setEmailAddress('tom_Jomes@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });
});