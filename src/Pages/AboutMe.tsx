import {
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
const AboutMe = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Container fluid p={0}>
        <SimpleGrid
          mx={"10%"}
          cols={{ base: 1, md: 2 }}
          spacing={{ base: 64, xl: 96 }}
          verticalSpacing={{ base: 64 }}
        >
            <Stack justify="center">
              <Title order={1} c={theme.colors.yellow[6]}>
                Weronika
              </Title>
              <Text mt={16} fw={500}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                itaque dolore placeat temporibus! Facere deleniti soluta vitae
                dolore, voluptatibus reprehenderit repellendus sint vel sed
                asperiores repudiandae accusamus alias, enim fuga ullam quod
                similique officia ducimus reiciendis perferendis tenetur
                voluptates ut? Nam illo molestiae porro, voluptatem mollitia
                quam beatae odio quisquam.
              </Text>
            </Stack>
            <Image src={about_me_img} radius={"50%"} p={'15%'}/>
        </SimpleGrid>
        <Divider my={64} size={'sm'}/>
        xd
      </Container>
    </>
  );
};

export default AboutMe;
