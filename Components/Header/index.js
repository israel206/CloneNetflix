import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = ({ black }) => {
  return (
    <header className={black ? 'header black' : 'header'}>
      <div className="header__logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
        </a>
      </div>
      <div className="header__user">

        {/* <a href="https://github.com/israel206"> */}
        <a href="/"> <GitHubIcon style={{ fontSize: 35, marginRight: 10, color: 'white' }} />
        </a>

        <a href="/">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
        </a>
        
      </div>
    </header>
  );
};
export default Header;
