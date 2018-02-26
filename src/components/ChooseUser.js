import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser, loadUsers } from '../actions';
import Spinner from './Spinner';

class ChooseUser extends Component {
  state = {
    loading: true,
    users: {},
    currentUser: null
  };

  componentDidMount() {
    this.props.getUsers().then(response => {
      this.setState({ users: response.users, loading: false });
    });
  }

  saveUser = (user, e) => {
    console.log(user);
    this.props.setCurrentUser(user);
    this.setState({ loading: true });
  };

  render() {
    const { users, loading } = this.state;
    if (this.props.isOpen === false) return null;

    return (
      <div className={this.props.containerClassName}>
        <div className="chooserOpen">
          <div className="chooserHeader">
            <h1 className="chooserTitle">Who are you?</h1>
          </div>

          {loading ? (
            <Spinner />
          ) : (
            <ul className="chooserBody">
              {Object.keys(users).map(user => (
                <li
                  className="choice"
                  key={users[user].id}
                  onClick={e => this.saveUser(users[user], e)}
                >
                  <img
                    className="chooserImg"
                    src={users[user].avatarURL}
                    alt={users[user].name}
                  />
                  <h4 className="chooserName">{users[user].name}</h4>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="modalBackground" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(saveUser(user)),
    getUsers: () => dispatch(loadUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseUser);
