import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
 import classes from './css/leftStats.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Referral program',
    description: 'Cashback for making friends.',
  } 
];

export function RightStatsA1() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <div style={{alignItems:"flex-end", justifyContent:"flex-end", justifyItems:"end"}}>
        <Text   c="#7C4CF8"   fw={800} fz="md" style={{ display:"flex",alignItems:"flex-end", justifyContent:"flex-end", justifyItems:"end"}}>
          {item.title}
        </Text>
        <Text   c="#ffffff" fw={800} fz="xs" >{item.description}</Text>
      </div>

      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src="/assets/icons/2.png" />
      </ThemeIcon>

    </div>
  ));

  return (
       <>
        {items}
      </> 
  );
}