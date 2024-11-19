import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Divider,
  Grid,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import img_about from "../assets/home-about-me.jpg";
import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <Container fluid p={0}>
        <BackgroundImage
          src="https://blog.tryfi.com/content/images/2024/03/happy-dog-yellow-flowers.webp"
          h={700}
        >
          <Stack
            justify="center"
            align="center"
            h={"30%"}
            bg={"rgba(15, 15, 15, 0.15)"}
          >
            <Title order={1}>Psie Liceum</Title>
            <Title order={2}>Weronika Roszkowska</Title>
            <Text size="lg">
              Psie Liceum to miejsce w którym twój pies nauczy się posłuszeństwa
              oraz dobrych manier
            </Text>
          </Stack>
        </BackgroundImage>
      </Container>
      <SimpleGrid
        mt={64}
        ml={"10%"}
        mr={"10%"}
        cols={{ base: 1, lg: 2 }}
        spacing={{ base: 64, xl: 96 }}
        verticalSpacing={{ base: 64 }}
      >
        <Box>
          <Image src={img_about} radius={"25%"} />
        </Box>
        <Box>
          <Stack>
            <Title order={1}>Lorem Ipsum</Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              itaque dolore placeat temporibus! Facere deleniti soluta vitae
              dolore, voluptatibus reprehenderit repellendus sint vel sed
              asperiores repudiandae accusamus alias, enim fuga ullam quod
              similique officia ducimus reiciendis perferendis tenetur
              voluptates ut? Nam illo molestiae porro, voluptatem mollitia quam
              beatae odio quisquam.
            </p>
          </Stack>
        </Box>
      </SimpleGrid>
      <Divider mt={64} size={'sm'}/>
      <Stack mt={64}>
        <Title order={1}>W czym mogę pomóc</Title>
        <Text>
          Gwarantuję Ci humanitarne metody szkolenia psów, które zadowolą psy
          jak i właścicieli!
        </Text>
        <Grid
          gutter={{ base: 5, xs: 50, md: 50, xl: 80 }}
          pl={96}
          pr={96}
          mt={32}
        >
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} className={styles.box_shadow}>
            <Stack>
              <Text>Konsultacje indywidualne</Text>
              <List ta={'left'}>
                <List.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </List.Item>
                <List.Item>Atque itaque dolore placeat temporibus!</List.Item>
                <List.Item>
                  Facere deleniti soluta vitae dolore, voluptatibus
                  reprehenderit
                </List.Item>
                <List.Item>
                  repellendus sint vel sed asperiores repudiandae accusamus
                  alias
                </List.Item>
              </List>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} className={styles.box_shadow}>
          <Stack>
              <Text>Zajecia grupowe</Text>
              <List ta={'left'}>
                <List.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </List.Item>
                <List.Item>Atque itaque dolore placeat temporibus!</List.Item>
                <List.Item>
                  Facere deleniti soluta vitae dolore, voluptatibus
                  reprehenderit
                </List.Item>
                <List.Item>
                  repellendus sint vel sed asperiores repudiandae accusamus
                  alias
                </List.Item>
              </List>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} className={styles.box_shadow}>
          <Stack>
              <Text>Psieprzedszkole</Text>
              <List ta={'left'}>
                <List.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </List.Item>
                <List.Item>Atque itaque dolore placeat temporibus!</List.Item>
                <List.Item>
                  Facere deleniti soluta vitae dolore, voluptatibus
                  reprehenderit
                </List.Item>
                <List.Item>
                  repellendus sint vel sed asperiores repudiandae accusamus
                  alias
                </List.Item>
              </List>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, lg: 3 }} className={styles.box_shadow}>
          <Stack>
              <Text>Psiapodstawowka</Text>
              <List ta={'left'}>
                <List.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </List.Item>
                <List.Item>Atque itaque dolore placeat temporibus!</List.Item>
                <List.Item>
                  Facere deleniti soluta vitae dolore, voluptatibus
                  reprehenderit
                </List.Item>
                <List.Item>
                  repellendus sint vel sed asperiores repudiandae accusamus
                  alias
                </List.Item>
              </List>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
      <Center>
        <BackgroundImage src={img_about} mih={400} className={styles.parallax} mt={128}>
        <Title order={1}>Umów spotkanie</Title>
        </BackgroundImage>
      </Center>
    </>
  );
};

export default Home;
