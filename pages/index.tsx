import type { NextPage } from 'next';
import Head from 'next/head';

import FilterForm from '../components/FilterForm';
import SearchForm from '../components/SearchForm';
import { FilterSection, MainBox } from '../styles/sharedComponent';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Rest Coutries API</title>
        <meta name="description" content="All Countries from the API" />
      </Head>

      <MainBox>
        <FilterSection aria-label="Filter Countries">
          <SearchForm />
          <FilterForm />
        </FilterSection>
        <section aria-label="List of Countries">Country List Component</section>
      </MainBox>
    </>
  );
};

export default Home;
