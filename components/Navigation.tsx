import Link from 'next/link';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>Page 1</Link>
        </li>
        <li>
          <Link href={'/about'}>Page 2</Link>
        </li>
        <li>
          <Link href={'/blog'}>Page 3</Link>
        </li>
        <li>
          <SignIn />
          <SignOut />
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;
