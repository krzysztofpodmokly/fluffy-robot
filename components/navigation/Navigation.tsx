import SignIn from '../auth/SignIn';
import SignOut from '../auth/SignOut';
import ToggleMode from '../toggleMode/ToggleMode';

const Navigation = () => {
  return (
    <nav className='navbar bg-transparent fixed z-10 flex justify-end'>
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
