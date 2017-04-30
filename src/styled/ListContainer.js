import styled from 'styled-components'

const ListContainer = styled.div`
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  padding-top: 15px;
  padding-bottom: 95px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  @media all and (min-width:640px) {
    & {
      width: 70%;
      margin: 0 auto;
    }
  };
  @media all and (min-width:1000px) {
    & {
      width: 57%;
      margin: 0 auto;
    }
  };
`

export default ListContainer
