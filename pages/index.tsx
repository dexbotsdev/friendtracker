import { Button, Container, Group, Grid, Anchor, ActionIcon, rem, Text, Image, Flex, Center } from "@mantine/core";
import { IconBrandTwitterFilled, IconBrandYoutubeFilled, IconBrandFacebook } from '@tabler/icons-react';

import   LeftStatsA1   from "./LeftStatsA1";
import   LeftStatsB1  from "./LeftStatsB1";
import  RightStatsA1   from "./RightStatsA1";
import   RightStatsB1   from "./RightStatsB1";
import classes from "./styles.module.css";

const links = [
  { link: '#', label: 'Privacy Policy' },
  { link: '#', label: 'Terms of Service' }
];

export default function IndexPage() {

  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      <Text fw={500} c="cyan">{link.label}</Text>
    </Anchor>
  ));



  return (
    <Container fluid style={{
      height: "150vh",
      maxWidth: "100wh",
      backgroundImage: "url('./assets/bgFull.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#060d0e",
    }}>
      <Grid gutter={{ base: 15, xs: 'md', }} style={{
        height: "25vh",
        width: "80%",
        margin: "auto",
      }}>
        <Grid.Col span={6}>
          <Group gap="sm" mt="xl">
            <ActionIcon size="lg" variant="transparent" color="cyan" >
              <IconBrandTwitterFilled />
            </ActionIcon>
            <ActionIcon size="lg" variant="transparent" color="cyan" >
              <IconBrandYoutubeFilled />
            </ActionIcon>
            <ActionIcon size="lg" variant="transparent" color="cyan" >
              <IconBrandFacebook />
            </ActionIcon>
          </Group>
        </Grid.Col>
        <Grid.Col span={6} mt="xl">
          <Group gap="sm" justify="flex-end">
            {items}
          </Group>
        </Grid.Col>
      </Grid>
      <Grid justify="center" align="center" gutter={{ base: 15, xs: 'md', m: 'xl', xl: 50 }}>
        <Grid.Col span={2} style={{
          height: "60vh"
        }}></Grid.Col>
        <Grid.Col span={5} style={{ minHeight: rem(100) }}>
          <Image src="/assets/Heading.png" width="100%" />
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>

      <Grid justify="center" align="stretch" style={{
          width: "100ww",
          margin: "auto",
          marginTop:"5rem"
          
        }}
      >
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={5}><Flex
          mih={40}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <LeftStatsA1 />
        </Flex></Grid.Col>
        <Grid.Col span={5}><Flex
          mih={40}
          gap="md"
          justify="flex-end"
          align="right"
          direction="row"
          wrap="wrap"
        >
          <RightStatsA1 />

        </Flex></Grid.Col>  
        <Grid.Col span={1}></Grid.Col>

      </Grid>
      <Grid justify="center" align="stretch"
        style={{
          width: "50ww",
          margin: "auto",
          marginTop: "5vh"
        }}
      >
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={4}><Flex
          mih={40}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <LeftStatsB1 />

        </Flex>
        </Grid.Col>
        <Grid.Col span={4}><Flex
          mih={40}
          gap="md"
          justify="flex-end"
          align="right"
          direction="row"
          wrap="wrap"
        >
          <RightStatsB1 />


        </Flex>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
      <Grid justify="center" align="stretch">
        <Grid.Col span={4}></Grid.Col>
        <Grid.Col span={3}>
          <div    className={classes.textItem}>
          <Center> <Text c="#ffffff" fw={800} m="md" >EASIER WAY OUT TO ANALYZE NEXT FREIND TECH PROFILE</Text></Center>
            </div>
          <Center>
            
            <Button component="a" href="https://t.me/friendtrackerbot" radius={'xl'} variant="filled" color="#4BF4FF"><Text c="black" fw={700}>Analyzer BOT</Text></Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>
      </Grid>
      <Grid style={{
        margin: "auto",
        marginTop: "10vh"
      }}>
        <Grid.Col span={12} style={{ backgroundColor: "transparent", fontWeight: "800" }} > <Center>
          <Text c="#4BF4FF" fw={400}>All right reserved by Company name 2023</Text>
        </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

// 63 66607963