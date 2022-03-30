import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleChildrensShow = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const isOpen = this.state.isOpen;

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button
            className="expand__toggle-btn"
            onClick={this.toggleChildrensShow}
          >
            <i
              className="fas fa-chevron-up"
              style={{ transform: !isOpen && 'rotate(180deg)' }}
            ></i>
          </button>
        </div>
        <div className="expand__content">{isOpen && this.props.children}</div>
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Expand.defaultProps = {
  title: '',
};

export default Expand;
