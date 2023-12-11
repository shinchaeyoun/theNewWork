/* eslint-disable */
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router';
import * as commonFn from './../CommonFunction';
import { useMediaQuery } from "react-responsive";
import ScrollFade from '../ScrollFadeAnimation';
import styled from 'styled-components';
import S from '../styles/GlobalBlock';
import './../styles/contact.scss'

import qrImg from './../img/kakao_qr.png'




const Title = styled(S.Title)`
  margin-bottom: 15px;
`
const InfoVal = styled.a`

`
const InfoType = styled.p`
  font-weight: 600;
`

const Li = styled.li`
  margin-bottom: 30px;
  text-align: center;
  position: relative;

  ${S.ImgBox} {
    position: absolute;
    top: 40px; left: 50%;
    transform: translateX(-50%);
  }
`

const RedButton = styled(S.RedButton)`
  margin-top: 10px;
`
const SandingMsg = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 250px;
  font-size: 15px;
  font-family: ${props => props.theme.fonts.outfit};
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
`

const Input = styled.input`
  margin-bottom: 20px;
  padding: ${props => props.$pad || '2px 10px'};
  
  width: 90%;
  height: ${props => props.$hei || '30px'};
  font-family: ${props => props.theme.fonts.outfit};
  
  outline: none;
  border: 1px solid ${props => props.theme.colors.gray};
  box-sizing: border-box;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }
`
const Form = styled.form`
  width: 100%;
`
const GroupBox = styled(S.GroupBox)`
  align-items: center;
  justify-content: center;

  margin: 50px 0;
  width: 50%; height: 420px;

  &:first-child {
    border-right: 1px solid ${props => props.theme.colors.gray};
  }
  &:last-child {text-align: center;}
`
const ContentBox = styled(S.ContentBox)`
  flex-direction: row;
  margin-bottom: 0;
  
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    overflow-x: hidden;
    
    ${Title}{
      width: 90%;
      margin: 0 auto;
    }
    ${GroupBox}{
      margin: 0;
      padding: 80px 0;
      width: 100%;
        &:first-child {
          border-right: none;
          border-bottom: 1px solid ${props => props.theme.colors.gray};
        }
      
      ${Form}{
        text-align: center;
      }
    }
  }
`

function ContactPage() {
  const [isQrVisible, setIsQrVisible] = useState(false);
  const [isSanding, setIsSanding] = useState(false);

  return (
    <>
      <ContentBox>
        <GroupBox>
          {
            !isSanding &&
            <ScrollFade.Item $type={false}>
              <Title>Title</Title>
            </ScrollFade.Item>
          }

          <Form action="https://script.google.com/macros/s/AKfycbxNDoWfUMMc3rz0_GbwZl9j8Q5MJ0C4rmHvDZWTxFaDIZUUs8NLfBXTMwXv3xQbP-XOZA/exec"
            className="gform pure-form pure-form-stacked" method="POST" data-email="jun29182877@gmail.com" target="_blank">
            {
              isSanding
                ?
                <SandingMsg>
                  <S.Red>
                    Thanks for contacting me!<br />I will get back to you soon!
                  </S.Red>
                </SandingMsg>
                :
                <>
                  

                  <div className="form-elements">
                    <ScrollFade.Item $type={false}>
                      <fieldset className="pure-group">
                        <S.SrOnly htmlFor="name">Name</S.SrOnly>
                        <Input type="text" id="name" name="name" autoComplete="off" placeholder="Enter your name" />
                      </fieldset>
                    </ScrollFade.Item>

                    <ScrollFade.Item $type={false} $delay='.6s'>
                      <fieldset className="pure-group">
                        <S.SrOnly htmlFor="email">Email</S.SrOnly>
                        <Input type="email" id="email" name="email" autoComplete="off"
                          placeholder="Enter a valid emali address" />
                      </fieldset>
                    </ScrollFade.Item>

                    <ScrollFade.Item $type={false} $delay='.9s'>
                      <fieldset className="pure-group">
                        <S.SrOnly htmlFor="message">Message</S.SrOnly>
                        <Input as="textarea" $pad='10px' $hei='200px' name="message" id="message" cols="30" rows="10" autoComplete="off" placeholder="Enter your message"></Input>
                      </fieldset>
                    </ScrollFade.Item>

                    <ScrollFade.Item $type={false} $delay='1.2s'>
                      <RedButton className="white_cursor">Submit</RedButton>
                    </ScrollFade.Item>
                  </div>
                </>
            }
          </Form>
        </GroupBox>

        <GroupBox>
          <ul>
            <Li>
              <ScrollFade.Item $type={false} $delay='.6s'>
                <InfoType>phone</InfoType>
                <InfoVal href="tel:010-9230-9218" target="_blank">010-9230-9218</InfoVal>
              </ScrollFade.Item>
            </Li>

            <Li>
              <ScrollFade.Item $type={false} $delay='.9s'>
                <InfoType>E-mail</InfoType>
                <InfoVal href="mailto:jun29182877@gmail.com" target="_blank">jun29182877@gmail.com</InfoVal>
              </ScrollFade.Item>
            </Li>

            <Li>
              <ScrollFade.Item $type={false} $delay='1.2s'>
                <InfoType>Instagram</InfoType>
                <InfoVal href="https://www.instagram.com/chaisini/?hl=ko" target="_blank">@chaisini</InfoVal>
              </ScrollFade.Item>
            </Li>

            <Li onClick={() => { setIsQrVisible(!isQrVisible) }}>
              <ScrollFade.Item $type={false} $delay='1.5s'>
                <InfoType>Kakao-talk</InfoType>
                <InfoVal>ID : 8217</InfoVal>
                {
                  isQrVisible
                  &&
                  <S.ImgBox $imgwid='100px' $imghei='100px'>
                    <img src={qrImg} alt="카카오톡 ID QR-code" />
                  </S.ImgBox>
                }
              </ScrollFade.Item>
            </Li>
          </ul>
        </GroupBox>
      </ContentBox>
    </>
  )
}

export default ContactPage;