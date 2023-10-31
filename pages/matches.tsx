import { FC } from 'react';
import type { GetStaticProps } from 'next';
import { MatchGrid } from '@/components/matches/MatchGrid';
import { Layout } from '@/components/layouts';
import { Match } from '@/interfaces';

interface Props {
  matches: Match[];
}

export const matchesPage:FC<Props> = ({matches}) => {
  return (
    <>
      <Layout title='Partidos'>
        <MatchGrid matches={matches}></MatchGrid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const matches: Match[] = [
    {
      _id: '1',
      code: '1-1',
      team1: 'Artilleros',
      team2: 'Sad Eyes',
      date: '02/10/2016',
      goalScorers: [{name: 'Sergio', goals: 1},{name: 'Palomo', goals: 1}],
      goalsComments: 'Hector haciendo palomadas y recibió un patadón. Salva de portero esplendido y en general les meamos y estaban to picados. Ante la chilena de palomo, algunos comentaron algunas cosas. Primera victoria del Sad Eyes team. Dicen que porra de rubwu. 1-7.',
      assistants: [{name: 'Palomo', assistances: 1},{name: 'Kike', assistances: 1}],
      assistantsComments: 'Nada que decir, que lo de las asistencias puede sern un canteo. Y que palomo por chupon en el gol de sergio no tiene asistencia.',
      cards: [{name: 'Palomo', cards: 1}],
      cardsComments: 'Juego Limpio.',
    },
    {
      _id: '2',
      code: '1-2',
      team1: 'Sad Eyes',
      team2: 'Gang&s of Tito',
      date: '09/10/2016',
      goalScorers: [{name: 'Sergio', goals: 2},{name: 'Kike', goals: 1}],
      goalsComments: 'Ellos eran 12 y nosotros 7, partido difícil hasta el gol de sergio casi al acabar la primera parte y luego gol de ruben justo antes de acabar. En la segunda parte se metieron gol en propia. Ya salimos, y tocamos más. Adri falla mas que torres. Tuvimos ocasiones para meter un montón. Gol de sergio a la escuadra, y rubén se la roba al defensa y mete le útlimo. El otro equipo se pica. Al final pisan a sergio y no despeja, el balón cae en Hector que intenta una porra y no le sale, luego el contrario centra y sergio desde el suelo se la cuela en propia sin querer. 6-2 final, gran partido.',
      assistants: [{name: 'Palomo', assistances: 1},{name: 'Rubén', assistances: 1}],
      assistantsComments: 'Asistencia de Rubén que deja pasar palomo para que Sergio la pise y la ponga en la escuadra de tiro cruzado. Jugada de flipaos donde falla adri ruben la coge palomo e intenta un sombrero al portero…del 7-1 que podíamos haber tenido a después, el 6-2.',
      cards: [{name: 'Adrián', cards: 1}],
      cardsComments: 'Juego Limpio.',
    }
  ];

  return {
    props: {
      matches
    }
  }
}

export default matchesPage;