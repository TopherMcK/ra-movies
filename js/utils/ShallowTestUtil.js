import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

export default class ShallowTestUtil {
    constructor(){}

    prepTest() {
        configure({ adapter: new Adapter() });
    }
}