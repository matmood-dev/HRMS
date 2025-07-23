import React from "react";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeContext";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === "light" ? <BulbOutlined /> : <BulbFilled />}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  color: var(--color-text);

  &:hover {
    transform: scale(1.15);
  }

  svg {
    vertical-align: middle;
  }
`;

export default ThemeToggle;
