import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  background-color: #ffcc00;
  padding: 20px;
  text-align: center;
  color: #333;
`;

const Header = () => (
  <HeaderContainer initial={{ y: -250 }} animate={{ y: 0 }}>
    <h1>Your Name</h1>
    <p>Web Developer & Designer</p>
  </HeaderContainer>
);

export default Header;