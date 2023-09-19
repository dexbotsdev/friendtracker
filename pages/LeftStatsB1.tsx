import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
 import classes from './css/leftStats.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Instant payouts',
    description: 'This takes a couple of minutes',
  } 
];

export function LeftStatsB1() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src="/assets/icons/1.png" />
      </ThemeIcon>

      <div>
        <Text   c="#FFC85C" fw={800} fz="md" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text   c="#ffffff" fw={800} fz="xs" >{item.description}</Text>
      </div>
    </div>
  ));

  return (
       <>
        {items}
      </> 
  );
}