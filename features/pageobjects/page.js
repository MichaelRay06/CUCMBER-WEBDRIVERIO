/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
 
   // open (path) {
       // return browser.url(`https://the-internet.herokuapp.com/${path}`)

  async open (path) {
       // return browser.url(`https://the-internet.herokuapp.com/${path}`)
       browser.maximizeWindow();
       //browser.fullscreenWindow();
       browser.setTimeouts( 500, 40000, 120000);
       return browser.url(path)
    }
}

    

