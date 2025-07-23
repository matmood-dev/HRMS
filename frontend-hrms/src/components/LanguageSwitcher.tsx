// src/components/LanguageSwitcher.tsx
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <Dropdown value={i18n.language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </Dropdown>
  );
};

const Dropdown = styled.select`
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border, #ccc);
  appearance: none;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(0, 138, 173, 0.2);
  }

  &:hover {
    border-color: var(--color-primary);
  }

  option {
    color: #000;
  }
`;

export default LanguageSwitcher;
