
const {Given,When,Then} =require ('cucumber')

/* var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should(); */


import thisBasePage from '../pageobjects/BasePage';
import thisHomePage  from '../pageobjects/HomePage';
import  thisUserName from '../pageobjects/UserNamePage';
import  thisPaswordPage from '../pageobjects/PasswordPage'; 

      Given(/^I am on amazone site$/, async () =>{

     thisBasePage.open ('https://www.amazon.co.uk/')
          });
 

 
           When(/^I mouse over on the sing in link$/,  ()=> {
         thisHomePage.getSingInLink();

          }); 
 
          When(/^click log in buton$/, ()=> {
           thisHomePage.clickToSinIn();
          });
 
 
          When(/^enter "([^"]*)" as user name$/,  (username)=> {
           thisUserName.getUserNameField(username);
   
            
          });
 
  
          When(/^click to continue$/, () => {
           thisUserName.getContinueLink();
          });
 
 
 
          When(/^enter "([^"]*)" as my password$/, (password)=>{
           thisPaswordPage.getPasswordFiels(password);
          });
 
 
          Then(/^the sing button should be displayed.$/, async ()=>{
          expect(await thisPaswordPage.singInLink).toBeVisible()
          });