import { Gender, User } from './../../models/GeneralTypes'

export interface FetchUserListRes {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}

export interface QueryCondition {
  global: {
    results: number
    gender: Gender
    nat: string
  }
  local: {
    nat: string
  }
}

export { Gender, User }
