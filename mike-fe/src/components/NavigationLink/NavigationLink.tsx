import { NavLink } from 'react-router-dom';
import { parseMultipleClassNames } from 'utils/theme/styleUtils';

import styles from './NavigationLink.module.css';

type NavigationLinkProps = {
  additionalStyles?: string[];
  name: string;
  to: string;
};

const NavigationLink = ({ additionalStyles = [], name, to }: NavigationLinkProps): JSX.Element => (
  <span>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? parseMultipleClassNames([styles.navLink, styles.isActive, ...additionalStyles])
          : parseMultipleClassNames([styles.navLink, ...additionalStyles])
      }
      to={to}
    >
      {name}
    </NavLink>
  </span>
);

export default NavigationLink;
