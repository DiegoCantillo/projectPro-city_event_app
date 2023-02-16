import Header from 'next/image';

const NavBar = () => {
  return (
    <div className="header">
      <div className="bg-black text-white p-5 text-right ">
        <h1>+CreatePublic - login - singUp</h1>
      </div>
      <Header src="/IMG/header.png" alt="" width={1800} height={400} />
    </div>
  );
};

export default NavBar;
