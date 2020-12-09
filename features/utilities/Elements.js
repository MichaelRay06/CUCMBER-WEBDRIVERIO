class Elements {


    doClick(element){
      
      try{
        
      element.waitForDisplayed(40000)
      element.click()

      }catch (error){
       throw new Error (`could not click on element: ${element}`)
      }
   }



  doSetValue(element, value){
       try{
        element.waitForDisplayed(40000)
        element.setValue(value)
        
      }catch (error){
       throw new Error (`could not set value:   :${value} using selector: ${element}`)
      }
   }
   

   doGetText(element){
       try{

        element.waitForDisplayed(40000)
        return element.getText()

      }catch (error){
       throw new Error (`could not get text using selector: ${element}`)
      }
    }
       
       

   doIsDisplayed(element){   
    try{

        element.waitForDisplayed(40000)
       return element.isDisplayed()

      }catch (error){
       throw new Error (`Element not displayed till  time out: ${element}`)
      }
    }



   doActionsMoveToElement(element){
  
  try{

    element.waitForDisplayed(40000);
    element.moveTo();

      }catch (error){
       throw new Error (`could not perform move element on: ${element}`)
      }
    }




 async   doGetPageTitle(pageTitle){
   
     browser.waitUntil( async function(){
           return (browser.getTitle() === pageTitle)
       }, 10000, 'title is not displayed after the given time'
   )
       return browser.getTitle()
   }



  async  waitForTextChange  (el, text, timeout) {
       browser.waitUntil(
         function () {
           return el.getText() === text;
         },
         { timeout }
       );
     };


     async  waitToGetText  (el, text, timeout) {
       browser.waitUntil(
         function () {
           if(el.getText() === text){
               return el.getText()
           }
         },
         { timeout }
       );
      
     };







}
export default new Elements();