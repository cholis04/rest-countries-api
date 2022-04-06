import type { NextPage } from 'next';
import Head from 'next/head';
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
          <form name="filter-form">
            <select name="region" id="region" aria-label="Filter by Region">
              <option value="" disabled selected>
                Filter by Region
              </option>
              <option value="Afrika">Afrika</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Ocenia">Ocenia</option>
            </select>
          </form>
        </FilterSection>
        <section aria-label="List of Countries">Country List Component</section>
      </MainBox>
    </>
  );
};

export default Home;
