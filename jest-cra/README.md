# 1. prettier eslint 설정


# 2. Jest - Unit Test

## jest & package.json settings
```js
// test : watch 모드로 테스트 실행
// test:coverage : 전체 테스트 및 커버리지 리포트 출력
  "scripts": {
    "test": "react-scripts test",
    "test:coverage": "npm test -- --coverage --watchAll=false",
  },

// jest 설정 중 , 
// -- 특정 경로의 파일만 테스트 대상 지정 
  "jest": {
    "collectCoverageFrom": [
      "./src/components/**/*.tsx",
      "./src/pages/**/*.tsx",
      "./src/routers/**/*.tsx"
    ]
  },

```


# 3. Jest - e2e Test