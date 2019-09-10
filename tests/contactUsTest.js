let contactUs_Page = require("./pageObjects/ContactUsPage.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
	function setFirstName(firstName) {
		return contactUs_Page.firstName.setValue(firstName);
	}

	function setLastName(lastName) {
		return contactUs_Page.lastName.setValue(lastName);
	}

	function setEmailAddress(emailAddress) {
		return contactUs_Page.emailAddress.setValue(emailAddress);
	}

	function setComments(comments) {
		return contactUs_Page.comments.setValue(comments);
	}

	function clickSubmitButton() {
		return contactUs_Page.submitButton.click();
	}

	function confirmSuccessfulSubmission() {
		var validateSubmissionHeader = browser.waitUntil(function() {
			return contactUs_Page.successfulSubmissionSelector.getText() == 'Thank You for your Message!'
		}, 3000)
		expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
	}

	function confirmUnsuccessfulSubmission() {
		var validateSubmissionHeader = browser.waitUntil(function() {
			return contactUs_Page.unsuccessfulSubmissionSelector.getText() == 'Error: all fields are required'
		}, 3000)
		expect(contactUs_Page.unsuccessfulSubmissionSelector.getText()).to.include('Error: all fields are required');
	}



// contactusDetails.forEach(function (contactDetail) {
  it('Should be able to submit a successful submission via contact us form', function(done) {
  	setFirstName('joe');
  	setLastName('Blogs');
  	setEmailAddress('joe_blogs@email.com');
  	setComments('this is a great day to learn coding');
  	clickSubmitButton();
  	confirmSuccessfulSubmission();
   	});
//    }); 


  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	setFirstName('Mike');
  	setLastName('Woods');
  	setEmailAddress('mike_woods@mail.com');
  	clickSubmitButton();
  	confirmUnsuccessfulSubmission();
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	setFirstName('Sarah');
  	setEmailAddress('sarah_woods@mail.com');
  	clickSubmitButton();
  	confirmUnsuccessfulSubmission();
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	setLastName('Jomes');
  	setEmailAddress('sarah_Jomes@mail.com');
  	clickSubmitButton();
  	confirmUnsuccessfulSubmission();
    });
});