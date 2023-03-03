import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor="white" alignItems="flex-start" borderRadius="12px">
      <Image src={imageSrc} borderTopRadius="12px" alt={title} />
      <HStack p="10px">
        <Heading as="h3" size="12px" color="black">
          {title}
        </Heading>
      </HStack>
      <Text
        color="#64748b"
        fontSize="12px"
        paddingLeft="10px"
        paddingRight="10px"
      >
        {description}
      </Text>
      <HStack p="10px" fontSize="12px" color="black">
        <p>See more</p>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
