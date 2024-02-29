import { usePathname } from 'next/navigation';
import { Box, NavLink, useMantineTheme } from '@mantine/core';
import { TablerIconsProps, IconArrowRight } from '@tabler/icons-react';

import { IMenuItem } from '../interfaces';
import Link from 'next/link';

const LeftSection = (props: Pick<IMenuItem, 'leftIcon'>) => {
  const iconProps: TablerIconsProps = {
    size: '1rem',
    stroke: 1.5,
  };
  const DefaultIcon = IconArrowRight;

  return (
    <>
      {props.leftIcon ? (
        <props.leftIcon {...iconProps} />
      ) : (
        <DefaultIcon {...iconProps} />
      )}
    </>
  );
};

interface MobileMenuProps {
  menuItems: IMenuItem[];
  toggle: () => void;
}

export default function MobileMenu({ menuItems, toggle }: MobileMenuProps) {
  const pathname = usePathname();
  const theme = useMantineTheme();

  const isActive = (link: string) => link === pathname;

  return (
    <>
      {menuItems.map((item) => (
        <Box
          key={'mobile' + item.link}
          py={'xs'}
          bg={isActive(item.link) ? theme.colors.primary[0] : 'transparent'}
        >
          <NavLink
            component={Link}
            color={theme.colors.primary[6]}
            label={item.title}
            href={item.link}
            active
            onClick={toggle}
            variant='subtle'
            leftSection={LeftSection({ leftIcon: item.leftIcon })}
          />
        </Box>
      ))}
    </>
  );
}
