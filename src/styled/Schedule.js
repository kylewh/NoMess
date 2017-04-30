import styled from 'styled-components'

const Schedule = styled.div`
  font-size: 16px;
  padding: 0px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  min-height: 56px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  &>div:nth-of-type(1) {
    -ms-flex-positive: 2;
    -webkit-box-flex: 2;
    flex-grow: 2;
  }
  &>div:nth-of-type(2) {
    -ms-flex-positive: 4;
    -webkit-box-flex: 4;
    flex-grow: 4;
  }
  &>div:nth-of-type(3) {
    -ms-flex-positive: 2;
    -webkit-box-flex: 2;
    flex-grow: 2;
  }
  &>div>* {
    font-weight: lighter;
    outline: 0;
    color: #fff;
    padding: 15px;
    line-height: 20px;
    -webkit-appearance: none;
    background: none;
    border: none;
    text-align: center;
  }
  &>div>*:active {
    background-color: rgba(115, 130, 155, 0.1) !important;
  }
`

export default Schedule
