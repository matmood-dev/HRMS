// src/pages/HomePage.tsx
import React from "react";
import Layout from "../layout/Layout";
import WelcomeSection from "../components/PagesComponents/HomePage/WelcomeSection";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <WelcomeSection />
    </Layout>
  );
};

export default HomePage;