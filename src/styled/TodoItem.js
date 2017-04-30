import styled from 'styled-components'

const TodoItem = styled.li`
  background-color: white;
  margin-left: 0px;
  padding-left: 10px;
  padding-right: 4px;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  word-break: break-all;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  & :last-of-type {
    border: none;
  }
  &:hover .delete {
    display: inline-block !important;
  }

  &.add-remove-item-enter {
    opacity: 0;
    -webkit-transform: translate3d(-350px, 0, 0);
    transform: translate3d(-350px, 0, 0);
    -moz-transform: translate3d(-350px, 0, 0);
    -ms-transform: translate3d(-350px, 0, 0);
    -o-transform: translate3d(-350px, 0, 0);
  }

  &.add-remove-item-enter.add-remove-item-enter-active {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
  }

  &.add-remove-item.leave {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
  }

  &.add-remove-item-leave.add-remove-item-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(-350px, 0, 0);
    transform: translate3d(-350px, 0, 0);
    -webkit-transition-duration: 250ms;
    transition-duration: 250ms;
  }
`

export default TodoItem
