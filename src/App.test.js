import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import App from './App';
 
describe('App Component', () => {
  // it('has an div tag', () => {
  //   const component = ReactTestUtils.renderIntoDocument(<App/>);    
  //   var div = ReactTestUtils.findRenderedDOMComponentWithTag(
  //     component, 'div'
  //   );
  // });
  
  it('is wrapped inside a title class', () => {
    const component = ReactTestUtils.renderIntoDocument(<App/>);    
    var className = ReactTestUtils.findRenderedDOMComponentWithClass(
      component, 'App'
    );
  })

})
