/* 
    2개의 숫자를 입력받아 두 수의 최대공약수를 구하는 함수를 작성하시오.
        - 함수 예 : gcd(4,12)
    * 최대공약수 : 두 수 모두 나누어떨어지는 수 중에서 가장 큰 값

    - tip
        - 입력되는 두 수 중에서 어떤 수가 큰 수인지 확인
        - 두 수가 나누어떨어져야 하므로 큰 수까지 반복하면서
          작은수도 나누어 떨어지고, 큰 수도 나누어 떨어지는 숫자를 찾는다
        - 찾은 수를 변수에 저장해서 가장 마지막에 할당된 수를 출력함
*/

function getGCD(a, b) {
    let max = a > b ? a : b;
    let gcd = 0;
    for(let i=1; i <= max ; i++)  {  // 모든 i에 대해, i가 a와 b의 공통 약수인지 검사
        if(a % i === 0 && b % i === 0) { //a를 i로 나눈 나머지가 0임, 이는 i가 a의 약수임
            gcd = i;    // for 루트에서 더 큰 공약수를 찾을 때마다 gcd 갱신됨
    }
       
    }
     return gcd;
}

console.log(`300과 20의 최대 공약수 : ${getGCD(300, 20)}`)
console.log(`4와 12의 최대 공약수 : ${getGCD(4, 12)}`)



