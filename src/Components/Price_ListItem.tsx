import { List, Stack, Title, Text } from "@mantine/core";

type Props = {
  title: string;
  type: string;
  title2: string;
  desc: string;
  price: string;
};

const Price_ListItem = (props: Props) => {
  return (
    <>
      <List.Item>
        <Stack gap={0}>
          <Title order={3} fw={300} size="xl">
            {props.title}:{" "}
            <Text span fw={400} size="xl">
              {props.type}
            </Text>{" "}
            - {props.title2}
          </Title>
          <Text fs="italic" c="dark">
            {props.desc} - {" "}
            <Text span td="underline">
              Cena: {props.price}
            </Text>
          </Text>
        </Stack>
      </List.Item>
    </>
  );
};

export default Price_ListItem;
