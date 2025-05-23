import React from 'react';
import CollectionForm from './CollectionForm';
import DesignPanel from './DesignPanel';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CollectionForm />
        <DesignPanel />
      </div>
    </main>
  );
};

export default MainContent;