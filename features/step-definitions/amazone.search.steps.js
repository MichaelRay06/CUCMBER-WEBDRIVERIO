
import { Given, Then, When } from 'cucumber';


import thisBasePage from '../pageobjects/BasePage';
import thisProductDisplayedPage from '../pageobjects/ProductDisplayedPage';
import thisHomePage from '../pageobjects/HomePage';



Given(/^I am on amazone site$/, () => {

    thisBasePage.open('https://www.amazon.co.uk/')
});

When(/^I handle cookies visibility$/,()=>{
    thisProductDisplayedPage.handleCookies()
    try{

    }catch(error){
        throw new Error (`no cookies is displayed`)
    }

})

When(/^I search for "([^"]*)"$/, (searchProduct)=>{
    thisHomePage.getMenuSearchBox(searchProduct)

})

When(/^the search results are displayed$/, () =>{
    expect(thisProductDisplayedPage.productDisplayed).toBeDisplayed();

})
/* 
Then(/^the search results has the "([^"]*)" in it$/,(expectedSearchProduct)=>{

    var actualSearchProduct =  thisProductDisplayedPage.searchProduct();
    expect(actualSearchProduct).toHaveTextContaining(expectedSearchProduct);
}) */