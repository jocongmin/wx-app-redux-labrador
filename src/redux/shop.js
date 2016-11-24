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
  createAction,
  handleActions
} from 'redux-actions';
import immutable from 'seamless-immutable';

export const TESTACTION = 'TESTACTION';
export const GET_LIST_DATA = 'GET_LIST_DATA';

// 请求登录action
export const testAction = createAction(TESTACTION);
export const getListData = createAction(GET_LIST_DATA);

// 初始state
export const INITIAL_STATE = immutable({
  testData: 0
});

export default handleActions({
  TESTACTION: (state, action) =>
    state.merge({
      testData: action.payload.testData
    }),
  GET_LIST_DATA: (state, action) =>
    state.merge({
      listData: listData.concat(listData),
    }),
}, INITIAL_STATE);