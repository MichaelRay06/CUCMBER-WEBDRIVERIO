import elements from '../utilities/Elements';

class AddToBasketPage{

    get addBasketLink () {return $('#add-to-cart-button') }


    getAddToBasketLink() {
        
  // elements.doClick(this.addBasketLink)
   browser.waitAndClick('#add-to-cart-button')
    }
}
export default new AddToBasketPage();
//exports.AddToBasketPage= AddToBasketPage;