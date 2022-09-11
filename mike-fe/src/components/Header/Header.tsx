import { useEffect, useState } from 'react';
import { MyMoviesLogo } from 'components/Icons';
import HamburgerButton from 'components/HamburgerButton';
import Sidebar from 'components/Sidebar';
import NavigationLink from 'components/NavigationLink';
import { RouteKey } from 'navigation/routes';
import useMediaQuery from 'hooks/useMediaQuery';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { matches } = useMediaQuery({ matchQuery: '(max-width: 768px)' });

  useEffect(() => {
    if (!matches) {
      setSidebarVisible(false);
    }
  }, [matches]);

  const handleButtonClick = () => {
    setSidebarVisible((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <header className={styles.headerElement}>
      <MyMoviesLogo className={styles.headerIcon} />
      <>
        {matches ? <HamburgerButton isActive={sidebarVisible} onClick={handleButtonClick} /> : <NavigationLink name="Movies" to={RouteKey.Movies} />}

        {sidebarVisible && (
          <Sidebar onBackDropClick={closeSidebar}>
            <NavigationLink name="Movies" to={RouteKey.Movies} />
          </Sidebar>
        )}
      </>
    </header>
  );
};

export default Header;
