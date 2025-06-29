import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const TreeContainer = styled('div')`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  
`

export const Frame = styled('div')`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
  
`

export const Title = styled('span')`
  vertical-align: middle;
`

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
  
`

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
}

export const MainTitle = styled('div')`
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 2rem;
  color: black;
  width: 50%;
`

export const Seperator = styled('div')`
  border-top: 1px solid #000;
  margin: 20px;
  height: 1px;
  width: 25%;
`

export const SubTitle = styled('div')`
  text-align: center;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  font-size: 0.9rem;
  color: #bbb;
  width: 50%;
`