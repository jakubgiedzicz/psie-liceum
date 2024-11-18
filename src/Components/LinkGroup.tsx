import { Link } from "react-router-dom";
import { Box, Group, Text } from "@mantine/core";

type Props = {
  burger: boolean;
};

const LinkGroup = (props: Props) => {
  const isBurger = (burger: boolean) => {
    if (burger) {
      return (
        <Link to={"/"}>
          <Text>Logo</Text>
        </Link>
      );
    }
  };
  return (
    <>
    {isBurger(props.burger)}
      <Link to={"o-mnie"}>
        <Text>O mnie</Text>
      </Link>
      <Link to={"oferta"}>
        <Text>Usługi</Text>
      </Link>
      <Link to={"kontakt"}>
        <Text>Kontakt</Text>
      </Link>
      <Link to={"blog"}>
        <Text>Blog</Text>
      </Link>
    </>
  );
};

export default LinkGroup;
