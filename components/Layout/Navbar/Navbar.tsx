'use client';

import { Group, Burger, AppShell } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';

import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { NavbarProps } from './interfaces';
import menuItems from 'data/menuItems';

export default function Navbar({ children }: NavbarProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger
            opened={opened}
            onClick={toggle}
            mod={{ label: 'burger menu button' }}
            hiddenFrom='sm'
            size='sm'
          />
          <Group justify='space-between' style={{ flex: 1 }}>
            <MantineLogo size={30} />
            <Group ml='xl' gap={0} visibleFrom='sm'>
              <DesktopMenu menuItems={menuItems} />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <MobileMenu menuItems={menuItems} toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer p='md'>Footer</AppShell.Footer>
    </AppShell>
  );
}
