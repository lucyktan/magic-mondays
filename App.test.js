import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ScreenHome from './ScreenHome';
import { mount, shallow, configure } from "enzyme";
import ReactTestUtils from 'react-test-utils';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('mimics a touch event', () => {
    let rendered = shallow(<App/>);
    rendered.find('TouchableHighlight').forEach(child=> {
        child.simulate('press');
        expect(onPress.called).toEqual(true);
    })
});

it('after touch the screen has a checkbox', () => {
    let rendered = shallow(<App/>);
    rendered.find('TouchableHighlight').forEach(child=> {
        child.simulate('click');
    expect(rendered.find('checkbox')).toEqual(true);
    })
});

it('should render', () => {
    const renderedtree = renderer.create(<App />).toJSON();
    expect(renderedtree).toBeTruthy();
});
