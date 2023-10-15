import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Box, User, LogButton } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logout = () => dispatch(logOut());

  return (
    <Box>
      <User>
        User: {user.name} <br /> {user.email}
      </User>
      <LogButton onClick={logout}>Logout</LogButton>
    </Box>
  );
};
