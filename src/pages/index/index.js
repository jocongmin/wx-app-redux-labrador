import wx, {
  Component,
  PropTypes
} from 'labrador-immutable';

import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'labrador-redux';
import * as todoActions from '../../redux/shop.js';
const {
  array,
  func
} = PropTypes;

class Index extends Component {
  static propTypes = {
    shopState: array,
    testTodo: func,
    getListData: func,
  };
  state = {
    imgUrls: [
      '../../image/banner-img.png',
      '../../image/banner-img.png',
      '../../image/banner-img.png'
    ],
    proData: null,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  };
  onLoad() {
    this.props.getListData();
    var listData = this.props.shopState.listData;
    this.setState({
      proData: listData
    });
  }
  onPullDownRefresh() {
    wx.showNavigationBarLoading();
    this.setState({
      proData: listData
    })
    setTimeout(function() {
      wx.hideNavigationBarLoading();
    }, 1000)
  }
  loadMore() {
    var Rand = (Math.random()) * 1000;
    this.props.testTodo({
      testData: Rand
    })
    console.log(this.props.shopState.testData, 'testData--------'); //成功触发数据
    this.props.getListData();
    var newData = this.props.shopState.listData;
    if (newData.length >= 60) {
      wx.showToast({
        title: '已经没有更多数据!',
        icon: 'success',
        duration: 1000
      })
      return;
    }
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 800
    })
    this.setState({
      proData: newData
    })
  }
}
export default connect(
  ({
    shopState
  }) => ({
    shopState
  }),
  (dispatch) => bindActionCreators({
    testTodo: todoActions.testAction,
    getListData: todoActions.getListData,
  }, dispatch)
)(Index);