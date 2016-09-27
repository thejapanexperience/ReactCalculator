import React from 'react';
import { render } from 'react-dom';

import './stores/CalcStore'; /* Allow store to initialise immediately*/

import Layout from './components/Layout'; /*use Layout instead of App*/

render(
  <Layout />,
  document.getElementById('root')
)