import { matches_mock} from '@/utils';


export const getMatchInfo = async( code: string ) => {
  
    try {
        const match = matches_mock.find((match) => match.code == code);
        return match;
    } catch (error) {
        return null;
    }



}