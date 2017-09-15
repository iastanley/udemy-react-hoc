import React from 'react';
import { connect } from 'react-redux';
import requireAuth from './hoc/require_auth';

const Resources = () => {
  return (<h2>Top Secret Resources!</h2>);
}

// THE COURSE HAS THIS AS PART OF THE RequireAuth HOC BUT I THINK IT IS BETTER TO KNOW HOW TO MIX MULTIPLE HOCs TOGETHER!
const mapStateToProps = ({ authenticated }) => ({
  authenticated
})

// returning connected version of HOC
export default connect(mapStateToProps)(requireAuth(Resources));
