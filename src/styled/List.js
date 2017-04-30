import styled from 'styled-components'

const List = styled.ul`
  &.todo-list-ct-enter {
    opacity: 0;
    -webkit-transform: translate3d(-350px, 0, 0);
    transform: translate3d(-350px, 0, 0);
  }

  &.todo-list-ct-enter.todo-list-ct-enter-active {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
  }

  &.todo-list-ct-leave {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition-property: opacity, -webkit-transform;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
  }

  &.todo-list-ct-leave.todo-list-ct-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(-350px, 0, 0);
    transform: translate3d(-350px, 0, 0);
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
  }
`

export default List
