/* Creative Commons Attribution 4.0 International (CC-BY-4.0) */
/* Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com) */
/* This source code was getting from https://github.com/tastejs/todomvc-app-css/blob/03e753aa21bd555cbdc2aa09185ecb9905d1bf16/index.css */

import styled, { css } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';

export const Layout = styled.div`
  .todoapp {
    background: #fff;
    margin: 30px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
  .mh2 {
    font-weight: bold;
    font-size: 40px;
    line-height: 125%;
    margin-bottom: 0px;
  }
  .mh6 {
    font-size: 15px;
    line-height: 125%;
    font-weight: bold;
  }
  .items-number li {
    display: inline;
    font-size: 15px;
    font-weight: bold;
  }
  .items-number li.txt {
    color: #7f7f7f;
  }
  .todoapp img {
    width: 100%;
    height: auto;
  }

  img.calendar {
    width: 18px;
    height: 18px;
  }
  .date {
    margin-left: 3px;
    margin-right: 10px;
  }
  .item-info {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 20px;
  }
  .item-title {
    color: #0097CC;
    font-size: 27px;
    font-weight: bold;
    line-height: 125%;
    font-family: Livvic;
  }
`
