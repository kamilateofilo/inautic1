import React from 'react';
import { View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import * as shape from 'd3-shape';


  const data = [
    {
      id: '1',
      label: 'COnsumo Médio',
      value: 55,
      svg: { fill: '#570095' },
   },
   {
      id: '2',
      label: 'Consumo Médio',
      value: 60,
      svg: { fill: '#1C1C1C' },
   },
//    {
//       id: '1',
//       label: 'Eficiência',
//       value: 75,
//       svg: { fill: '#8D9440' },
//    },
//    {
//       id: '2',
//       label: 'Potência',
//       value: 40,
//       svg: { fill: '#570095' },
//    },
//    {
//       id: '2',
//       label: 'Rendimento',
//       value: 80,
//       svg: { fill: '#1C1C1C' },
//    },
//    {
//       id: '2',
//       label: 'Eficiência',
//       value: 65,
//       svg: { fill: '#8D9440' },
//    },
  //  {
  //     id: '3',
  //     label: 'Potência',
  //     value: 30,
  //     svg: { fill: '#570095' },
  //  },
  //  {
  //     id: '3',
  //     label: 'Rendimento',
  //     value: 60,
  //     svg: { fill: '#1C1C1C' },
  //  },
  //  {
  //     id: '3',
  //     label: 'Eficiência',
  //     value: 55,
  //     svg: { fill: '#8D9440' },
  //  },
  ];
  
  export default data;
    





