import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user/selectors';
import { useHistory, Link } from 'react-router-dom';

export default function Admin() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push('/login');
    }
  }, [token, history]);

  return (
    <div>
      <h1>Admin page</h1>
      <Link to="/signup" style={{ textAlign: 'center' }}>
        Click here to sign up a new user
      </Link>
    </div>
  );
}
