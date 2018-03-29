import React, {Component} from 'react';
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
      <div key={user.id}>
        { user.name }
      </div>
    ));
  }

  render() {
    return (
      <div>
        <PageTitle>
          Here's a big list of users:
        </PageTitle>
        <ul>
          { this.renderUsers() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, {fetchUsers})(UsersList);
