import React from 'react';
// import { connect } from 'react-redux';
import { Header } from './modules/header/index';
import './App.scss';
import { Card } from './modules/common/card';
import { Menu } from './modules/common/menu';
import { Button } from './modules/common/button';

export default class App extends React.Component {
  // deleteString(idx) {
  //   this.props.delete(idx);
  // }

  render () {
    // const { list } = this.props;
    // const spans = [];
    // let i = 0;
    // for(const e of list) {
      // let idx = i;
      // spans.push(
        // <>
          // <span key={idx}>{e}</span>
          // <button onClick={() => { this.deleteString(idx) }} >delete me!</button>
          // <br/>
        // </>
      // )
      // ++i;
    // }
    return <div>
      <Header/>
      <Card></Card>
      <Menu menuItems={[{ label: 'lorem', value: 1 }, { label: 'lorem ipsum', value: 2 }, { label: 'ipsum dolor', value: 3 }, { label: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet', value: 4 }]} selectionChanged={console.log}>
        <Button variant="contained">menu</Button>
      </Menu>
    </div>;
  }
}

// const mapStoreStateToComponentProps = (state) => {
//   return {
//     list: state.tempReducer.list
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     delete: (idx) => { dispatch({type: 'delete', idx }); }
//   };
// }

// export default connect(mapStoreStateToComponentProps, mapDispatchToProps)(App);
