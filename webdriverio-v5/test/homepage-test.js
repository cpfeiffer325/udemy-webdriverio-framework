const assert = require('assert')

describe('Teste WEbdriverUni homepage', () => {
  it('Should load correct homepage title for webdriver uni', () => {
    browser.url('./')
    const title = browser.getTitle()
    assert.strictEqual(title, 'WebDriverUniversity.com')
  })
})

// comment out path: '/' in wdio config if there is an error on running server
