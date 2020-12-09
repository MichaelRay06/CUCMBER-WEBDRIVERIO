
import elements from '../utilities/Elements';

class UserNamePage{


  get usernameField () {return $('#ap_email')}
  get continueLink () {return $('#continue')}
  



  getUserNameField(username){
  //  await this.usernameField.setValue(username)
    elements.doSetValue(this.usernameField, username)

}

 getContinueLink() { 
 //await this.#continueLink.click();
  elements.doClick( this.continueLink)


    }



}
export default new UserNamePage();
//module.exports= new UserNamePage();
//exports.UserNamePage= UserNamePage;
