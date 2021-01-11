import request from './request'
import { stringify, exchangeEmpty } from '../lib/common'

// 0已取消 1已下单 2 已完成

// banner 列表
export function getBannerList() {
  return request({
    url: '/banner/list',
    method: 'post',
  })
}

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

//  发送短信验证码
export function sendPhoneCode(params) {
  return request({
    url: '/user/send_phone',
    method: 'post',
    data: params
  })
}

//   发送邮箱验证码
export function sendEmailCode(params) {
  return request({
    url: '/user/send_email',
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

//  修改电话
export function modifyPhone(params) {
  return request({
    url: '/user/modifyPhone',
    method: 'post',
    data: params
  })
}

//  修改邮箱
export function modifyEmail(params) {
  return request({
    url: '/user/modifyEmail',
    method: 'post',
    data: params
  })
}

//  找回密码
export function resetPassword(params) {
  return request({
    url: '/user/resetPassword',
    method: 'post',
    data: params
  })
}

//  首页 合作伙伴
export function getPartnerList() {
  return request({
    url: '/partner/list',
    method: 'post',
  })
}

// 获取产品列表
export function getProductList() {
  return request({
    url: '/product/index',
    method: 'get',
  })
}

// 获取产品_类型
export function getProductType() {
  return request({
    url: '/product/type',
    method: 'POST',
  })
}

// 获取选择的产品列表
export function getSelectedProduct(params) {
  return request({
    url: '/product/order',
    method: 'post',
    data: params
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

// 公告列表
export function getAnnounceList(params) {
  const data = stringify(params)
  return request({
    url: '/announcement/list?' + data,
    method: 'GET',
  })
}

// 公告详情
export function getAnnounceDetail(params) {
  const data = stringify(params)
  return request({
    url: '/announcement/info?' + data,
    method: 'GET',
  })
}

// 帮助中心
export function getHelpList(params) {
  const data = stringify(params)
  return request({
    url: '/help/list?' + data,
    method: 'GET',
  })
}

// 帮助详情
export function getHelpDetail(params) {
  const data = stringify(params)
  return request({
    url: '/help/info?' + data,
    method: 'GET',
  })
}
