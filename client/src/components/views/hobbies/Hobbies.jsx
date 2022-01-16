import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import HobbyTile from "./hobbyTile/HobbyTile";
import { mockHobbies } from "./mockHobbies";

function Hobbies() {
  return (
    <Container maxW={"container.xl"} py={4} px={2}>
      <Grid templateColumns={"repeat(4, 1fr)"} gap={4} p={2}>
        {mockHobbies.map((hobby) => (
          <GridItem colSpan={[4, 2]} key={hobby.title}>
            <HobbyTile
              title={hobby.title}
              description={hobby.description}
              cover={hobby.cover}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}

export default Hobbies;
