
import elements from '../utilities/Elements'

class  BasketValuePage {

    get  basketTotal () {return $('#nav-cart-count')}
    get  priceTotal  () {return $('#hlb-subcart .a-color-price')}


    async getBasketTotal() {
      return  elements.doGetText(this.basketTotal)

    }

    async getPriceTotal() { 
       return  elements.doGetText(this.priceTotal)
    }
}
export default new BasketValuePage();
