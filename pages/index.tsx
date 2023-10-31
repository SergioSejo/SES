import type { NextPage, GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { Home } from '@/components/ui/Home';
import { Match } from '@/interfaces';

const HomePage: NextPage= (props) => { 
  console.log({props});
  return (
    <Layout title='SES'>
      <Home></Home>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const firstMatch: Match = {
    _id: '1',
    team1: '',
    team2: '',
    date: '',
    goalScorers: [{name: 'Sergio', goals: 1},{name: 'Palomo', goals: 1}],
    goalsComments: '',
    assistants: [{name: 'Palomo', assistances: 1},{name: 'Kike', assistances: 1}],
    assistantsComments: '',
    cards: [{name: 'Palomo', cards: 1}],
    cardsComments: '',
  }

  return {
    props: {
      matches: firstMatch
    }
  }
}

export default HomePage;
