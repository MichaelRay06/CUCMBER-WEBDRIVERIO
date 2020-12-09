import { Given, When, Then } from 'cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import basePage from '../pageobjects/BasePage';


Given(/^I am on the login page$/, async() => {
   
    await basePage.open('https://the-internet.herokuapp.com/login');
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

