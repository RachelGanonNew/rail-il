
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectIsExistUser} from './selectors';
import {getIsExistUser} from './actions';
import reducer from './reducer';
import saga from './saga';
import LoginImg from '../../images/LoginImg.png';
import './index.scss';
import 'reactjs-popup/dist/index.css';

export function LoginPage({onSubmitConfirmPass, user }) {

  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const [pass, setpass] = useState('');

  const onChangePass = (event) => {
    setpass(event.target.value);
  };

  const onConfirm = () => {
    onSubmitConfirmPass(pass);
  }

  return (
    <div className="container">
      <h1>Wellcome! please enter your private password and submit</h1>
      <img alt="Avatar" src={LoginImg} className="avatar"/>
      <label><b>Password</b></label>
      {!user && <p className="incorrectPass">password is incorrect, please check again...</p>}
      <input type="password" value={pass} onChange={onChangePass} placeholder="Password" required></input>
      <button type="submit" onClick={onConfirm}>Submit</button>
    </div>
  );
}

LoginPage.propTypes = {
  makeSelectIsExistUser: PropTypes.bool,
  onSubmitConfirmPass: PropTypes.func,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectIsExistUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitConfirmPass:(pass) => dispatch(getIsExistUser(pass)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
