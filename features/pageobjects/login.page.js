import Page from './page';
import Elements from '../utilities/Elements';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
       // Elements.doSetValue(this.inputUsername , username);
       // Elements.doSetValue(this.inputPassword, password);
       // Elements.doClick(this.btnSubmit); 
       browser.waitAndSetTextValue('#username', username)
       browser.waitAndSetTextValue('#password', password)
       browser.waitAndClick('button[type="submit"]')
   
    }
}

export default new LoginPage();
