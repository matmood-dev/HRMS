// src/layout/Footer.tsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--color-bg);
  border-top: 1px solid #e0e0e0;
  padding: 1.5rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-muted);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.02);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Humx HRMS. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
