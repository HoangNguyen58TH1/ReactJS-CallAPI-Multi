import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import Table from '../Table';
 
describe('Table Component', () => {
  it('has an div tag', () => {
    const component = ReactTestUtils.renderIntoDocument(<Table/>);    
    var divTag = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      component, 'div'
    );
    // console.log('--- component', component);
    // console.log('--- component', typeof component);
    // console.log('--- divTag', divTag);
    // console.log('--- divTag', typeof divTag);
  });
  
  // it('is wrapped inside a title class', () => {
  //   const component = ReactTestUtils.renderIntoDocument(<Table/>);    
  //   var className = ReactTestUtils.findRenderedDOMComponentWithClass(
  //     component, 'container'
  //   );
  // })

})

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Table from '../Table';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Table />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });