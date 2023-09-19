import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
 import classes from './css/leftStats.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Sports and Casino',
    description: 'Wide range of possibilities',
  } 
];

export default function RightStatsB1() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
     <div>
        <Text   c="#FF5000"  fw={800} fz="md" style={{ display:"flex",alignItems:"flex-end", justifyContent:"flex-end", justifyItems:"end"}}>
          {item.title}
        </Text>
        <Text   c="#ffffff" fw={800} fz="xs" >{item.description}</Text>
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