// 로또 번호 추출 함수
function generateLottoNumbers() {
    // 로또 번호를 저장할 공간
    let lottoNumbers = [];
    // 6개의 번호를 추출할 때까지 반복
    while (lottoNumbers.length < 6) {
        // 1부터 45까지의 랜덤 숫자 생성
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        // 추출한 숫자가 배열에 존재하지 않으면 추가
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }
    // 번호를 오름차순으로 정렬
    return lottoNumbers.sort((a, b) => a - b);
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
btn.addEventListener("click", function () {
    // 버튼이 클릭되면 generateLottoNumbers 함수를 호출하여 번호를 추출하고 결과를 화면에 출력
    result1.innerText = "1=> " + generateLottoNumbers().join(", ");
    result2.innerText = "2=> " + generateLottoNumbers().join(", ");
});
