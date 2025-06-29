import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import * as s from './styles'
import * as Icons from './Icons'

function usePrevious<T>(value: T) {
  const ref = useRef<T>(null)
  useEffect(() => void (ref.current = value), [value])
  return ref.current
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean
    name: string | React.JSX.Element
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen)
  const previous = usePrevious(isOpen)
  const [ref, { height: viewHeight }] = useMeasure()
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  })
  // @ts-ignore
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`] as React.ComponentType<any>
  return (
    <s.Frame>
      <Icon style={{ ...s.toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} /> 
      <s.Title style={style}>{name}</s.Title>
      <s.Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}>
        <a.div ref={ref} style={{ y }} children={children} />
      </s.Content>
    </s.Frame>
  )
})

export default function App() {
  return (

    <s.TreeContainer>
      <s.MainTitle>miniaturity proj archive</s.MainTitle>
      <s.Seperator />
      <s.SubTitle>last updated: 6/29/25</s.SubTitle>
      <Tree name="root" defaultOpen>
        <Tree name="2025">
          <Tree name="neighborhood @ hack club">
            <Tree name="CROSSWARD">
              <Tree name="desc">
                <div
                style={{
                  position: 'relative',
                  width: '100%',
                  padding: 10,
                }}>
                    CROSSWARD is a roguelike crossword based game <br /> I made for neighborhood @ hack club 2025.
                </div>
              </Tree>
              <Tree name="project">
                <a href="https://miniaturity.github.io" target="_blank" rel="noopener noreferrer" style={{ verticalAlign: "middle"}}>Crossward</a>
              </Tree>
              <Tree name="details">
                <Tree name="languages">
                  <Tree name="ReactJS" style={{ color: '#4272f5'}}/>
                  <Tree name="CSS" style={{ color: '#7abfff' }}/>
                </Tree>
                <Tree name="Host: GitHub Pages"/>
              </Tree>
            </Tree>
          </Tree>
        </Tree>
        <Tree name="2024" />
        <Tree name="2023" />
      </Tree>
    </s.TreeContainer>
  )
}
