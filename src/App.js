import { Component } from 'react';
import { connect } from 'react-redux';
import Header from './modules/header/index';
import './App.scss';

class App extends Component {
  deleteString(idx) {
    this.props.delete(idx);
  }

  render() {
    const { list } = this.props;
    const spans = [];
    let i = 0;
    for(const e of list) {
      let idx = i;
      spans.push(
        <>
          <span key={idx}>{e}</span>
          <button onClick={() => { this.deleteString(idx) }} >delete me!</button>
          <br/>
        </>
      )
      ++i;
    }
    return <div>
      <Header/>
    </div>;
  }
}

const mapStoreStateToComponentProps = (state) => {
  return {
    list: state.tempReducer.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (idx) => { dispatch({type: 'delete', idx }); }
  };
}

export default connect(mapStoreStateToComponentProps, mapDispatchToProps)(App);
