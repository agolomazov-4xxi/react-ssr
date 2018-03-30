import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import styled from 'styled-components';

const PageTitle = styled.div`
  background: #ceeccc;
  font-weight: 300;
  font-size: 28px;
  color: #333;
`;

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>
        { user.name }
      </li>
    ));
  }

  render() {
    return (
      <Fragment>
        <PageTitle>
          Here's a big list of users:
        </PageTitle>
        <ul>
          { this.renderUsers() }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

function loadData(store) {
  return store.dispatch(fetchUsers());
}


export default {
  loadData,
  component: connect(mapStateToProps, {fetchUsers})(UsersList)
};
