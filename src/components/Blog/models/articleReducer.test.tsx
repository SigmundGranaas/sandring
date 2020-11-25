import {articlesReducer} from './articleReducer'
import * as actionTypes from '../interfaces/iArticle'
import { PostState } from '../interfaces/iArticle'
import { ARTICLES_ERROR } from '../../../store/types'
import MockPostService from '../services/MockPostService/MockPostService'
import React from 'react'

const initialState: PostState = {
    loading: false,
}

const MockService = new MockPostService()

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(articlesReducer(initialState , {type: ARTICLES_ERROR} )).toEqual(
      {
        loading: false
      }
    )
  })


  it('should GET_ARTICLES_SUCCESS', async () => {
    expect(
        articlesReducer(initialState, {
        type: actionTypes.GET_ARTICLES_SUCCESS,
        payload: await MockService.fetchMultiplePosts(),
      })
    ).toEqual(
      {
        articles: MockService.fetchMultiplePosts(),
        loading: false,
      }
    )
  })

  it('should GET_SINGLE_ARTICLES_SUCCESS', async () => {
    expect(
        articlesReducer(initialState, {
        type: actionTypes.GET_SINGLE_ARTICLE_SUCCESS,
        payload: await MockService.fetchSinglePost(1),
      })
    ).toEqual(
      {
        singleArticle: MockService.fetchSinglePost(1),
        loading: false,
      }
    )
  })

  it('should Trigger ARTICLES_LOADING', () => {
    expect(
        articlesReducer(initialState, {
        type: actionTypes.ARTICLES_LOADING,
      })
    ).toEqual(
      {
        loading: true,
      }
    )
  })

  it('should Trigger ARTICLES_ERROR', () => {
    expect(
        articlesReducer(initialState, {
        type: actionTypes.ARTICLES_ERROR,
      })
    ).toEqual(
      {
        loading: false,
      }
    )
  })
})