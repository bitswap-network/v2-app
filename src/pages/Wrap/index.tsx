import React, { useState, useContext} from 'react'
import { RefreshCw } from 'react-feather'
import { AutoColumn } from '../../components/Column'
import { AutoRow, RowBetween } from '../../components/Row'
import { ArrowWrapper, BottomGrouping, Wrapper } from '../../components/swap/styleds'
import { ThemeContext } from 'styled-components'

import {TYPE } from '../../theme'
import AppBody from '../AppBody'
import { Input as NumericalInput } from '../../components/NumericalInput'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'

export default function Swap({ history }: RouteComponentProps) {
  const theme = useContext(ThemeContext)

  const [inputValue, setInputValue] = useState("")
  function handleInputValue(val:string) {
    setInputValue(val)
  }

  const [direction, setDirection] = useState(true)
  const [from, setFrom] = useState("BCLT")
  const [to, setTo] = useState("WBCLT")
  function swapInputOutput() {
    console.log(direction)
    if (from == "BCLT") {
      setDirection(false)
      setFrom("WBCLT")
      setTo("BCLT")
    }
    else {
      setDirection(true)
      setFrom("BCLT")
      setTo("WBCLT")
    }
  }

  
  const StyledSwapHeader = styled.div`
  padding: 20px 1rem 5px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};
`

  return (
    <>
      <AppBody>
      <StyledSwapHeader>
      <RowBetween>
        <TYPE.black fontWeight={500}>Wrap</TYPE.black>
      </RowBetween>
    </StyledSwapHeader>
        <Wrapper id="wrap-page">

          <AutoColumn gap={'md'}>
            <div style={{flexDirection:'column', width: '100%', height:90, border:'1px solid #34373d', borderRadius:15,}}>
              <div style={{flex:0.2, display:'flex', flexDirection:'row',}}>
                <div style={{flex:0.5, paddingLeft:15, paddingTop:10, textAlign:'left', fontSize:14, color:'#C3C5CB'}}>From</div>
                <div style={{flex:0.5, paddingRight:15, paddingTop:10, textAlign:'right', fontSize:14, color:'#C3C5CB'}}>Balance: 0.07</div>
              </div>
              <div style={{flex:0.8, display:'flex', flexDirection:'row', marginTop:15,}}>
                <div style={{flex:0.6, display:'flex', marginLeft:15,}}>
                <NumericalInput
                className="token-amount-input"
                value={inputValue}
                onUserInput={val => {
                  handleInputValue(val)
                }}
              />
                </div>
                <div style={{flex:0.4, display:'flex', justifyContent:'flex-end', paddingRight:15}}>
                  <div style={{paddingLeft:15, paddingRight:15, height:37, borderRadius:10, backgroundColor:"#2C2F36", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:500}}>
                    {from == "BCLT"?<img src={require('../../assets/WBCLT-logo.png')} style={{width:30, height:30, borderRadius:100, marginRight:10,}}/>:<img src={require('../../assets/WBCLT-logo.png')} style={{width:30, height:30, borderRadius:100, marginRight:10,}}/>}
                    {from}
                  </div>
                </div>
              </div>
            </div>

            <AutoColumn justify="space-between">
              <AutoRow justify={'center'} style={{ padding: '0 1rem' }}>
                <ArrowWrapper clickable>
                  <RefreshCw
                    size="16"
                    onClick={() => {
                      swapInputOutput()
                    }}
                    color={theme.primary1}
                  />
                </ArrowWrapper>
              </AutoRow>
            </AutoColumn>
            <div style={{flexDirection:'column', width: '100%', height:90, border:'1px solid #34373d', borderRadius:15,}}>
              <div style={{flex:0.2, display:'flex', flexDirection:'row',}}>
                <div style={{flex:0.5, paddingLeft:15, paddingTop:10, textAlign:'left', fontSize:14, color:'#C3C5CB'}}>To</div>
                <div style={{flex:0.5, paddingRight:15, paddingTop:10, textAlign:'right', fontSize:14, color:'#C3C5CB'}}>Balance: 0.07</div>
              </div>
              <div style={{flex:0.8, display:'flex', flexDirection:'row', marginTop:15,}}>
                <div style={{flex:0.6, display:'flex', marginLeft:15,}}>
                <NumericalInput
                className="token-amount-input"
                value={inputValue}
                onUserInput={val => {
                  setInputValue(val)
                }}
              />
                </div>
                <div style={{flex:0.4, display:'flex', justifyContent:'flex-end', paddingRight:15}}>
                  <div style={{paddingLeft:15, paddingRight:15, height:37, borderRadius:10, backgroundColor:"#2C2F36", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:500}}>
                    {to == "BCLT"?<img src={require('../../assets/WBCLT-logo.png')} style={{width:30, height:30, borderRadius:100, marginRight:10,}}/>:<img src={require('../../assets/WBCLT-logo.png')} style={{width:30, height:30, borderRadius:100, marginRight:10,}}/>}
                    {to}
                  </div>
                </div>
              </div>
            </div>
          </AutoColumn>
          <BottomGrouping>
            {
            inputValue == ""?
            <button style={{marginTop:15, background:'#40444f', width:'100%', height:60, borderRadius:15, border:'none'}}><span style={{color:'#6b7184', fontSize:20, fontWeight:500}}>Enter an amount</span></button>:
            direction?
            <button style={{marginTop:15, background:'#2172e5', width:'100%', height:60, borderRadius:15, border:'none'}}><span style={{color:'#fff', fontSize:20, fontWeight:500}}>Wrap Bitclout</span></button>:<button style={{marginTop:15, background:'#2172e5', width:'100%', height:60, borderRadius:15, border:'none'}}><span style={{color:'#fff', fontSize:20, fontWeight:500}}>Unwrap Bitclout</span></button>
          }
          </BottomGrouping>
        </Wrapper>
      </AppBody>
    </>
  )
}
