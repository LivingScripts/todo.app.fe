import React from 'react';
// import { connect } from 'react-redux';
import { Header } from './modules/header/index';
import './App.scss';
import { Workspace } from './modules/workspace/';
import { Button, IconButton } from './modules/common/button';
import { Navbar } from './modules/navbar';

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
    return (
      <div className="home">
        <Navbar />
        <section className="p-4">
          <Workspace/>
        </section>
      </div>
    )
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
