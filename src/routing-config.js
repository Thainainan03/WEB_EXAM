import React from 'react'
import { Redirect } from 'react-router'
import { Home ,President} from './Components'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/president',
    'component': President,
  },
];
export default routes;
