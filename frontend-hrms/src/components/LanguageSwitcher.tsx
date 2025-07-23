import React from "react";
import { Select } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <StyledWrapper>
      <GlobalOutlined className="globe-icon" />
      <StyledSelect
        value={i18n.language}
        onChange={(value) => i18n.changeLanguage(value as string)}
        suffixIcon={null}
      >
        <Option value="en">
          <span style={{ whiteSpace: "nowrap" }}>English</span>
        </Option>
        <Option value="ar">
          <span style={{ whiteSpace: "nowrap" }}>العربية</span>
        </Option>
      </StyledSelect>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 6px 12px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border, #ccc);
  border-radius: 8px;

  .globe-icon {
    font-size: 18px;
    color: var(--color-text);
  }
`;

const StyledSelect = styled(Select)<{ value?: string }>`
  min-width: 100px;

  .ant-select-selector {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 500;
    padding-inline-start: 0 !important;
    text-align: left;
  }

  .ant-select-selection-item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .ant-select-dropdown {
    min-width: 110px !important;
  }

  .ant-select-item-option-content {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .ant-select-arrow {
    display: none;
  }
`;

export default LanguageSwitcher;
