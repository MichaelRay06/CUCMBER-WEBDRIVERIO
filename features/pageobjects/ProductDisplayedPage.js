import elements from '../utilities/Elements'
class ProductDisplayedPage {

    get productDisplayed() { return $("[data-component-id='12'] h2 [dir]") }
    get productSearchDsp (){return $("(.//*[@class='sg-col-inner']//h2)[1]")};
    get waitInvisible() { return $('#sp-cc-accept') };
 
 
 
    displayedProduct() {
       elements.doIsDisplayed(this.productDisplayed);
 
 
    }
 
    searchProduct() {
       return elements.doGetText(this.productSearchDsp)
    }
 
    
    handleCookies(){
       elements.doClick(this.waitInvisible);
    }
 
 
    selectProduct() {
      // elements.doClick(this.productSearchDsp);
       browser.waitAndClick("(.//*[@class='sg-col-inner']//h2)[1]")
 
    }
 }
 export default new ProductDisplayedPage();
 //exports.ProductDisplayedPage = ProductDisplayedPage;
 