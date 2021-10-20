import { Box, Image, Text } from '@chakra-ui/core';
import React, { Component } from 'react';
interface AppProps {}
interface AppState {}

class Hello extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Box
          m="8px"
          p="8px"
          border="1px"
          rounded="10px"
          borderColor="gray.300"
          boxShadow="md"
          bg="lavender"
          color="#2d383c"
          fontSize="2rem"
          textAlign="center"
          fontFamily="Consolas"
          w="400px"
          h="400px"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          aperiam doloremque exercitationem saepe, sed modi odit officia illum
          iste vel? Rerum dignissimos pariatur, odit impedit iste aperiam facere
          atque iure!{' '}
        </Box>
        <Box
          m="8px"
          p="8px"
          border="1px"
          rounded="10px"
          borderColor="gray.300"
          boxShadow="md"
          bg="lavender"
          color="#2d383c"
          fontSize="2rem"
          textAlign="center"
          fontFamily="Consolas"
          w="400px"
          h="400px"
        >
          <Image
            rounded="0.5rem"
            src="https://finalspaceapi.com/img/gary_goodspeed.webp"
            alt="Gary Goodspeed"
          />
          <Text>Gary Goodspeed</Text>
        </Box>
      </div>
    );
  }
}

export default Hello;
