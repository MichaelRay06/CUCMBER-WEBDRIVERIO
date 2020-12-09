
import elements from '../utilities/Elements';


class HomePage {

   get  singInLink () {return $("#nav-link-accountList [class='nav-line-1']")}
   get  singClick () {return $('#nav-link-accountList')}
   get  searchBox () {return $('#twotabsearchtextbox')}
   get goSerchButton () {return $('#nav-search-submit-text > input')}
    

 
   getSingInLink(){
 elements.doActionsMoveToElement(this.singInLink);
 //this.singInLink.moveTo();
 
}

 clickToSinIn(){
 elements.doClick(this.singClick);

}

 getMenuSearchBox(searchProduct){
  elements.doSetValue(this.searchBox , searchProduct)
  elements.doClick(this.goSerchButton)
  
    // browser.Keys("ArrowDown")
     // browser.Keys("Enter")
  
}

}
export default new HomePage();
 