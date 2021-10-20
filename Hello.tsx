import { Box } from '@chakra-ui/core';
import React, { Component } from 'react';
interface AppProps {}
interface AppState {}

class Hello extends Component<AppProps, AppState> {
  render() {
    return (
      <Box
        bg="lavender"
        color="#2d383c"
        fontSize="2rem"
        textAlign="center"
        fontFamily="Consolas"
        w="400px"
        h="400px"
      >
        Hello World!
      </Box>
    );
  }
}

export default Hello;
