# MyLink

MyLink는 사용자가 자신의 소셜 링크와 웹사이트 주소를 한 페이지에 모으고 관리하며 공유할 수 있는 **간편한 링크 통합 서비스**입니다.

## 🚀 주요 기능
- **Firebase 인증**: 구글 소셜 로그인 지원.
- **프로필 관리**: 구글 프로필 연동 (사진, 이름), 소개글(Bio) 편집.
- **인라인 편집**: 별도의 저장 버튼 없이 클릭 시 즉시 텍스트를 편집하고 포커스를 잃을 때 자동 저장되는 편리한 대시보드 UI.
- **링크 관리**: 제목 및 URL 추가/삭제, 구글 파비콘 API를 통한 아이콘 자동 로딩.
- **반응형 디자인**: 모바일과 데스크톱 모두에 최적화된 레이아웃 및 다크 모드 지원.

## 🛠 기술 스택
- **프레임워크**: Next.js 16 (App Router)
- **라이브러리**: React 19
- **스타일링**: Tailwind CSS 4, Lucide React (Icons)
- **UI 컴포넌트**: shadcn/ui
- **백엔드/인증**: Firebase (Authentication, Firestore)
- **언어**: TypeScript

## 📂 프로젝트 구조
```text
├── app/                # Next.js App Router (페이지 및 레이아웃)
├── components/         # 재사용 가능한 UI 컴포넌트 (shadcn/ui 포함)
├── docs/               # 설계 문서: PRD, 시나리오, 와이어프레임
├── hooks/              # 커스텀 React 훅
├── lib/                # 유틸리티 함수 및 라이브러리 설정
├── public/             # 정적 자산 (이미지, 파비콘 등)
└── types/              # TypeScript 타입 정의
```

## 💻 시작하기

### 필수 조건
- Node.js 설치 환경

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```
로컬 환경에서 개발 서버가 실행되면 `http://localhost:3000` 에 접속하여 프로젝트를 확인할 수 있습니다.

### 주요 명령어
| 명령어 | 설명 |
| :--- | :--- |
| `npm run dev` | 개발 서버 시작 (`--turbopack` 사용) |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run start` | 프로덕션 서버 시작 |
| `npm run lint` | ESLint 분석 실행 |
| `npm run format` | Prettier를 통한 코드 포맷팅 (`ts`, `tsx`) |
| `npm run typecheck` | TypeScript 타입 체크 실행 |

## 🎨 테마 변경
- `next-themes`가 설정되어 있으며, 단축키 `d`를 통해 다크 모드와 라이트 모드를 전환할 수 있습니다.
