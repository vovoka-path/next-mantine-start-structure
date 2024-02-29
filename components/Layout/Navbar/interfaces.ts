import { TablerIconsProps } from '@tabler/icons-react';

export interface IMenuItem {
  title: string;
  link: string;
  leftIcon: React.ElementType<TablerIconsProps> | null;
}

export interface NavbarProps {
  children: React.ReactNode;
}
