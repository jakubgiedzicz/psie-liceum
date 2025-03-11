import {
  Stack,
  Title,
  useMantineTheme,
  Text,
  Button,
  SimpleGrid,
  Card,
  Box,
  Center,
  Divider,
} from "@mantine/core";
import { useEffect } from "react";
import styles from "./Diet.module.css";
import { Link } from "react-router-dom";

const Diet = () => {
  const theme = useMantineTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Psie Liceum - Konsultacje dietetyczne";
  }, []);
  return (
    <Stack align="center" mt={32} className="paws_bg" pb={"20vh"}>
      <Title ta={"left"} w={"100%"} px={"20%"} order={2}>
        Dlaczego dieta i trening to duet idealny?
      </Title>
      <Text ta={"left"} w={"40%"} fw={500}>
        Czy wiesz, że to, co Twój pies je, wpływa nie tylko na jego zdrowie, ale
        także na zachowanie i zdolność do nauki? Odpowiednia dieta wspiera
        koncentrację, równowagę emocjonalną i poziom energii, co czyni trening
        bardziej efektywnym.
      </Text>
      <Text w={"40%"} ta={"left"}>
        <Text span fw={500}>
          Przykład?
        </Text>{" "}
        Zbyt dużo cukrów w diecie{" "}
        <Text span td={"underline"}>
          może powodować nadpobudliwość
        </Text>
        , a brak odpowiednich składników odżywczych - problemy z wyciszeniem i
        skupieniem. Dlatego warto zadbać o oba te elementy jednocześnie!🐾
      </Text>
      <Title bg={theme.colors.yellow[6]} w={"100%"} py={16} mt={64}>
        Co mogę dla Ciebie zrobić?
      </Title>
      <SimpleGrid
        mx={64}
        my={32}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 10, sm: "xl" }}
      >
        <Card className={styles.card}>
          <Card.Section>
            <Title fw={500}>Indywidualny plan żywieniowy</Title>
          </Card.Section>
          <Card.Section pt={16}>
            <Text c={"dark"}>
              Dopasowany do wieku, rasy, aktywności i potrzeb Twojego psa.
            </Text>
          </Card.Section>
        </Card>
        <Card className={styles.card}>
          <Card.Section>
            <Title fw={500}>Porady dotyczące suplementacji</Title>
          </Card.Section>
          <Card.Section pt={16}>
            <Text c={"dark"}>
              Wzmocnij odporność swojego pupila i zadbaj o jego zdrowie, np.
              przy problemach z alergiami (wiem, jak to jest, moja rottweilerka
              też ich doświadczyła!)
            </Text>
          </Card.Section>
        </Card>
        <Card className={styles.card}>
          <Card.Section>
            <Title fw={500}>Rozwiązywanie problemów dietetycznych</Title>
          </Card.Section>
          <Card.Section pt={16}>
            <Text c={"dark"}>
              Od nadwagi po nadpobudliwość, znajdziemy rozwiązanie
            </Text>
          </Card.Section>
        </Card>
      </SimpleGrid>
      <SimpleGrid px={"20%"} cols={{ base: 1, sm: 2 }} mt={64}>
        <Center bg={theme.colors.yellow[6]} className={styles.grid_item_border}>
          <Title py={16}>Dlaczego to działa?</Title>
        </Center>
        <Text w={"80%"} ta={"left"}>
          Psy, podobnie jak ludzie, potrzebują równowagi. Zbilansowana dieta
          pozwala im lepiej się koncentrować i kontrolować emocje, a odpowiedni
          trening uczy ich, jak być najlepszym towarzyszem.
          <Text pt={8}>
            W skrócie:{" "}
            <Text span fw={500}>
              zdrowy pies to szczęśliwy pies
            </Text>
            , a szczęśliwy pies to szczęśliwy właściciel! 🐶❤
          </Text>
        </Text>
      </SimpleGrid>
      <Title mt={64}>Historie sukcesu</Title>
      <Stack mx={"20%"}>
        <Box className={styles.list}>
          <Title fw={400} ta={"left"}>
            Romeo - buldog z nadwagą
          </Title>
          <Text w={"80%"} ta={"left"} pt={8}>
            Romeo uwielbiał jeść i szybko przybrał na wadze, co utrudniało mu
            oddychanie i poruszanie się. Po zmianie diety i wprowadzeniu
            aktywności schudł 5 kg i odzyskał energię do zabawy. 🐕🎉
          </Text>
        </Box>
        <Divider />
        <Box className={styles.list}>
          <Title fw={400} ta={"left"} ml={32}>
            Barbi - starsza dama, która odzyskała energię{" "}
          </Title>
          <Text w={"80%"} ta={"left"} ml={32} pt={8}>
            Barbi, 10-letnia goldenka, traciła energię i unikała spacerów.
            Dzięki suplementom na stawy i diecie bogatej w omega-3 znowu biega
            po parku i bawi się jak szczeniak. 🐕💖
          </Text>
        </Box>
        <Divider />
        <Box className={styles.list}>
          <Title fw={400} ta={"left"} ml={64}>
            Lucjan - pies, który bał się wszystkiego{" "}
          </Title>
          <Text w={"80%"} ta={"left"} ml={64} pt={8}>
            Lucjan, adoptowany ze schroniska, bał się ludzi, dźwięków i
            spacerów. Dzięki suplementom wspierającym układ nerwowy i ćwiczeniom
            budującym pewność siebie, teraz spaceruje z podniesionym ogonem i
            cieszy się życiem. 🐶💛
          </Text>
        </Box>
        <Divider />
      </Stack>
      <Button component={Link} to={"/cennik"} size="lg" c={"black"} color={theme.colors.yellow[6]}>
        Sprawdź ofertę!
      </Button>
    </Stack>
  );
};

export default Diet;
