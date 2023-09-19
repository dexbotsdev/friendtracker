import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, rem } from '@mantine/core';
 import classes from './css/leftStats.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Twitter Profile',
    description: '',
  } 
];

export default function LeftStatsB1() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src="/assets/icons/1.png"  alt="a"/>
      </ThemeIcon>

      <div>
        <Text   c="#FFC85C" fw={800} fz="sm" className={classes.itemTitle} mt={rem(12)}>
          {item.title}
        </Text>
       </div>
    </div>
  ));

  return (
       <>
        {items}
      </> 
  );
}