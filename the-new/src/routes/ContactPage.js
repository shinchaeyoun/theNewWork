/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router';
import * as commonFn from './../CommonFunction';

import './../styles/contact.scss'
import S from '../styles/GlobalBlock';


function ContactPage() {
  <script data-cfasync="false" type="text/javascript"src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>

  console.log('?? aw');
  return(
    <>
      <S.ContentBox $flexD='row'>
        <div className="submit_container">
          <form
            action="https://script.google.com/macros/s/AKfycbzWzazX8wefcET9ZB6aJdDUsB7byML__q206U8vhsj_q0O6VKrez5WNXQLHAxn8X5eFgg/exec"
            className="gform pure-form pure-form-stacked" method="POST" data-email="jun29182877@gmail.com"
            target="_blank">

            <div className="form-elements">
              <fieldset className="pure-group">
                <label className="sr-only" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete="off" placeholder="Enter your name" />
              </fieldset>
              <fieldset className="pure-group">
                <label className="sr-only" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete="off"
                  placeholder="Enter a valid emali address" />
              </fieldset>
              <fieldset className="pure-group">
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" autoComplete="off"
                  placeholder="Enter your message"></textarea>
              </fieldset>
              <button className="white_cursor">Submit</button>
            </div>

            <div style={{display:'none'}} className="thankyou_message">
              Thanks for contacting me!<br />
              I will get back to you soon! </div>
          </form>
        </div>

        <div className="contact_container">
          <ul>
            <li>
              <span>phone</span>
              <a href="tel:010-9230-9218" target="_blank">010-9230-9218</a>
            </li>
            <li>
              <span>E-mail</span>
              <a href="mailto:jun29182877@gmail.com" target="_blank">jun29182877@gmail.com</a>
            </li>
            <li>
              <span>Instagram</span>
              <a href="https://www.instagram.com/chaisini/?hl=ko" target="_blank">@chaisini</a>
            </li>
            <li className="kakao_qr">
              <span>Kakao-talk</span>
              <a>ID : 8217</a>
              <ul className="kakao">
                <li><img src="./img/kakao_qr.png" alt="카카오톡 ID QR-code" /></li>
              </ul>
            </li>
          </ul>
        </div>
      </S.ContentBox>

    </>
  )
}

export default ContactPage;