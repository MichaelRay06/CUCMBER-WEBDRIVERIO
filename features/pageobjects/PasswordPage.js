
import elements from '../utilities/Elements';
class PasswordPage{


    get passwordField () {return $('#ap_password')};
     get singInLink () {return $('#signInSubmit')};
  

    async getPasswordFiels(password){
        elements.doSetValue(this.passwordField , password)
   // await  this.#passwordField.setValue(password)

    }

}
export default new PasswordPage();

//exports.PasswordPage=PasswordPage;
