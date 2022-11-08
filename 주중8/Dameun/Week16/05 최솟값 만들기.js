function solution(A, B) {
  const sortA = A.sort((a, b) => a - b);
  const reverB = B.sort((a, b) => b - a);
  let result = 0;
  for (let n = 0; n < sortA.length; n++) {
    result += sortA[n] * reverB[n];
  }
  return result;
}

//2점
//15분

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.17ms, 33.4MB)
// 테스트 3 〉	통과 (0.18ms, 33.5MB)
// 테스트 4 〉	통과 (0.20ms, 33.4MB)
// 테스트 5 〉	통과 (0.17ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.5MB)
// 테스트 7 〉	통과 (0.18ms, 33.5MB)
// 테스트 8 〉	통과 (0.17ms, 33.4MB)
// 테스트 9 〉	통과 (0.18ms, 33.5MB)
// 테스트 10 〉	통과 (0.17ms, 33.5MB)
// 테스트 11 〉	통과 (0.15ms, 33.4MB)
// 테스트 12 〉	통과 (0.15ms, 33.4MB)
// 테스트 13 〉	통과 (0.15ms, 33.5MB)
// 테스트 14 〉	통과 (0.15ms, 33.4MB)
// 테스트 15 〉	통과 (0.15ms, 33.3MB)
// 테스트 16 〉	통과 (0.15ms, 33.4MB)
// 효율성  테스트
// 테스트 1 〉	통과 (0.79ms, 33.4MB)
// 테스트 2 〉	통과 (0.69ms, 33.5MB)
// 테스트 3 〉	통과 (0.67ms, 33.4MB)
// 테스트 4 〉	통과 (0.70ms, 33.4MB)
