import React, { PropTypes } from 'react';
import styles from './styles.css';

const FrontPage = ({ onLoginClick }) =>
  <div className={styles.loginButton} onClick={() => onLoginClick()} />;

FrontPage.propTypes = {
  onLoginClick: PropTypes.func,
};

export default FrontPage;
