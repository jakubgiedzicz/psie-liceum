import {
  BackgroundImage,
  Box,
  Container,
  Divider,
  Grid,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import img_about from "../assets/home-about-me.jpg";
import styles from "./Home.module.css";

const Home = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container fluid p={0}>
        <BackgroundImage
          src="https://blog.tryfi.com/content/images/2024/03/happy-dog-yellow-flowers.webp"
          h={700}
        >
          <Box h={"100%"} bg={"rgba(255, 255, 255, 0.1)"}>
            <Stack
              w={"50%"}
              pl={48}
              gap={96}
              pr={48}
              h={"100%"}
              justify="center"
            >
              <Title
                order={2}
                className={styles.title2 + " " + styles.intro_text+ " " + styles.paragraph}
              >
                Weronika Roszkowska
              </Title>
              <Title
                order={1}
                className={styles.title + " " + styles.intro_text}
                c={theme.colors.yellow[6]}
              >
                Psie Liceum
              </Title>
              <Text
                size="xl"
                className={styles.intro_text + " " + styles.paragraph}
                visibleFrom="sm"
              >
                Witam Cię serdecznie na mojej stronie. Mam na imię Weronika,
                jestem psią behawiorystką, czyli specjalistką od zachowania
                psów.
              </Text>
            </Stack>
          </Box>
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
            <Title order={1} c={theme.colors.yellow[6]} className={styles.heading_shadow}>Lorem Ipsum</Title>
            <Text mt={16} fw={500}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              itaque dolore placeat temporibus! Facere deleniti soluta vitae
              dolore, voluptatibus reprehenderit repellendus sint vel sed
              asperiores repudiandae accusamus alias, enim fuga ullam quod
              similique officia ducimus reiciendis perferendis tenetur
              voluptates ut? Nam illo molestiae porro, voluptatem mollitia quam
              beatae odio quisquam.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
      <Divider mt={64} size={"sm"} />
      <Stack mt={64}>
        <Title order={1} c={theme.colors.yellow[6]} className={styles.heading_shadow}>W czym mogę pomóc</Title>
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
          <Grid.Col
            span={{ base: 12, sm: 4, lg: 4 }}
            className={styles.box_shadow}
          >
            <Stack>
              <Text fw={600}>Konsultacje indywidualne</Text>
              <List ta={"left"}>
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
          <Grid.Col
            span={{ base: 12, sm: 4, lg: 4 }}
            className={styles.box_shadow}
          >
            <Stack>
              <Text fw={600}>Zajecia grupowe</Text>
              <List ta={"left"}>
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
          <Grid.Col
            span={{ base: 12, sm: 4, lg: 4 }}
            className={styles.box_shadow}
          >
            <Stack>
              <Text fw={600}>Konsultacje dietetyczne</Text>
              <List ta={"left"}>
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
      <BackgroundImage
        src={img_about}
        mih={400}
        className={styles.parallax}
        mt={128}
      >
        <Stack mih={400} justify="center" align="center">
          <Title order={1} className={styles.intro_text + " " + styles.heading_shadow + ' ' + styles.title2 + ' ' + styles.end_bg} c={theme.colors.yellow[6]}>
            Umów spotkanie
          </Title>
        </Stack>
      </BackgroundImage>
    </>
  );
};

export default Home;
