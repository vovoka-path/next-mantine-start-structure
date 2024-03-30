import { IMenuItem } from 'components/Layout/Navbar/interfaces';
import { IconFriends, IconHome, IconMail } from '@tabler/icons-react';

const menuItems: IMenuItem[] = [
  {
    title: 'Home',
    link: '/',
    leftIcon: IconHome,
  },
  {
    title: 'About',
    link: '/about.html',
    leftIcon: IconFriends,
  },
  {
    title: 'Contact',
    link: '/contact.html',
    leftIcon: IconMail,
  },
];

export default menuItems;
