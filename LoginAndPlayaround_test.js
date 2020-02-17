Feature('LoginNavigate');

Scenario('Login to Demo site', (I) => {
    I.amOnPage('/Login.html')
    I.fillField('UserName', 'admin')
    I.fillField('Password', 'password')
    I.click("//input[@type='submit']")

    I.waitForElement({xpath: "//input[@name='Initial']"})

    I.saveScreenshot('loggedIn.jpg')
    
    I.selectOption({css:'#TitleId'}, 'Mr.')

    I.saveScreenshot('selectOption.jpg')
    I.seeNumberOfElements()

    I.checkOption('Hindi')
    I.fillField('FirstName', 'Julian')
});
