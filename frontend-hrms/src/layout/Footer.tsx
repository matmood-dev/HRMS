// src/layout/Footer.tsx
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <CopyText>© {new Date().getFullYear()} {t("footer.rights")}</CopyText>
        <LanguageSwitcherWrapper>
          <LanguageSwitcher />
        </LanguageSwitcherWrapper>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--color-bg);
  border-top: 1px solid #e0e0e0;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  color: var(--color-muted);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.02);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CopyText = styled.div`
  text-align: center;
`;

const LanguageSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Footer;
