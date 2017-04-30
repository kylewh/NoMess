import styled from 'styled-components'

const Overlay = styled.div`
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  background-image: ${props => props.login
    ? `url('http://om8hmotom.bkt.clouddn.com/hot-air-balloon-35248-2560x1600.webp')`
    : 'none'
  };
`

export default Overlay
