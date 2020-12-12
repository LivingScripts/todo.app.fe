import { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

class App extends Component {
  render() {
    const { list } = this.props;
    const spans = [];
    let i = 0;
    for(const e of list) {
      spans.push(<span key={i++}>{e}</span>)
    }
    return <div>
      {spans}
    </div>;
  }
}

const mapStoreStateToComponentProps = (state) => {
  return {
    list: state.tempReducer.list
  }
};

export default connect(mapStoreStateToComponentProps)(App);
