import { combineReducers } from 'redux';
import leads from './leads';
import marketings from './marketings';
import customers from './customers';
import productds from './productds';
import productos from './productos';
import humanresources from './humnresources';
import profitls from './profitls';





import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  profitls,
  humanresources,
  productos,
  productds,
  customers,
  marketings,
  leads,
  errors,
  messages,
  auth,
});
