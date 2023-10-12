import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logout = () => dispatch(logOut());

  return (
    <div>
      <p>
        User: {user.name} {user.email}
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
