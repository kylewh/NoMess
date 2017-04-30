import styled, { css } from 'styled-components'

const today = css`
  background: #03A9F4;
  color: white !important;
  border-radius: 2px;
  padding: 1px 6px;
  margin: -4px 0px;
  min-width: initial;
`

const TimeInfo = styled.li`
  border: none;
  min-height: 16px;
  padding: 10px 10px 10px 20px;
  color: #aaa;
  font-size: 12px;
  position: relative;
  cursor: default;
  &:hover {
    background-color: #F0F0F0;
  }
  & em {
    font-style: normal;
    font-size: 14px;
    padding-right: 10px;
    min-width: 100px;
    display: inline-block;
    color: #9e9e9e;
  }
  & em{
    ${props => props.today === true
    ? today : ''}
  }
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -50px;
  }
`

export default TimeInfo
