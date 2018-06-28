import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { importanceFilter } from '../../actions/filters';
import './Filter.css';

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
      { value: 'all', label: 'Все' },
      { value: 'regular', label: 'Обычные' },
      { value: 'important', label: 'Важные' },
      { value: 'highly_important', label: 'Очень важные' }
    ];
    return (
      <form className="form_container radio">
        <p>Показать:</p>
        {fields.map(field => {
          let val = field.value;
          let label = field.label;
          return (
            <Fragment key={val}>
              <label>{label}</label>
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
