/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppContext } from '../../App';

const FooterWrap = styled.footer`
  margin-top: 50px;
  border-top: 1px solid ${props => props.theme.colors.subGray};

  &::before {
    content : '';
    position: relative;
    top: -5px;
    display: block;
    border-top: 1px solid ${props => props.theme.colors.subGray};
  }
`

const LogoWrap = styled.div`
  margin-top: 5px;
  font-family: Chomsky;
  font-size:  28px;
`
const Categories = styled.ul`
  display: flex;
  justify-content: space-between;
`
const MainCate = styled.li`
  .main_title {
    margin-bottom: 10px;
    font-weight: 800;
  }
`
const SubCate = styled.li`
  margin-bottom: 5px;
`
const Bottom = styled.div`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  padding: 20px 0;
  height: 30px;
  line-height: 30px;
  color: ${props => props.theme.colors.subGray};
  p {
    display: inline;
    font-size: 10px;
  }
  span {
    font-family: ${({ theme }) => theme.fonts.chomsky};
    font-size: 28px;
    color: ${({ theme }) => theme.pointColor};
  }
`

function Footer() {
  const { isColorMode, toggleColorMode } = useContext(AppContext);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  let categorys = useSelector((state) => state.categorys);
  let [category, setCategory] = useState(categorys);

  return(
    <FooterWrap>
      <LogoWrap>
        <span className='red'>T</span>he <span className='red'>S</span>hin's <span className='red'>W</span>ork <span className='red'>S</span>pace
      </LogoWrap>

      <Categories>
        {
          category.map((menu,i) => {
            return (
              <MainCate key={i}>
                <div className='main_title'>{menu.category_name}</div>

                <ul>
                  {
                    menu.sub_categories.map((subMenu, i) => {
                      return (
                        <SubCate key={i}>
                          {subMenu.sub_category_name}
                        </SubCate>
                      )
                    })
                  }
                </ul>
              </MainCate>
            )
          })
        }
      </Categories>

      <Bottom>
        <div>© The Shin's Work Space. <p>Designed by Shin</p></div>
        <span>S</span>
      </Bottom>
    </FooterWrap>
  )
}



export default Footer;