import styled from 'styled-components'

const Textarea = styled.textarea`
  & {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    padding: 20px;
    outline: none;
    border: none;
    resize: none;
    background-color: transparent;
    color: #FFFF00;
    font-size: 18px;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #fff;
    font-weight: lighter;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #fff;
    font-weight: lighter;
  }

  &:-ms-input-placeholder {
    /* IE 10+ */
    color: #fff;
    font-weight: lighter;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #fff;
    font-weight: lighter;
  }
`

export default Textarea
