import {
  Title,
  useMantineTheme,
  Text,
  Image,
  List,
  Box,
  SimpleGrid,
  Center,
  Stack,
} from "@mantine/core";
import text_style from "../styles/Text.module.css";
import img from "../assets/hero_2_img.webp";
import { Link } from "react-router-dom";
import {
  IconBone,
  IconCirclesRelation,
  IconDog,
  IconHandStop,
  IconPaw,
} from "@tabler/icons-react";
import { useEffect } from "react";
const Psiapodstawowka = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Psie Liceum - Psiapodstawówka";
    }, []);
  const theme = useMantineTheme();
  return (
    <Box className="paws_bg">
      <Title
        order={1}
        c={theme.colors.yellow[6]}
        className={text_style.title_shadow}
        my={16}
      >
        Psiapodstawówka
      </Title>
      <Title order={2} fw={300}>
        Klasa z wyższym poziomem merdania{" "}
        <Text span fw={300}>
          (szczeniaki od 6 miesiąca życia)
        </Text>
      </Title>
      <SimpleGrid cols={{ base: 1, lg: 2 }} mt={32} spacing={32} pb={16} px={'10%'}>
        <Center hiddenFrom="md">
          <Image src={img} radius="10% 10%" />
        </Center>
        <Stack>
        <Text c={theme.colors.gray[8]} my={16}>
          Twój szczeniak zdał egzamin z{" "}
          <Link to="/psieprzedszkole">Psiegoprzedszkola</Link> i jest gotowy na
          kolejne wyzwania? A może masz młodego psa, który potrzebuje
          uporządkowania swojej wiedzy i nauczenia się nowych rzeczy?
          Psiapodstawówka to idealne miejsce dla młodych psich geniuszy, którzy
          chcą wejść na wyższy poziom grzeczności i posłuszeństwa!
        </Text>
        <Stack>
          <Title order={2} fw={400}>
            Podczas kursu twój pies nauczy się:
          </Title>
          <List spacing={16} my={16}>
            <List.Item icon={<IconDog size={64} />}>
              <Text>
                <Text span fw={500}>
                  Zaawansowanych komend:
                </Text>{" "}
                'Zostań' (nawet w rozproszeniach!), 'siad' i 'leżeć' na
                odległość, 'czekaj' przy drzwiach czy przed miseczką oraz
                perfekcyjnego przywołania.
              </Text>
            </List.Item>
            <List.Item icon={<IconPaw size={64} />}>
              <Text>
                <Text span fw={500}>
                  Prawidłowego chodzenia na smyczy:
                </Text>{" "}
                Czas na spacery, które będą czystą przyjemnością - bez
                ciągnięcia, zatrzymywania się i psiej „jazdy figurowej”.
              </Text>
            </List.Item>
            <List.Item icon={<IconCirclesRelation size={64} />}>
              <Text>
                <Text span fw={500}>
                  Prawidłowych reakcji na rozproszenia:
                </Text>{" "}
                Obcy ludzie, psy, rowery i inne pokusy? Twój pies będzie
                wiedział, jak zachować spokój i skupienie.
              </Text>
            </List.Item>
            <List.Item icon={<IconHandStop size={64} />}>
              <Text>
                <Text span fw={500}>
                  Autokontroli:
                </Text>{" "}
                Jak grzecznie czekać na smakołyki, nie wyrywać rąk z jedzeniem i
                kontrolować swoje emocje w ekscytujących sytuacjach.
              </Text>
            </List.Item>
            <List.Item icon={<IconBone size={64} />}>
              <Text>
                <Text span fw={500}>
                  Budowania relacji na wyższym poziomie:
                </Text>{" "}
                Psiapodstawówka to nie tylko posłuszeństwo, ale też praca nad
                jeszcze głębszym zrozumieniem między tobą a twoim psem.
              </Text>
            </List.Item>
          </List>
          </Stack>
        </Stack>
        <Center visibleFrom="md">
        <Image src={img} radius={"10% 10%"}/>
        </Center>
      </SimpleGrid>
      <Stack bg={theme.colors.yellow[6]} pb={16} px={'15%'}>
      <Title order={2} fw={400}>
        Dlaczego w grupie?
      </Title>
      <Text >
        Twój pies nauczy się współpracować nawet w obecności innych psów i ludzi
        - bo prawdziwa grzeczność to umiejętność zachowania się w towarzystwie.
        A wszystko to w atmosferze przyjaznej zabawy i pozytywnych emocji!{" "}
      </Text>
      </Stack>
      <Title order={2} fw={400} my={16}>
        Psiapodstawówka - dla kogo?
      </Title>
      <SimpleGrid mx="10%" my={32} cols={{ base: 1, sm: 3 }}>
          <Text>
            Dla psów od 6. miesiąca życia, które opanowały podstawy, ale chcą
            nauczyć się więcej.
          </Text>
          <Text>
            Dla właścicieli, którzy marzą o psie, który zachowuje się jak
            wzorowy obywatel - zarówno w domu, jak i na świeżym powietrzu.
          </Text>
          <Text>
            Dla tych, którzy chcą zbudować z psem relację pełną zaufania,
            harmonii i... sztuczek, które zachwycą wszystkich!
          </Text>
      </SimpleGrid>
    </Box>
  );
};

export default Psiapodstawowka;
