브라우저에서 바로 실행되는 마우스 지글러입니다.  
설치 없이 HTML 파일 하나로 동작하며, **Slack · Teams 자리 이석 방지**에 최적화되어 있습니다.

## 📁 파일 구조

```
├── index.html # 마크업
├── style.css # 스타일
├── app.js # 로직
└── README.md
```

## 🚀 사용 방법

### 로컬 실행
```bash
# 그냥 index.html을 크롬/엣지로 열기
open index.html
```

### GitHub Pages 배포
1. 이 저장소를 Fork 또는 본인 repo에 push
2. Settings → Pages → Branch: `main` / `(root)` → Save
3. `https://<username>.github.io/<repo-name>/` 접속

## ⚙️ 기능

| 기능 | 설명 |
|------|------|
| 작동 간격 | 10초 ~ 60초 조절 가능 |
| 비가시 모드 | 1px 미세 이동 (화면에 티 안 남) |
| Wake Lock | 화면 절전까지 방지 (Chrome/Edge) |
| 단축키 | `Space` 키로 시작/정지 |
| 활동 로그 | 실시간 신호 전송 기록 |

## 📝 참고

- 브라우저 기반이므로 **OS 레벨 커서 이동은 아닙니다**
- 합성 `mousemove` 이벤트 + `window.focus()` 조합으로 동작
- Slack · Teams · Zoom 등 대부분의 자리 이석 감지 방지에 충분
- Chrome / Edge 권장 (Wake Lock API 지원)

## 🛡️ 라이선스

MIT
