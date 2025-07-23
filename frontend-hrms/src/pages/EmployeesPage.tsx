// src/pages/EmployeesPage.tsx
import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

// Dummy data
const data = [
  { id: "1", name: "Ahmed Ali", department: "HR", status: "Active" },
  { id: "2", name: "Fatima Yusuf", department: "IT", status: "Inactive" },
  { id: "3", name: "Mohamed Salman", department: "Finance", status: "Active" },
];

const EmployeesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Header>
        <Title>{t("employees.title")}</Title>
        <AddButton>
          <PlusOutlined />
          {t("employees.add")}
        </AddButton>
      </Header>

      <Table>
        <thead>
          <tr>
            <Th>{t("employees.name")}</Th>
            <Th>{t("employees.department")}</Th>
            <Th>{t("employees.status")}</Th>
            <Th>{t("employees.actions")}</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <Td>{emp.name}</Td>
              <Td>{emp.department}</Td>
              <Td>
                <Status $active={emp.status === "Active"}>
                  {t(`employees.statuses.${emp.status.toLowerCase()}`)}
                </Status>
              </Td>
              <Td>
                <ActionGroup>
                  <ActionBtn>
                    <EditOutlined />
                  </ActionBtn>
                  <ActionBtn danger>
                    <DeleteOutlined />
                  </ActionBtn>
                </ActionGroup>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
};

export default EmployeesPage;

// Styled Components

const Wrapper = styled.div`
  padding: 2rem;
  background-color: var(--color-bg);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text);
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-primary);
  color: var(--color-bg);
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 12px;
`;

const Th = styled.th`
  text-align: left;
  padding: 16px;
  color: var(--color-muted);
  font-weight: 600;
  font-size: 0.95rem;
`;

const Td = styled.td`
  padding: 16px;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-size: 0.95rem;
  border-radius: 6px;

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const Status = styled.span<{ $active: boolean }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: ${({ $active }) =>
    $active ? "#b0ff65" : "#ff3539"};
  color: var(--color-bg);
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionBtn = styled.button<{ danger?: boolean }>`
  border: none;
  background-color: ${({ danger }) =>
    danger ? "#ff3539" : "#000"};
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

