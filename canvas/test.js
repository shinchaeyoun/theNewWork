$('header').load('inc.html header > div', function () {
    // 흑백 전환
    const $body = $("body");
    const $backGround = $(".bg");
    const $red = $(".title a .red");
    const $onoff = $(".onoff");
    const $onoffLi = $(".onoff ul li");

    const $topBg = $('.top_menu');
    const $topLogo = $('.top_menu .logo a');

    const $mainSubTit = $('#main_container span');

    const $intTit = $('#introduce .introduce_tab .title');
    const $intSubTit = $('#introduce .introduce_tab .sub_tit');

    const $workTit = $('#work .main_tit');


    const $likeTit = $('#like .like_tab .title');
    const $travelTit = $('#like .travel .sec1 .text_wrap span');
    const $travelTabTit = $('#like .travel .tab_menu .tit');
    const $flimArrow = $('#like .fliming a');
    const $moviesTit = $('#like .movies span');
    const $musicTit = $('#like .music span');
    const $booksTit = $('#like .books span');

    const $companyName = $('#career .text_content .tit');

    const $workMainTit = $('#portfolio .main_tit');
    const $workSpan = $('#portfolio .text_box span');

    const $contactTit = $('#contact .title');
    const $contactBtn = $('#contact button');
    const $contactSubTit = $('#contact .contact_container span');
    const $contactThx = $('#contact .thankyou_message');

    const $footerRed = $('footer .logo .red');
    const $footerSmallLogo = $('footer .bottom');

    $onoff.on('click', function () {
        $onoffLi.toggleClass('active');
        $backGround.toggleClass('active');
        $red.toggleClass('active');
        $mainSubTit.toggleClass('active');
        $intTit.toggleClass('active');
        $intSubTit.toggleClass('active');
        $workTit.toggleClass('active');
        $topBg.toggleClass('active');
        $topLogo.toggleClass('active');
        $workMainTit.toggleClass('active');
        $workSpan.toggleClass('active');
        $likeTit.toggleClass('active');
        $travelTit.toggleClass('active');
        $travelTabTit.toggleClass('active');
        $flimArrow.toggleClass('active');
        $moviesTit.toggleClass('active');
        $musicTit.toggleClass('active');
        $booksTit.toggleClass('active');
        $companyName.toggleClass('active');
        $contactTit.toggleClass('active');
        $contactBtn.toggleClass('active');
        $contactSubTit.toggleClass('active');
        $contactThx.toggleClass('active');
        $footerRed.toggleClass('active');
        $footerSmallLogo.toggleClass('active');
    });

    // top menu show hide
    const $topMenu = $('.top_menu');
    const $headerHei = $('header').height();

    $(window).on('scroll', function () {
        const scrollTop = $(document).scrollTop();
        if ($headerHei < scrollTop) {
            $topMenu.slideDown(200);
        } else {
            $topMenu.slideUp(200);
        }
    });

    // 날짜 시간 분 초 실시간
    var week = new Array('Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,');
    var month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    date = new Date();
    year = date.getFullYear();
    day = date.getDate();
    document.getElementById("current_date").innerHTML =
        "<span style='padding-right:5px;'>" +
        week[date.getDay()] +
        "</span>" +
        month[date.getMonth()] +
        "<span style='padding-left:5px;'>" +
        day +
        "</span>" +
        "," +
        "<span style='padding-left:5px;'>" +
        year +
        "</span>";
    var Target = document.getElementById("clock");
    var Target_apm = document.getElementById("apm");

    function clock() {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var AmPm = "AM";
        if (hours > 12) {
            var AmPm = "PM";
            hours %= 24;
        }

        Target.innerText =
            `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

        Target_apm.innerText = `${AmPm}`;

    }
    clock();
    setInterval(clock, 1000);

    //cursor strat
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        let m = (y2 - y1) / (x2 - x1);
        let b = y1 - m * x1;
        return m * currentVal + b;
    };
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const body = document.body;
    const bodyColor = getComputedStyle(body).getPropertyValue('--color-bg').trim() || 'white';
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy }
    }

    // Window sizes.
    let winsize;
    const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
    calcWinsize();
    // Recalculate window sizes on resize.
    window.addEventListener('resize', calcWinsize);

    // Custom mouse cursor.
    class CursorFx {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect() };
            this.scale = 1;
            this.opacity = 1;
            this.mousePos = { x: 0, y: 0 };
            this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
            this.lastScale = 1;
            this.lastOpacity = 1;

            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        }
        render() {
            this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
            this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
            this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
            this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
            this.lastScale = lerp(this.lastScale, this.scale, 0.15);
            this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
            this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
            this.DOM.circle.style.opacity = this.lastOpacity
            requestAnimationFrame(() => this.render());
        }
        enter() {
            cursor.scale = 3.5;
            this.DOM.circle.style = "border:none; background-color:rgba(255,255,255,1);mix-blend-mode:difference";
        }
        enter2() {
            this.DOM.dot.style = "opacity:0;"
            cursor.scale = 0;
            this.DOM.circle.style = "";
        }

        leave() {
            cursor.scale = 1;
            this.DOM.dot.style = "background-color:#000";
            this.DOM.circle.style = "border:1px solid#000; background-color:none;";
        }
        click() {
            this.lastScale = 1;
            this.lastOpacity = 0;
        }
    }

    const cursor = new CursorFx(document.querySelector('.cursor'));

    // Custom cursor chnages state when hovering on elements with 'data-hover'.
    [...document.querySelectorAll('[data-hover]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });

    [...document.querySelectorAll('[data-hover2]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter2());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });



    const white_cursor = document.querySelectorAll(".white_cursor");
    const inner_circle = document.querySelector(".cursor__inner--circle");
    const inner_dot = document.querySelector(".cursor__inner--dot");

    for (i = 0; i < white_cursor.length; i++) {
        white_cursor[i].addEventListener('mouseover', function () {
            inner_circle.style = "border:1px solid#fff;";
            inner_dot.style = "background-color:#fff;";
        })
        white_cursor[i].addEventListener('mouseleave', function () {
            inner_circle.style = "border:1px solid#000;";
            inner_dot.style = "background-color:#000;";
        })
    }
    //cusor end

})//header inc



//footer inc
$('footer').load('inc.html footer > div ', function () {
    // 흑백 전환
    const $onoff = $(".onoff");
    const $footerRed = $('footer .logo .red');
    const $footerSmallLogo = $('footer .bottom span');

    $onoff.on('click', function () {
        $footerRed.toggleClass('active');
        $footerSmallLogo.toggleClass('active');
    });

    //cursor strat
    const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
    const lineEq = (y2, y1, x2, x1, currentVal) => {
        let m = (y2 - y1) / (x2 - x1);
        let b = y1 - m * x1;
        return m * currentVal + b;
    };
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const body = document.body;
    const bodyColor = getComputedStyle(body).getPropertyValue('--color-bg').trim() || 'white';
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy }
    }

    // Window sizes.
    let winsize;
    const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
    calcWinsize();
    // Recalculate window sizes on resize.
    window.addEventListener('resize', calcWinsize);

    // Custom mouse cursor.
    class CursorFx {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.bounds = { dot: this.DOM.dot.getBoundingClientRect(), circle: this.DOM.circle.getBoundingClientRect() };
            this.scale = 1;
            this.opacity = 1;
            this.mousePos = { x: 0, y: 0 };
            this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
            this.lastScale = 1;
            this.lastOpacity = 1;

            this.initEvents();
            requestAnimationFrame(() => this.render());
        }
        initEvents() {
            window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        }
        render() {
            this.lastMousePos.dot.x = lerp(this.lastMousePos.dot.x, this.mousePos.x - this.bounds.dot.width / 2, 1);
            this.lastMousePos.dot.y = lerp(this.lastMousePos.dot.y, this.mousePos.y - this.bounds.dot.height / 2, 1);
            this.lastMousePos.circle.x = lerp(this.lastMousePos.circle.x, this.mousePos.x - this.bounds.circle.width / 2, 0.15);
            this.lastMousePos.circle.y = lerp(this.lastMousePos.circle.y, this.mousePos.y - this.bounds.circle.height / 2, 0.15);
            this.lastScale = lerp(this.lastScale, this.scale, 0.15);
            this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
            this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px)`;
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
            this.DOM.circle.style.opacity = this.lastOpacity
            requestAnimationFrame(() => this.render());
        }
        enter() {
            cursor.scale = 3.5;
            this.DOM.circle.style = "border:none; background-color:rgba(255,255,255,1);mix-blend-mode:difference";
        }
        enter2() {
            this.DOM.dot.style = "opacity:0;"
            cursor.scale = 0;
            this.DOM.circle.style = "";
        }

        leave() {
            cursor.scale = 1;
            this.DOM.dot.style = "background-color:#000";
            this.DOM.circle.style = "border:1px solid#000; background-color:none;";
        }
        click() {
            this.lastScale = 1;
            this.lastOpacity = 0;
        }
    }

    const cursor = new CursorFx(document.querySelector('.cursor'));

    // Custom cursor chnages state when hovering on elements with 'data-hover'.
    [...document.querySelectorAll('[data-hover]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });

    [...document.querySelectorAll('[data-hover2]')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter2());
        link.addEventListener('mouseleave', () => cursor.leave());
        link.addEventListener('click', () => cursor.click());
    });



    const white_cursor = document.querySelectorAll(".white_cursor");
    const inner_circle = document.querySelector(".cursor__inner--circle");
    const inner_dot = document.querySelector(".cursor__inner--dot");

    for (i = 0; i < white_cursor.length; i++) {
        white_cursor[i].addEventListener('mouseover', function () {
            inner_circle.style = "border:1px solid#fff;";
            inner_dot.style = "background-color:#fff;";
        })
        white_cursor[i].addEventListener('mouseleave', function () {
            inner_circle.style = "border:1px solid#000;";
            inner_dot.style = "background-color:#000;";
        })
    }
    //cusor end
})