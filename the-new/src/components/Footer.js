/* eslint-disable */
import React, { useState, useContext } from 'react';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppContext } from '../App';
import { gotoContentTop,changeTopArr } from '../store';
import S from '../styles/GlobalBlock';


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
  margin: 5px 0 15px;
  font-family: Chomsky;
  font-size:  28px;
`
const Categories = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`
const MainCate = styled.li`
  .main_title {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
  }
`
const SubCate = styled.li`
  margin-bottom: 5px;
  cursor: pointer;
`
const Bottom = styled.div`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  padding: 15px 0;
  height: 30px;
  line-height: 30px;
  color: ${props => props.theme.colors.subGray};

  border-top: 1px solid ${props => props.theme.colors.subGray};

  p {
    display: inline;
    font-size: 10px;
  }
  span {
    font-family: ${({ theme }) => theme.fonts.chomsky};
    font-size: 28px;
  }
`

function Footer() {
  // const { isColorMode, toggleColorMode } = useContext(AppContext);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  let categorys = useSelector((state) => state.categorys);
  let [category, setCategory] = useState(categorys);

  const goToContent = (toTop, main, mainIdx, subIdx) => {    
    navigate(main, {
      state: {
        moveToTop: toTop,
        mainIdx : mainIdx,
        subIdx : subIdx
      }
    });

    window.scrollTo({
      top: 0, left:0,
      behavior: 'smooth'
    });
  };

  return(
    <FooterWrap>
      <LogoWrap>
        <S.Red>T</S.Red>he <S.Red>S</S.Red>hin's <S.Red>W</S.Red>ork <S.Red>S</S.Red>pace
      </LogoWrap>

      <Categories>
        {
          category.map((menu, mainIdx) => {
            return (
              <MainCate key={mainIdx}>
                <div className='main_title' onClick={()=>{
                  goToContent(true, menu.category_link, mainIdx, 0);
                }}>{menu.category_name}</div>

                <ul>
                  {
                    menu.sub_categories.map((subMenu, subIdx) => {
                      return (
                        <SubCate key={subIdx} onClick={()=>{
                          goToContent(false, menu.category_link, mainIdx, subIdx);
                          dispatch(gotoContentTop([menu.category_link, mainIdx, subIdx]));
                        }}>
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
        <S.Red>S</S.Red>
      </Bottom>
    </FooterWrap>
  )
}

export default Footer;