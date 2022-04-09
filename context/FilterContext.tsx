import React, { useState } from 'react';

interface FilterProps {
  keyword: string;
  region: string;
  setRegion?: React.Dispatch<React.SetStateAction<string>>;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = React.createContext<FilterProps>({
  keyword: '',
  region: '',
});

const FilterProvider: React.FC = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const [region, setRegion] = useState('');

  return (
    <Filter.Provider value={{ keyword, setKeyword, region, setRegion }}>
      {children}
    </Filter.Provider>
  );
};

export default FilterProvider;
