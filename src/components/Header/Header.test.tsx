import { shallow, ShallowWrapper } from 'enzyme'
import Header from './Header'
import Enzyme from 'enzyme'
import toJson from "enzyme-to-json";
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

let wrapper: ShallowWrapper

beforeEach(() => {
    wrapper = shallow(<Header />)
})

describe('Header', () => {
    it('should render correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('should be a div', () => {
        expect(wrapper.type()).toBe('div')
    })
    it('should have a classname of header', () => {
        expect(wrapper.prop('className')).toBe('header')
    })
    it('should have a div as firstchild', () => {
        expect(wrapper.childAt(0).type()).toBe('div')
    })
    it('the firstchild have the class logo', () => {
        expect(wrapper.childAt(0).prop('className')).toBe('logo')
    })
    it('have a h1 as child', () => {
        const firstChild = wrapper.childAt(0)
        expect(firstChild.childAt(0).type()).toBe('h1')
    })
    it('should display the name of the entreprise', () => {
        
    })

})