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
    opacity: 0!important;
    transform: translate3d(-350px, 0, 0)!important;
  }

  &.add-remove-item-enter.add-remove-item-enter-active {
    opacity: 1!important;
    transform: translate3d(0, 0, 0)!important;
    transition-property: transform, opacity!important;
    transition-duration: 250ms!important;
  }

  &.add-remove-item.leave {
    opacity: 1 !important;
    transform: translate3d(0, 0, 0)!important;
    transition-property: transform, opacity!important;
    transition-duration: 250ms!important;
  }

  &.add-remove-item-leave.add-remove-item-leave-active {
    opacity: 0!important;
    transform: translate3d(-350px, 0, 0)!important;
  }
`

export default TodoItem
