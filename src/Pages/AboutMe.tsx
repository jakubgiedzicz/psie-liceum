import {
  Center,
  Container,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import about_me_img from "../assets/about_me_avatar.jpg";
import text_styles from "../styles/Text.module.css";
import test from '../assets/certificate-text-samples.jpg'
import { useLayoutEffect } from "react";
const AboutMe = () => {
  const theme = useMantineTheme();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid p={0}>
        <SimpleGrid
          mx={"10%"}
          cols={{ base: 1, md: 2 }}
          spacing={{ base: 64, xl: 96 }}
          verticalSpacing={{ base: 16 }}
        >
          <Stack justify="center">
            <Title
              order={1}
              c={theme.colors.yellow[6]}
              className={text_styles.title_shadow}
            >
              Weronika Roszkowska
            </Title>
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
          <Center>
            <Image src={about_me_img} radius={"50%"} px={"15%"} py={"5%"} />
          </Center>
        </SimpleGrid>
        <Divider my={8} size={"sm"} />
        <Title
          order={1}
          c={theme.colors.yellow[6]}
          className={text_styles.title_shadow}
        >
          Moje certyfikaty
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={32}
          verticalSpacing={{ base: 64 }}
          px={'10%'}
          mt={32}
        >
          <Image src={test}/>
          <Image src={test}/>
          <Image src={test}/>
          <Image src={test}/>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AboutMe;
