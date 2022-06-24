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
        expect(wrapper.childAt(0).text()).toBe('Du regard à la manucure')
    })
    it('should have a ul as second child', () => {
        expect(wrapper.childAt(1).type()).toBe('ul')
    })
    it('the second child should have the class of menu', () => {
        expect(wrapper.childAt(1).prop('className')).toBe('menu')
    })
    it('should have 4 road as child', () => {
        expect(wrapper.childAt(1).children()).toHaveLength(4)
    })
    it('should have a Home Road', () => {
        const firstRoad = wrapper.childAt(1).childAt(0)
        expect(firstRoad.prop("className")).toBe('link')
        expect(firstRoad.prop("to")).toBe('/home')
        expect(firstRoad.text()).toBe('Home')
    })
    it('should have a Services Road', () => {
        const firstRoad = wrapper.childAt(1).childAt(1)
        expect(firstRoad.prop("className")).toBe('link')
        expect(firstRoad.prop("to")).toBe('/services')
        expect(firstRoad.text()).toBe('Services')
    })
    it('should have a Contact Road', () => {
        const firstRoad = wrapper.childAt(1).childAt(2)
        expect(firstRoad.prop("className")).toBe('link')
        expect(firstRoad.prop("to")).toBe('/contact')
        expect(firstRoad.text()).toBe('Contact')
    })
    it('should have a Reservation Road', () => {
        const firstRoad = wrapper.childAt(1).childAt(3)
        expect(firstRoad.prop("className")).toBe('link')
        expect(firstRoad.prop("to")).toBe('/rendez-vous')
        expect(firstRoad.text()).toBe('Reservez')
    })
    

})