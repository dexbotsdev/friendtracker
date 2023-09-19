import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, rem } from '@mantine/core';
import classes from './css/rightStats.module.css';

const data = [
  {
    image: 'auditors',
    title: 'New Profile Tracking',
    description: '',
  } 
];

export default function RightStatsB1() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
     <div>
        <Text   c="#FF5000"  fw={800} fz="sm" className={classes.itemTitle} mt={rem(12)} style={{ display:"flex",alignItems:"flex-end", justifyContent:"flex-end", justifyItems:"end"}}>
          {item.title}
        </Text>
       </div>

      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src="/assets/icons/4.png"  alt="a"/>
      </ThemeIcon>

    </div>
  ));

  return (
       <>
        {items}
      </> 
  );
}