// 2가지 인자를 받음, 1. 테스트 유닛의 제목 2. 테스트 유닛
// describe : 테스트 유닛들의 모음
describe("자스민 테스트입니다.", () => {
  // 1. 유닛에 대한 설명 2. 실행될 함수
  // it : 함수 테스트 유닛
  it("더하기 1을 하는 함수입니다.", () => {
    let num = 30;

    // expect : 기대식. 실행할 함수의 결과갑시을 인수로 전달합니다.
    // toBe : 매쳐함수. 내가 기대한 결과와 일치하는지 판단하는 함수
    expect(plusOne(num)).toBe(num + 1);
  });
});