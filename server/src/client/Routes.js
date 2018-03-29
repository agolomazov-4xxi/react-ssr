import React from 'react';
import HomePage from './pages/HomePage';
import UsersList from './pages/UsersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersList,
    path: '/users',
  }
];
