import { Box, Center, Container, Group, Image, Stack, Title } from "@mantine/core";
import about_me_img from "../assets/about_me_avatar.jpg";

const AboutMe = () => {
  return (
    <Container fluid p={0} bg={"red"}>
      <Group justify="center">
        <Stack>
          <Title>
            Weronika Roszkowska, 
          </Title>
        </Stack>
        <Center>
          <Image src={about_me_img} radius={"50% 50%"} />
        </Center>
      </Group>
    </Container>
  );
};

export default AboutMe;
