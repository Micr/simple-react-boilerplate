import React, { PropTypes } from 'react';
import styles from './styles.css';

const GroupPage = ({ onLoginClick }) =>
  <div className={styles.loginButton} onClick={() => onLoginClick()} />;

GroupPage.propTypes = {
  onLoginClick: PropTypes.func,
};

export default GroupPage;
