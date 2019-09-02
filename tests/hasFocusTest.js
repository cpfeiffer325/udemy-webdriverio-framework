describe('Test Checkboxes Buttons Page', function() {
  browser.url("Dropdown-Checkboxes-RadioButtons/index.html");

	it('Should be able to focus on checkbox button elements', function(done) {
    browser.setViewportSize({
      width: 1200,
      height: 800
    })
    browser.pause(2000);

    browser.click('#checkboxes label:nth-of-type(1)');
    let checkboxButtonOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
    console.log(`Checkbox 1 has a value of: ${checkboxButtonOne}`);
    expect(checkboxButtonOne, 'The checkbox (One) should have focus!').to.be.true;

    let checkboxButtonTwo = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
    console.log(`Checkbox 2 has a value of: ${checkboxButtonTwo}`);
    expect(checkboxButtonTwo, 'The checkbox (Three) should have focus!').to.be.false;
	});
});  