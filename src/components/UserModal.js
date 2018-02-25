import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserModal extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  };

  render() {
    if (this.props.isOpen === false) return null;
    const { users, onClose } = this.props;

    return (
      <div className={this.props.containerClassName}>
        <div className="chooserOpen">
          <div className="chooserHeader">
            <h1 className="chooserTitle">Who are you?</h1>
            <div className="modalClose" onClick={onClose}>
              x
            </div>
          </div>
          <ul className="chooserBody">
            {Object.keys(users).map(user => (
              <li className="choice" key={users[user].id}>
                <img
                  className="chooserImg"
                  src={users[user].avatarURL}
                  alt={users[user].name}
                />
                <h4 className="chooserName">{users[user].name}</h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="modalBackground" onClick={onClose} />
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default UserModal;
