describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		})
		browser.url('/'); //base url
		let title = browser.getTitle();
		expect(title).to.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);
		browser.debug();

		browser.click("#contact-us");
		let tabIds = browser.getTabIds();
		console.log(tabIds);
		browser.switchTab(tabIds[1]);
		browser.pause(3000);
		browser.close();
	});

	it("check that the login button opens the login portal page", function(done) {
		browser.url('/'); // base url
		let title = browser.getTitle();
		title.should.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);

		browser.click('#login-portal');
		browser.pause(3000);
	});
});
