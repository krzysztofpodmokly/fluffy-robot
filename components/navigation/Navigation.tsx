import Link from 'next/link';
import SignIn from '../auth/SignIn';
import SignOut from '../auth/SignOut';
import ToggleMode from '../toggleMode/ToggleMode';

const Navigation = () => {
  return (
    <nav className='navbar bg-base-100 fixed z-10'>
      <div className="flex-1">
        <p className='text-xl'>Resume</p>

      </div>

      <div className="flex-none">
        <ToggleMode />
        <ul>
          <li className='flex items-center'>
            <SignIn />
            <SignOut />
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;
