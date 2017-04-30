import styled from 'styled-components'

const Panel = styled.form`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 0px;
  z-index: 900;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  padding-top: 58px;
  background-color: #03A9F4 !important;
  @media all and (min-width:640px) {
    & {
      width: 500px;
      height: 60%;
      position: fixed;
      right: 86px;
      bottom: 66px;
      top: auto;
      padding-top: 0px !important;
      overflow: hidden;
      border-radius: 3px;
    }
  }
  &.addTodo-panel-enter {
    opacity: 0.01;
    -webkit-transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
  }

  &.addTodo-panel-enter.addTodo-panel-enter-active {
    opacity: 1;
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }

  &.addTodo-panel-leave {
    opacity: 1;
  }

  &.addTodo-panel-leave.addTodo-panel-leave-active {
    opacity: 0.01;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
    -webkit-transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
  }
`

export default Panel
