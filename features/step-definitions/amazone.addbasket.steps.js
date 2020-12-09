


import { Given, Then, When } from 'cucumber';


import thisBasePage from '../pageobjects/BasePage';
import thisProductDisplayedPage from '../pageobjects/ProductDisplayedPage';
import thisAddToBasketPage from '../pageobjects/AddToBasketPage'
import thisBasketValuePage from '../pageobjects/BasketValuePage'




    When (/^the search results was displayed click on$/, ()=> {
        thisProductDisplayedPage.selectProduct();

    });

    Then(/^I add iceworks product to my basket$/, ()=> {
        thisAddToBasketPage.getAddToBasketLink();

    })
    When(/^I check my basket total$/, ()=>{
        var totalItemsExpected = thisBasketValuePage.getBasketTotal();
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + totalItemsExpected)

    });
    Then(/^it should match the price of the item added into basket$/, ()=>{
        var totalPriceExpected =  thisBasketValuePage.getPriceTotal();
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + totalPriceExpected)
        
    })