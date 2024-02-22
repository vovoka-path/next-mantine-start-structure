import { Button } from '@mantine/core';
import Link from 'next/link';
import menuItems from 'data/menuItems.json';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  toggle: () => void;
}

export default function MobileMenu({toggle}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item) => (
        <Button
          component={Link}
          href={item.link}
          data-disabled={item.link === pathname}
          onClick={toggle}
          variant='subtle'
          key={'mobile' + item.title}
        >
          {item.title}
        </Button>
      ))}
    </>
  );
}
