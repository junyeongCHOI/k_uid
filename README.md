# k_uid

10자리 한글 고유 아이디.
초당 100만 개 생성 시 중복 확률 50%에 도달하는 시점은 은 약 650만 년 후

## 설치

```bash
npm install k_uid2
```

## 사용

```js
import kuid from "k_uid";

const id = kuid(); // "까먀똞느닒댜맒님머먘"
const id2 = kuid("user_", 8); // "user_까니뇨또냬먀님"
```
