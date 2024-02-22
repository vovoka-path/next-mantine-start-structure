import { Button } from '@mantine/core';
import menuItems from 'data/menuItems.json';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item) => (
        <Button
          component={Link}
          href={item.link}
          data-disabled={item.link === pathname}
          // onClick={handleClick}
          variant='subtle'
          key={'desktop' + item.title}
        >
          {item.title}
        </Button>
      ))}
    </>
  );
}
