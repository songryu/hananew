
let isAnimating = 1; // 애니메이션 중 일때 1
let lottoNumbers; // 로또 번호 배열

// 번호 애니메이션 효과
function animateNumbers(element, time) {
    // 랜덤한 번호를 표시
    const effect = setInterval(() => {
        //1~45까지 번호 
        element.innerText = Math.floor(Math.random() * 44 + 1); 
    }, 10);

    // 지정된 시간 이후에 정해진 번호로 변경
    setTimeout(() => {
        // 랜덤 인덱스 
        const randomIndex = Math.floor(Math.random() * lottoNumbers.length);

        // 애니메이션 종료
        clearInterval(effect);
        
        // 애니메이션 완료 표시 및 번호 변경
        element.classList.add("done"); // 애니메이션 완료 클래스 추가
        element.innerText = lottoNumbers[randomIndex]; // 선택된 번호 표시
        lottoNumbers.splice(randomIndex, 1); // 선택된 번호 배열에서 제거
    }, time * 1000 + 1000); 
}

// 로또 번호 생성 함수
function generateLottoNumbers() {
    // 모든 로또에 대해 반복
    document.querySelectorAll(".ball").forEach((element, index) => {
        element.classList.remove("done"); // 애니메이션 완료 클래스 제거
        animateNumbers(element, index); // 번호 애니메이션 적용
    });
}

// 버튼 클릭 이벤트
document.getElementById("btn").addEventListener("click", function () {
    // isAnimating 값이 1일 때만 실행
    if (isAnimating === 1) {
        lottoNumbers = Array.from({ length: 45 }, (_, i) => i + 1); // 1부터 45까지의 번호 배열 생성
        isAnimating = 0; // isAnimating 값 변경
        btn.classList.add("hide"); // 버튼 숨기기
        generateLottoNumbers(); // 로또 번호 생성
        setTimeout(function () {
            isAnimating = 1; // isAnimating 값 원래대로 변경
            btn.classList.remove("hide"); // 버튼 보이기
        }, 5500); // 5.5초 후 실행
    }
});
