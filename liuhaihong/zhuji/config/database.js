//app id 
export const aid = '1'
//商家信息
export const business_config = {
  name:'诸商A车管家',
  logo:'/images/logo.png',
  business_hours:'诸暨商会互联网汽车服务共享平台',
  mobile:'0571-87335888',
}
//轮播图数据
export const carousel = [
  {
    imgUrl:'/images/carousel.png'
  },
  {
    imgUrl: '/images/carousel.png'
  },
  {
    imgUrl: '/images/carousel.png'
  }
]
//轮播图配置
export const carousel_config = {
  indicator_dots:true,
  autoPlay:true,
  indicator_color:'rgba(255,255,255,.4)',
  indicator_active_color:'#fff',
  interval:5000,
  duration:1000,
  circular:true
}
//导航趣数据
export const function_tab = [
  {
    path:'8',
    icon:'/images/custom.png',
    name:'4s店买车修车',
    limits:0
  },
  {
    path: '2',
    icon: '/images/custom.png',
    name: '专业店修车养护',
    limits:0
  },
  {
    path: '3',
    icon: '/images/custom.png',
    name: '车辆保险',
    limits:3
  },
  {
    path: '4',
    icon: '/images/custom.png',
    name: '折扣油卡',
    limits:2
  },
  {
    path: '5',
    icon: '/images/custom.png',
    name: '二手车评估',
    limits:3
  },
  {
    path: 'feedback',
    icon: '/images/custom.png',
    name: '咨询·反馈'
  },
  {
    path: 'service',
    icon: '/images/custom.png',
    name: '服务评价'
  },
]
//0 下一级是分类 1 下一级是详情
export const [IS_CLASSIFY, IS_DETAIL] = [0, 1] 

//0 底部菜单包含导航和电话  1  底部只有预约   2  只有拨打电话

export const [INTACT,ORDER,CALL] = [0, 1,2] 

