import type { NextPage } from 'next';
import Head from 'next/head';

import BackButton from '../components/BackButton';
import CountryInfo from '../components/CountryInfo';
import HomeLink from '../components/HomeLink';
import { MainBox, TabHeader } from '../styles/sharedComponent';

const CountryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Rest Coutries API</title>
        <meta name="description" content="Detail Country from the API" />
      </Head>

      <MainBox>
        <TabHeader>
          <BackButton />
          <HomeLink />
        </TabHeader>
        <CountryInfo />
      </MainBox>
    </>
  );
};

export default CountryPage;
