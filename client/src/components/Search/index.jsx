import React, {Component} from 'react';
import './style.css';
import {withRouter} from "react-router";


class Search extends Component {
  navigate(e) {
    e.preventDefault();
    this.props.history.push("/search?keyword=" + this.state.search);
  }

  render() {
    return (
        <form className="form-inline my-2 my-lg-0 mr-3" onSubmit={e => this.navigate(e)}>
            <div className="input-group">
                <input id="headerSearch" type="text" className="form-control" placeholder="Search"
                       onInput={e => this.setState({search: e.target.value})} maxLength={32}/>
                <div className="input-group-append">
                    <button className="btn" type="submit" style={{backgroundColor: '#347d4d'}}>
                        <i className="fa fa-search text-white"/>
                    </button>
                </div>
            </div>
        </form>
    )
  }
}

export default withRouter(Search);
