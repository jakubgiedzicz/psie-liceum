import {
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import img from "../assets/beautiful-adorable-little-puppy-cute-600nw-2360693945.webp";
const Behavioral = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Title order={3} fw={300} size={"xl"} my={16}>
        Przystawka:{" "}
        <Text span fw={400} size="xl">
          Konsultacja indywidualna
        </Text>{" "}
        - "Pogadajmy o psiej duszy"
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Image src={img} radius={"10% 10%"} />
        <Stack px={32} ta={"left"} justify="center">
          <Text>
            Każdy pies ma swoją historię, a ja jestem tu, by ją zrozumieć.
            Podczas tej konsultacji porozmawiamy o wszystkim, co was trapi - od
            problemów z zachowaniem po pytania o codzienne życie. Razem
            znajdziemy rozwiązania, które przyniosą ulgę zarówno tobie, jak i
            twojemu psu.
          </Text>
          <Text fw={500}>W menu znajdziesz:</Text>
          <List>
            <List.Item>
              Rozpoznania problemu i dokładnej analizy zachowania twojego psa.
            </List.Item>
            <List.Item>
              Prostych, a jednocześnie skutecznych wskazówek, które będziesz
              mógł wdrożyć od razu po naszej konsultacji.
            </List.Item>
            <List.Item>
              Zrozumienia emocji twojego psa - bo każde zachowanie ma swoją
              przyczynę.
            </List.Item>
          </List>
          <Text fw={500}>Dla kogo?</Text>
          <Text>
            Dla właścicieli, którzy chcą znaleźć rozwiązanie dla swojego psa,
            zbudować lepszą relację i stworzyć codzienność pełną harmonii.
          </Text>
        </Stack>
      </SimpleGrid>
      <Title order={3} fw={300} size={"xl"} my={16}>
        Przystawka dla najmłodszych:{" "}
        <Text span fw={400} size="xl">
          Konsultacja indywidualna szczeniaka
        </Text>{" "}
        - "Szczenięce ABC"
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack px={32} ta={"left"} justify="center">
          <Text>
            Twój maluch dopiero poznaje świat, a ty chcesz być pewny, że dajesz
            mu najlepszy start? Konsultacja indywidualna szczeniaka to wasz
            pierwszy krok w stronę harmonii, bezpieczeństwa i dobrych nawyków od
            samego początku.
          </Text>
          <Text fw={500}>W menu znajdziesz:</Text>
          <List>
            <List.Item>
              Podpowiedzi, jak wprowadzić szczeniaka do nowego domu - od
              pierwszego dnia po dalsze tygodnie.
            </List.Item>
            <List.Item>
              Rozwiązania na typowe problemy młodych psiaków: gryzienie,
              załatwianie się w domu, nadmierna ekscytacja.
            </List.Item>
            <List.Item>
              Mini-szkolenie z podstawowych zasad: jak prawidłowo bawić się z
              psem, budować więź i wprowadzać pierwsze komendy ('siad',
              'zostań').
            </List.Item>
            <List.Item>
              Wskazówki dotyczące socjalizacji i przyzwyczajania szczeniaka do
              nowych dźwięków, ludzi i miejsc.
            </List.Item>
          </List>
          <Text fw={500}>Dla kogo?</Text>
          <Text>
            Dla właścicieli szczeniąt, którzy chcą dać swojemu maluchowi
            bezpieczny i szczęśliwy start w nowym domu.
          </Text>
        </Stack>
        <Image src={img} radius={"10% 10%"} />
      </SimpleGrid>
      <Title order={3} fw={300} size={"xl"} my={16}>
        Danie główne:{" "}
        <Text span fw={400} size="xl">
          Zajęcia indywidualne
        </Text>{" "}
        - "Wasza osobista ścieżka sukcesu"
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack px={32} ta={"left"} justify="center">
          <Text>
            To twój czas, twojego psa i mój pełny fokus. Zajęcia indywidualne to
            idealna opcja, by pracować nad konkretnymi umiejętnościami i
            wyzwaniami. Każdy trening to krok w stronę harmonii, posłuszeństwa i
            radości życia.
          </Text>
          <Text fw={500}>W menu znajdziesz:</Text>
          <List>
            <List.Item>
              Budowanie solidnych fundamentów posłuszeństwa: siad, leżeć,
              zostań, przywołanie i wiele więcej.
            </List.Item>
            <List.Item>
              Rozwiązywaniu konkretnych problemów, takich jak ciągnięcie na
              smyczy, skakanie na ludzi czy ignorowanie komend.
            </List.Item>
            <List.Item>
              Pracy nad skupieniem psa, nawet w trudnych sytuacjach i w
              obecności rozproszeń.
            </List.Item>
            <List.Item>
              Budowaniu relacji opartej na zaufaniu i współpracy - bo
              posłuszeństwo to nie tylko komendy, ale więź między tobą a twoim
              psem.
            </List.Item>
          </List>
          <Text fw={500}>Dlaczego zajęcia indywidualne?</Text>
          <Text>
            Bo twój pies zasługuje na pełne skupienie i trening dopasowany do
            jego wyjątkowego charakteru.
          </Text>
        </Stack>
        <Image src={img} radius={"10% 10%"} />
      </SimpleGrid>
      <Title order={3} fw={300} size={"xl"} my={16}>
      Specjał szefa kuchni:{" "}
        <Text span fw={400} size="xl">
        Pakiet zajęć indywidualnych
        </Text>{" "}
        - "Marzenia na czterech łapach"
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Stack px={32} ta={"left"} justify="center">
          <Text>
          Chcesz widzieć trwałe efekty i zbudować z psem relację, która przetrwa wszystko? Pakiet zajęć indywidualnych to możliwość pracy w dłuższej perspektywie – więcej czasu, więcej nauki, więcej sukcesów! 
          </Text>
          <Text fw={500}>W menu znajdziesz:</Text>
          <List>
            <List.Item>
            Kompleksowy plan szkoleniowy dostosowany do potrzeb twojego psa. 
            </List.Item>
            <List.Item>
            Regularną pracę nad posłuszeństwem, zachowaniem i budowaniem pewności siebie psa. 
            </List.Item>
            <List.Item>
            Indywidualne wsparcie i wskazówki na każdym etapie. 
            </List.Item>
          </List>
          <Text fw={500}>Dla kogo?</Text>
          <Text>
          Dla tych, którzy wierzą, że ich pies zasługuje na najlepsze życie i są gotowi na systematyczną pracę.
          </Text>
        </Stack>
        <Image src={img} radius={"10% 10%"} />
      </SimpleGrid>
    </>
  );
};

export default Behavioral;
