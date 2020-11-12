import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { RouteComponentProps } from '@reach/router'
import { Layout } from './style'

import imgCalendar from "../Assets/Images/eva_calendar.png"
import imgClock from "../Assets/Images/eva_clock.png"

import {
  AppState,
  recoilState,
  LocalStorageKey,
  Routes,
} from '../dataStructure'

interface Props {
  path: Routes
}

const App: React.FC<Props & RouteComponentProps> = ({ path }) => {
  const appState = useRecoilValue<AppState>(recoilState)

  // if appState has changes, save it LocalStorage.
  useEffect((): void => {
    // console.log(path)
    console.log(appState)
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    )
  }, [appState])

  return (
    <Layout>
      <div className="todoapp">
        <ul className='mh2'>Workshops</ul>
        <ul className="items-number">
          <li className="txt">Displayed:</li>
          <li>13</li>
        </ul>
        <div className='row'>
          <div className='col-md-4'>
            <img 
              src={'https://secure.meetupstatic.com/photos/event/2/d/8/e/highres_482651662.jpeg'} 
              alt="item_image"/>
            <div className='item-info'>
              <div className='d-flex'>
                <div className='d-flex'>
                  <img className="calendar" src={imgCalendar} alt='calendar'/>
                  <p className="mh6 date">27.6.2020</p>
                </div>
                <div className='d-flex'>
                  <img className="calendar" src={imgClock} alt='clock'/>
                  <p className="mh6 date">09:00h</p>
                </div>
              </div>
              <p className='item-title'>Interaction Design Workshop</p>
            </div>

          </div>
          <div className='col-md-4'>
            <img 
              src={'https://secure.meetupstatic.com/photos/event/2/d/8/e/highres_482651662.jpeg'} 
              alt='img-no'/>        
          </div>
          <div className='col-md-4'>
            <img 
              src={'https://secure.meetupstatic.com/photos/event/2/d/8/e/highres_482651662.jpeg'} 
              alt='img-no'/>        
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default App
