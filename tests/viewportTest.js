beforeEach(function() {
	browser.url("Hidden-Elements/index.html");
})

describe('Test whether specific elements are visible within viewport', function() {

	it('should resize the current viewport', function () {
		  browser.setViewportSize({
				width: 1200,
				height: 800
			})
			browser.pause(2000);
		});

	it('should detect if an element is visible', function () {
    let isVisibleWithinViewport = browser.isVisibleWithinViewport("#not-displayed");
    console.log(isVisibleWithinViewport); // false

    let isVisibleWithinViewport = browser.isVisibleWithinViewport("#visibility-hidden");
    console.log(isVisibleWithinViewport); // false

    let isVisibleWithinViewport = browser.isVisibleWithinViewport("#zero-opacity");
    console.log(isVisibleWithinViewport); // false

    let isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
    console.log(isVisibleWithinViewport); // true
	});
});