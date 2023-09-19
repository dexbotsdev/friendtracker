import { Grid, Text, SimpleGrid, Paper, Center, Group, rem } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

const data = [
  { label: 'Page views', stats: '456,578', progress: 65, color: 'teal', icon: 'up' }
] as const;

export function StatsB1() {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Grid>
        <Grid.Col><div>
          <Text c="#7C4CF8" size="md" tt="uppercase" fw={900}>
            {stat.label}
          </Text>
          <Text fw={700} size="md" c="#ffffff">
            {stat.stats}
          </Text>
        </div>
        </Grid.Col> 
        <Grid.Col><img src="/assets/icons/2.png" width="42px" /> </Grid.Col>
      </Grid>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>;
}