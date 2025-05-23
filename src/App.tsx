import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <MantineProvider>
        <Layout>
          <Header />
          <MainContent />
          <Footer />
        </Layout>
      </MantineProvider>
    </div>
  );
}

export default App;