
import Page from './page';

class BasePage extends Page {



   async open (path) {
        return super.open(path);

    }

}
export default new BasePage();
