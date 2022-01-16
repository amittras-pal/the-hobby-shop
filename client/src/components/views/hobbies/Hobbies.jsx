import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import HobbyTile from "./hobbyTile/HobbyTile";
import { mockHobbies } from "./mockHobbies";

function Hobbies() {
  return (
    <Container maxW={"container.xl"} py={4} px={2}>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={4} p={2}>
        {mockHobbies.map((hobby) => (
          <HobbyTile
            title={hobby.title}
            description={hobby.description}
            cover={hobby.cover}
            key={hobby.title}
            link={hobby.link}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default Hobbies;
