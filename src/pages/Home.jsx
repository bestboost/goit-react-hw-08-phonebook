import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export default function Home() {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Hello {user.name}</p>
    </div>
  );
}
