import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { motion, MotionProps } from 'framer-motion';
import Hello from './Hello';
import { Heading } from '@chakra-ui/core';

export default function App() {
  return (
    <div>
      <Heading>Welcome to Chakra + TS</Heading>
      <Hello />
    </div>
  );
}
