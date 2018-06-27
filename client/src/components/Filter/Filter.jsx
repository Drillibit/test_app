import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { importanceFilter } from '../../actions/filters';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      importance: 'all'
    };
  }

  handleInputChange = e => {
    const value = e.target.value;
    this.setState(() => ({
      importance: value
    }));
    this.props.dispatch(importanceFilter(value));
  };

  render() {
    const fields = [
      { value: 'all' },
      { value: 'regular' },
      { value: 'important' },
      { value: 'highly_important' }
    ];
    return (
      <form>
        <div className="">
          <p>Показать:</p>
          {fields.map(field => {
            let val = field.value;
            return (
              <Fragment key={val}>
                <label>{val}</label>
                <input
                  name="importance"
                  type="radio"
                  value={val}
                  checked={this.state.importance === val}
                  onChange={this.handleInputChange}
                />
              </Fragment>
            );
          })}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(Filter);
