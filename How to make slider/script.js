// 변수 지정
var sliderWrapper = document.querySelector(".container"),
    sliderContainer = document.querySelector(".slider-container"),
    slides = document.getElementsByClassName("slide"),
    slideCount = slides.length,
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementById("prev"),
    navNext = document.getElementById("next");
	
//슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide(){
    for(var i=0; i<slideCount; i++) {
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }
    sliderWrapper.style.height = topHeight + 'px';
    sliderContainer.style.height = topHeight + 'px';
}

//calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기
for(var i=0; i<slideCount; i++){
    slides[i].style.left = i*100 + '%';
}

// 슬라이드 이동 함수 
function goToSlide(idx) {
    sliderContainer.style.left = idx * -100 + '%';
    sliderContainer.classList.add('animated');
    currentIndex = idx;
    updateNav();
}

// 버튼기능 업데이트 함수
function updateNav(){
    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    } else {
        navPrev.classList.remove('disabled');
    }

    if(currentIndex == slideCount - 1){
        navNext.classList.add('disabled');
    } else {
        navNext.classList.remove('disabled');
    }
}

// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener("click", function(event){
    event.preventDefault();
    goToSlide(currentIndex-1);
});
navNext.addEventListener("click", function(event){
    event.preventDefault();
    goToSlide(currentIndex+1);
});


// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);