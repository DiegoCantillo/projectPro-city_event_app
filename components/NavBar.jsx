import Header from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="header">
      <div className="bg-black text-white p-5 text-right ">
        <Link className="px-3" href="/create_post">
          +Create Post
        </Link>{' '}
        <Link className="px-3" href="/start_sesion">
          Log In
        </Link>{' '}
        <Link className="px-3" href="/sign_up">
          Sign Up
        </Link>
      </div>

      <Header src="/IMG/header.png" alt="" width={1800} height={400} />
    </div>
  );
};

export default NavBar;
