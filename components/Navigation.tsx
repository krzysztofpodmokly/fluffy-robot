import Link from 'next/link';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ToggleMode from './ToggleMode';

const Navigation = () => {
  return (
    <nav className='navbar bg-base-100'>
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
