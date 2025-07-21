// src/pages/HomePage.tsx
import React from "react";
import Layout from "../layout/Layout";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Title>Welcome to Humx HRMS</Title>
      <Subtitle>Manage your employees, payroll, leave, and more.</Subtitle>
      <Button onClick={() => alert("Start Managing")}>Get Started</Button>
    </Layout>
  );
};

export default HomePage;
