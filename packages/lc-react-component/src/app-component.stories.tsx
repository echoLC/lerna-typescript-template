import React from 'react'
import AppComponent from '.'
 
export default {
  component: AppComponent,
  title: 'AppComponent'
}

export const AppReactComponent = () => <AppComponent name='react' />
export const AppVueComponent = () => <AppComponent name='vue' />