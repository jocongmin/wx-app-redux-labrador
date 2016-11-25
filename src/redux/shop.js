const listData = [{
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:30000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:325000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:300580步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:305000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:306000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, {
  img: '../../image/pro-img.png',
  tit: '沃尔玛抵用券:301000步'
}, ];


import {
  createAction
} from 'redux-actions';
import Immutable from 'seamless-immutable';


// Action Types - LOAD, CREATE, UPDATE, REMOVE
export const TESTACTION = 'TESTACTION';
export const GET_LIST_DATA = 'GET_LIST_DATA';

// 请求登录action
export const testAction = createAction(TESTACTION);
export const getListData = createAction(GET_LIST_DATA);


// Reducer
const initialState = Immutable({
  testData: 0,
  page: 0,
  listData: [],
});
export default function reducer(state = initialState, action: FluxStandardAction < any > ) {
  if (action.type == TESTACTION) {
    console.log(action, 'test----------')
    return state.merge({
      testData: action.payload.testData
    });
  } else if (action.type == GET_LIST_DATA) {
    console.log(action, 'get-list-data------')
    let oldData = action.payload.oldData;
    let newGetData = listData;
    let sendData = oldData.concat(newGetData);
    return state.merge({
      listData: sendData,
    });
  } else {
    return state;
  }
}