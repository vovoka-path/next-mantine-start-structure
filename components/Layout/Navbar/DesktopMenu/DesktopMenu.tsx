import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button, useMantineTheme } from '@mantine/core';

import { IMenuItem } from '../interfaces';

interface DesktopMenuProps {
  menuItems: IMenuItem[];
}

export default function DesktopMenu({ menuItems }: DesktopMenuProps) {
  const pathname = usePathname();
  const theme = useMantineTheme();

  const isActive = (link: string) => link === pathname;

  return (
    <>
      {menuItems.map((item) => (
        <Button
          key={'desktop' + item.link}
          component={Link}
          href={item.link}
          color={theme.colors.primary[6]}
          variant={isActive(item.link) ? 'light' : 'subtle'}
        >
          {item.title}
        </Button>
      ))}
    </>
  );
}
