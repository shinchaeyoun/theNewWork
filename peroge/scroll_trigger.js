<>
{/* // 1 - 스크립트를 index파일 하단에 넣기. */}
    <script defer src="js/jquery-3.6.0.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"></script>
</>

const hoody = document.querySelector(".right_wrap"); // 해당 클래스의 탑 값을 얻고 싶을때
const hodHei = hoody.offsetTop; // 이렇게 작성

window.addEventListener('DOMContentLoaded',function(){ //시작
    ScrollTrigger.name = "ScrollTrigger"; //수정 X
    gsap.registerPlugin(ScrollTrigger); // 수정 X

    let hood1 = gsap.timeline({ // 원하는 트리거 이름 지정
        scrollTrigger: {
            trigger: ".main", // 부모영역 지정 
            scrub: true,  //스크롤시 움직이는 기능 사용할건지
            pin: false, //스크롤시 해당 영역 고정할건지
            start: `${hodHei}`, //시작 - 위에 작성해둔 클래스의 탑 값을 쓰세요.
            end: "3000", // 끝
            ease: "power3", // 수정X
            markers:false // 시작과 끝 영역 표시하기 
        }
    });
    hood1.to(".hoody_item_1", { //클래스 이름을 지정해서 해당 클래스에 변경하고자 하는 값을 넣는다
        rotation:0,x:0 ,y:0,width:322, duration:1, scale:1.7
    },0); //순서 - 0,1,2,3 ... 순서로 작동 / 같은 숫자쓰면 동시 작동
    hood1.to(".hoody_item_2", { //클래스 이름을 지정해서 해당 클래스에 변경하고자 하는 값을 넣는다
        rotation:0,x:0 ,y:0,width:322, duration:1, scale:1.7
    },0); //순서 - 0,1,2,3 ... 순서로 작동 / 같은 숫자쓰면 동시 작동

    // 또다른 2번째 스크롤 트리거 만들때 이부분을 반복해서 작성해주세요
    let hood2 = gsap.timeline({ // 원하는 트리거 이름 지정
        scrollTrigger: {
            trigger: ".main", // 부모영역 지정 
            scrub: true,  //스크롤시 움직이는 기능 사용할건지
            pin: false, //스크롤시 해당 영역 고정할건지
            start: `${hodHei}`, //시작 - 위에 작성해둔 클래스의 탑 값을 쓰세요.
            end: "3000", // 끝
            ease: "power3", // 수정X
            markers:false // 시작과 끝 영역 표시하기 
        }
    });

    hood2.to(".hoody_item_1", { //클래스 이름을 지정해서 해당 클래스에 변경하고자 하는 값을 넣는다
        rotation:0,x:0 ,y:0,width:322, duration:1, scale:1.7
    },0); //순서 - 0,1,2,3 ... 순서로 작동 / 같은 숫자쓰면 동시 작동
    hood2.to(".hoody_item_2", { //클래스 이름을 지정해서 해당 클래스에 변경하고자 하는 값을 넣는다
        rotation:0,x:0 ,y:0,width:322, duration:1, scale:1.7
    },0); //순서 - 0,1,2,3 ... 순서로 작동 / 같은 숫자쓰면 동시 작동

})