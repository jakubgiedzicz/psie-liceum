import {
  List,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import text_styles from "../styles/Text.module.css";
import Price_ListItem from "../Components/Price_ListItem";
import { useEffect } from "react";

const Prices = () => {
  const theme = useMantineTheme();
  useEffect(() => {
      window.scrollTo(0, 0);
      document.title = "Psie Liceum - Cennik";
    }, []);
  return (
    <>
      <Stack className="paws_bg" px={'10%'}>
        <Stack pt={32}>
          <Title
            order={1}
            mt={16}
            className={
              text_styles.title2 +
              " " +
              text_styles.intro_text +
              " " +
              text_styles.title_shadow
            }
            c={theme.colors.yellow[6]}
          >
            Cennik usług - Menu Szczęśliwego Psa
          </Title>
          <Title order={2} fw={300} mb={32}>
            "Podaj łapę i wskocz na nowy poziom waszej wspólnej przygody!"
          </Title>
          <Title order={1} fw={400}>Oferta indywidualna</Title>
          <List
            size="xl"
            listStyleType="none"
            spacing={"md"}
            bd={"1px solid gray"}
            p={32}
            bg={theme.colors.gray[0]}
            id="oferta-indywidualna"
          >
            <Price_ListItem
              title="Przystawka"
              type="Konsultacja indywidualna"
              title2='"Pogadajmy o psiej duszy"'
              desc="Każdy problem ma swoje rozwiązanie - wystarczy tylko zrozumieć, co siedzi w głowie twojego psa. Pozwól mi być tłumaczem między światami!"
              price="150zł"
            />
            <Price_ListItem
              title="Przystawka dla najmłodszych"
              type="Konsultacja indywidualna szczeniaka"
              title2='"Szczenięce ABC"'
              desc="Idealny start dla małych łapek! Pomogę ci zadbać o to, by twój maluch czuł się bezpiecznie, uczył się szybciej i wyrósł na grzecznego towarzysza."
              price="150zł"
            />
            <Price_ListItem
              title="Danie główne"
              type="Zajęcia indywidualne"
              title2='"Wasza osobista ścieżka sukcesu"'
              desc="Nie ma dwóch takich samych psów, dlatego każde spotkanie dostosowuję do waszych potrzeb. Uczymy się, bawimy i zdobywamy nowe umiejętności!"
              price="150zł za zajęcia"
            />
            <Price_ListItem
              title="Specjał szefa kuchni"
              type="Pakiet zajęć indywidualnych"
              title2='"Marzenia na czterech łapach"'
              desc="Dajemy z siebie wszystko! Pakiet to intensywny kurs dla tych, którzy chcą widzieć trwałe efekty w wychowaniu swojego psa."
              price="950zł za 8 zajęć"
            />
            <Price_ListItem
              title="Dodatek"
              type="Konsultacja dietetyczna"
              title2='"Zdrowie w każdej misce"'
              desc="Twój pies zasługuje na zdrową i zbilansowaną dietę - pomogę ci dobrać idealny plan żywieniowy, który sprawi, że ogon nie przestanie merdać!"
              price="150zł"
            />
          </List>
          <Title order={1} fw={400} mt={32}>Oferta grupowa</Title>
          <List
            size="xl"
            listStyleType="none"
            spacing={"md"}
            bd={"1px solid gray"}
            p={32}
            bg={theme.colors.gray[0]}
            id="oferta-grupowa"
          >
            <Price_ListItem
              title="Zajęcia grupowe"
              type="Psieprzedszkole"
              title2='"Pierwsze kroki w wielkim psim świecie" (szczeniaki do 6 miesiąca zycia)'
              desc="Szczeniaki uczą się świata, a my uczymy szczeniaki. Socjalizacja, podstawy posłuszeństwa i mnóstwo frajdy - start w życie, którego nigdy nie zapomnicie!"
              price="400zł za kurs (8 zajęć)"
            />
            <Price_ListItem
              title="Zajęcia grupowe"
              type="Psiapodstawówka"
              title2='"Klasa z wyższym poziomem merdania" (szczeniaki od 6 miesiąca zycia)'
              desc="Dla psich juniorów, którzy chcą opanować komendy i grzeczność do perfekcji. Zajęcia grupowe, które uczą i bawią - tak, że każdy pies będzie gwiazdą podwórka! "
              price="400zł za kurs (8 zajęć)"
            />
          </List>
          <Title order={3} size='xl'>
            Bonus -  Twoje zwierzę na zawsze w sercu i na skórze!
          </Title>
          <Text size="xl">Chcesz uwiecznić swojego pupila w wyjątkowy sposób? Moje tatuaże to małe dzieła sztuki, które oddają charakter twojego czworonożnego przyjaciela. -
            <Text span fw={400} size="xl" fs='italic' c='dark'> Cena: ustalana indywidualnie</Text>
          </Text>
          <Text fs='italic' size="lg" fw={400} c={theme.colors.gray[8]} my={16}>"Nie tylko uczymy psy - uczymy ludzi, jak je kochać jeszcze bardziej."</Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Prices;
