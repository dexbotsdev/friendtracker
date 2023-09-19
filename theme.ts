import {   createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ebfbff',
  '#d7f4fb',
  '#a9e7f9',
  '#7bdbf8',
  '#5dd1f7',
  '#50cbf6',
  '#47c8f7',
  '#3ab1dc',
  '#2b9dc5',
  '#0088ad'
];
export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    myColor,
  }
});
