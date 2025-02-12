import {
  BackgroundImage,
  Box,
  Button,
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
  useMantineTheme,
} from "@mantine/core";
import img_about from "../assets/home-about-me.jpg";
import styles from "./Home.module.css";
import text_styles from "../styles/Text.module.css";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";

const Home = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container fluid p={0}>
        <BackgroundImage
          src="https://blog.tryfi.com/content/images/2024/03/happy-dog-yellow-flowers.webp"
          h={700}
        >
          <Box h={"100%"} bg={"rgba(0, 0, 0, 0.1)"}>
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
                className={
                  text_styles.intro_text +
                  " " +
                  text_styles.paragraph +
                  " " +
                  text_styles.title_shadow
                }
              >
                Weronika Roszkowska
              </Title>
              <Title
                order={1}
                className={
                  text_styles.intro_text + " " + text_styles.title_shadow
                }
                c={theme.colors.yellow[6]}
              >
                Psie Liceum
              </Title>
              <Text
                size="xl"
                className={text_styles.intro_text + " " + text_styles.paragraph}
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
        mx={"10%"}
        cols={{ base: 1, lg: 2 }}
        spacing={{ base: 64, xl: 96 }}
        verticalSpacing={{ base: 64 }}
      >
        <Box>
          <Image src={img_about} radius={"25%"} />
        </Box>
        <Stack justify="space-between">
          <Stack>
            <Title order={3} fw={400}>
              O mnie
            </Title>
            <Title
              order={1}
              c={theme.colors.yellow[6]}
              className={text_styles.heading_shadow}
            >
              Weronika Roszkowska
            </Title>
            <Text mt={16} fw={400} size="lg" ta="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              itaque dolore placeat temporibus! Facere deleniti soluta vitae
              dolore, voluptatibus reprehenderit repellendus sint vel sed
              asperiores repudiandae accusamus alias, enim fuga ullam quod
              similique officia ducimus reiciendis perferendis tenetur
              voluptates ut? Nam illo molestiae porro, voluptatem mollitia quam
              beatae odio quisquam.
            </Text>
          </Stack>
          <Center>
            <Button
              variant="filled"
              size="md"
              component={Link}
              to="/o-mnie"
              color={theme.colors.yellow[6]}
              rightSection={<IconArrowRight size={16} />}
            >
              Więcej o mnie
            </Button>
          </Center>
        </Stack>
      </SimpleGrid>
      <Divider mt={64} size={"sm"} />
      <Stack mt={64}>
        <Title
          order={1}
          c={theme.colors.yellow[6]}
          className={text_styles.heading_shadow}
        >
          W czym mogę pomóc
        </Title>
        <Title order={2} fw={400}>
          Gwarantuję Ci humanitarne metody szkolenia psów, które zadowolą psy
          jak i właścicieli!
        </Title>
        <SimpleGrid mx={64} my={32} cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 10, sm: 'xl' }}>
          <Stack p={16}>
            <Title order={2} fw={400}>
              Konsultacje indywidualne
            </Title>
            <List ta={"left"}>
              <List.Item>
              Analiza zachowań psa oraz rozpoznanie problemów
              </List.Item>
              <List.Item>Nauka posłuszeństwa oraz prawidłowych wzorców</List.Item>
              <List.Item>
                Nauka kontroli emocji i podstawowych komend
              </List.Item>
              <List.Item>
              Wskazówki dla właścicieli skąd wynikają pewne zachowania zwierzaka
              </List.Item>
            </List>
          </Stack>
          <Stack p={16}>
            <Title order={2} fw={400}>
              Zajęcia grupowe
            </Title>
            <List ta={"left"}>
              <List.Item>
                Oswojenie oraz zaprzyjaźnienie ze światem zewnętrznym
              </List.Item>
              <List.Item>Socjalizacja i nauka samokontroli wśród innych psów</List.Item>
              <List.Item>
                Wypracowanie odpowiedniej komunikacji
              </List.Item>
              <List.Item>
                Nauka zabaw i zachowań w grupie
              </List.Item>
            </List>
          </Stack>
          <Stack p={16}>
            <Title order={2} fw={400}>
              Konsultacje dietetyczne
            </Title>
            <List ta={"left"}>
              <List.Item>
              Pomoc w doborze odpowiedniej diety
              </List.Item>
              <List.Item>Wypracowanie pozytywnych zachowań przy jedzeniu</List.Item>
              <List.Item>
                Poszerzenie horyzontów wybrednego psa
              </List.Item>
              <List.Item>
                Praca w kierunku odzyskania prawidłowej masy ciała
              </List.Item>
            </List>
          </Stack>
        </SimpleGrid>
      </Stack>
      <BackgroundImage
        src={img_about}
        mih={400}
        className={styles.parallax}
      >
        <Stack mih={400} justify="center" align="center">
          <Button
            variant="filled"
            size="xl"
            component={Link}
            to="/kontakt"
            color={theme.colors.yellow[6]}
            rightSection={<IconArrowRight size={16} />}
          >
            Kontakt
          </Button>
        </Stack>
      </BackgroundImage>
    </>
  );
};

export default Home;
