import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  Divider,
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
import { useEffect } from "react";

const Home = () => {
  const theme = useMantineTheme();
  useEffect(() => {
    //window.scrollTo(0, 0);
    document.title = "Psie Liceum";
  }, []);
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
          <Image src={img_about} radius={"25%"} alt="Image of a cat" aria-label="Image of a cat"/>
        </Box>
        <Stack justify="space-between">
          <Stack>
            <Title
              order={1}
              c={theme.colors.yellow[6]}
              className={text_styles.heading_shadow}
            >
              Czym się zajmuję
            </Title>
            <Text mt={16} fw={400} size="lg" ta="left">
              Cześć, jestem Weronika - trenerka psów z sercem pełnym pasji i
              domem pełnym miłości do zwierząt. Mieszkam z rottweilerką Lily,
              mopsami Shrekiem i Fioną oraz kotem Pusiaką, który zarządza naszym
              światem jak prawdziwy boss.
            </Text>
            <Text fw={400} size="lg" ta="left">
              Każdego dnia pomagam opiekunom odkrywać, jak wyjątkowe mogą być
              relacje z ich czworonogami. Uczę, jak zrozumieć psa, budować
              zaufanie i wspólnie cieszyć się codziennością. Specjalizuję się w
              rozwiązywaniu problemów behawioralnych, nauce nowych umiejętności
              i tworzeniu planów treningowych oraz diet, które są dopasowane do
              potrzeb każdego psa.
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
              c='black'
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
          Stosuję wyłącznie przyjazne i skuteczne metody szkolenia, które
          sprawiają, że psy merdają ogonami, a właściciele uśmiechają się od
          ucha do ucha!
        </Title>
        <SimpleGrid
          mx={64}
          my={32}
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 10, sm: "xl" }}
        >
          <Stack p={16}>
            <Button
              component={Link}
              to="/konsultacje-behawioralne"
              variant="subtle"
              mih={72}
              color={theme.colors.yellow[6]}
            >
              <Title order={2} fw={500} textWrap="wrap">
                Konsultacje indywidualne
              </Title>
            </Button>
            <List ta={"left"}>
              <List.Item>Omówienie problemów i oczekiwań właściciela</List.Item>
              <List.Item>
                Dopasowanie planu do indywidualnych potrzeb psa i właściciela
              </List.Item>
              <List.Item>
                Wprowadzenie ćwiczeń do pracy w domu i na spacerach
              </List.Item>
              <List.Item>Rozwiązania dla najpilniejszych problemów</List.Item>
              <List.Item>
                Przekazanie szczegółowego planu treningowego do dalszej pracy
              </List.Item>
              <List.Item>
                Wskazówki dotyczące codziennej rutyny i budowania relacji z psem
              </List.Item>
            </List>
          </Stack>
          <Stack p={16}>
            <Button
              component={Link}
              to="/zajecia-grupowe"
              variant="subtle"
              mih={72}
              color={theme.colors.yellow[6]}
            >
              <Title order={2} fw={500} textWrap="wrap">
                Zajęcia grupowe
              </Title>
            </Button>
            <List ta={"left"}>
              <List.Item>
                Nauka podstawowych komend w obecności innych psów
              </List.Item>
              <List.Item>
                Praca nad koncentracją psa w rozpraszającym środowisku
              </List.Item>
              <List.Item>Ćwiczenie spokojnego zachowania w grupie</List.Item>
              <List.Item>
                Nauka poprawnych zachowań w kontaktach z innymi psami
              </List.Item>
              <List.Item>
                Ćwiczenia budujące zaufanie między psem a właścicielem w
                obecności innych psów
              </List.Item>
              <List.Item>
                Wskazówki do dalszej pracy w codziennych sytuacjach
              </List.Item>
            </List>
          </Stack>
          <Stack p={16}>
            <Button
              component={Link}
              to="/konsultacje-dietetyczne"
              variant="subtle"
              mih={72}
              color={theme.colors.yellow[6]}
            >
              <Title order={2} fw={500} textWrap="wrap">
                Dietetyka
              </Title>
            </Button>
            <List ta={"left"}>
              <List.Item>Szczegółowe omówienie stanu zdrowia psa</List.Item>
              <List.Item>Pomoc w doborze odpowiedniej diety</List.Item>
              <List.Item>
                Wypracowanie pozytywnych zachowań przy jedzeniu
              </List.Item>
              <List.Item>
                Praca w kierunku odzyskania prawidłowej masy ciała
              </List.Item>
              <List.Item>Poszerzenie horyzontów wybrednego psa</List.Item>
              <List.Item>
                Wskazówki dotyczące karmienia przed i po treningu
              </List.Item>
            </List>
          </Stack>
        </SimpleGrid>
      </Stack>
      <BackgroundImage src={img_about} className={styles.parallax} h={400}>
        <Stack justify="space-around">
          <Box />
          <Button
            variant="filled"
            size="xl"
            component={Link}
            to="/kontakt"
            color={theme.colors.yellow[6]}
            rightSection={<IconArrowRight size={16} />}
            c='black'
          >
            Kontakt
          </Button>
        </Stack>
      </BackgroundImage>
    </>
  );
};

export default Home;
