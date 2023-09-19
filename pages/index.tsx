import { Button, Container, Group, Grid, Anchor, ActionIcon, rem, Text, Image, Flex, Center } from "@mantine/core";
import { IconBrandTwitterFilled, IconBrandYoutubeFilled, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';


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
      height: "120vh",
      maxWidth: "100wh",
      backgroundImage: "url('./assets/bgFull.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#060d0e",
    }}>
      <Grid gutter={{ base: 15, xs: 'md', }} style={{
        height: "10vh",
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
      <Grid justify="center" align="center" gutter={{ base: 15, xs: 'md', m: 'xl', xl: 50 }} >
        <Grid.Col span={2} style={{
          height: "60vh"
        }}></Grid.Col>
        <Grid.Col span={5} style={{ minHeight: rem(100) }}>
          <Image src="/assets/Heading.png" width="100%" />
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>

      <Grid justify="center" align="stretch"
        style={{
          width: "70ww",
          margin: "auto"
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
          <Image src="/assets/2.png" width="100%" />
        </Flex></Grid.Col>
        <Grid.Col span={4}><Flex
          mih={40}
          gap="md"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Image src="/assets/4.png" width="100%" />

        </Flex></Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
      <Grid justify="center" align="stretch"
        style={{
          width: "50ww",
          margin: "auto",
          marginTop: "5vh"
        }}
      >
        <Grid.Col span={3}></Grid.Col>
        <Grid.Col span={3}><Flex
          mih={40}
          gap="md"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Image src="/assets/3.png" width="100%" />

        </Flex>
        </Grid.Col>
        <Grid.Col span={3}><Flex
          mih={40}
          gap="md"
          justify="flex-end"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Image src="/assets/5.png" width="100%" />

        </Flex>
        </Grid.Col>
        <Grid.Col span={3}></Grid.Col>
      </Grid>
      <Grid justify="center" align="stretch">
        <Grid.Col span={5}></Grid.Col>
        <Grid.Col span={2} >

          <Image src="/assets/1.png" width="100%" />
          <Center>
            <Button radius={'xl'} variant="filled" color="#4BF4FF"><Text c="black" fw={700}>Analyzer BOT</Text></Button>
          </Center>
        </Grid.Col>
        <Grid.Col span={5}></Grid.Col>
      </Grid>
      <Grid style={{
        margin: "auto",
        marginTop: "10vh"
      }}>
        <Grid.Col span={12}> <Center>
          <Text c="#4BF4FF" fw={400}>All right reserved by Company name 2023</Text>
        </Center></Grid.Col>
      </Grid>
    </Container>
  );
}

// 63 66607963