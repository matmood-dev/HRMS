// src/components/LanguageSwitcher.tsx
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    document.documentElement.dir = selectedLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <Select value={i18n.language} onChange={handleChange} aria-label="Select language">
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </Select>
  );
};

const Select = styled.select`
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 600;
  background: transparent;
  border: 1px solid var(--color-muted);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  option {
    color: black;
  }
`;

export default LanguageSwitcher;
