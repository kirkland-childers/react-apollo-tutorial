import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <h1 className="fw7 mr1">Hacker News</h1>
        </Link>        
        <Link to="/" className="ml1 no-underline black">new</Link>
        <div className="ml1">|</div>
        <Link to="/new" className="ml1 no-underline black">submit</Link>
      </div>
    </div>
  );
};

export default Header;