store의 state를 변경할 때 dispatch 사용

navigation으로 보낸 state은 location으로 받아서 사용
location.state

스타일 변수 가져다 쓸 때
${({ theme }) => theme.fonts.nanum};
${props => props.theme.colors.subGray};



스타일 컴포넌트는 나중에 하고 구조 먼저 잡자