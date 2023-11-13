import React from 'react';
import { infoExtra } from '@/static/data/infoExtra';
import { InfoExtra } from './InfoExtra';


export const InfoGrid = () => {

  return (
    <div>
      {
        infoExtra.map((info, index) => (
            <InfoExtra key={index} info={{...info,index}}></InfoExtra>
        ))
      }
    </div>
  )
}
