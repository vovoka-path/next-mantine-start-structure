"use client";

import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#eef3ff',
  '#dce4f5',
  '#b9c7e2',
  '#94a8d0',
  '#748dc1',
  '#5f7cb8',
  '#5474b4',
  '#44639f',
  '#39588f',
  '#2d4b81'
];

export const theme = createTheme({
  fontFamily: 'Nunito, sans-serif',
  colors: {
    primary: myColor,
  },
  black: 'black',
  white: 'white',
});
