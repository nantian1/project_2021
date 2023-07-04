import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/eduUser/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/eduUser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/eduUser/logout',
    method: 'post'
  })
}


export function personFace(data) {
  return request({
    url: '/face/vef',
    method: 'post',
    data
  })
}
