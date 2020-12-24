import request from './request'
import { stringify, exchangeEmpty } from '../lib/common'

// 0已取消 1已下单 2 已完成

// 登录
export function login(params) {
  return request({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

// 登出
export function logout() {
  return request({
    url: '/user/logout',
    method: 'get',
  })
}

// 获取用户信息
export function getUserProfile() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}

//  注册_电话
export function registerPhone(params) {
  return request({
    url: '/user/register',
    method: 'post',
    data: params
  })
}

//  注册_邮箱
export function registerEmail(params) {
  return request({
    url: '/user/register_email',
    method: 'post',
    data: params
  })
}

//  修改密码
export function modifyPassword(params) {
  return request({
    url: '/user/modifyPassword',
    method: 'post',
    data: params
  })
}

// 获取产品列表
export function getProductList() {
  return request({
    url: '/product/index',
    method: 'get',
  })
}

// 获取选择的产品列表
export function getSelectedProduct(params) {
  const data = stringify(params)
  return request({
    url: '/product/order?' + data,
    method: 'get',
  })
}

// 提交订单
export function addOrder(params) {
  return request({
    url: '/order/add',
    method: 'post',
    data: params
  })
}

// 获取订单列表
export function getOrderList(params) {
  const data = exchangeEmpty(params)
  return request({
    url: '/order/list',
    method: 'post',
    data
  })
}

// 取消订单
export function cancelOrder(params) {
  return request({
    url: '/order/cancel',
    method: 'post',
    data: params
  })
}

// 订单详情
export function getOrderDetail(params) {
  const data = stringify(params)
  return request({
    url: '/order/info?' + data,
    method: 'GET',
  })
}
