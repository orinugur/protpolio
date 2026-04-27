export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  description: string;
  architecture: string;
  coverImage: string;
  images: { url: string; caption: string }[];
  keyFeatures: string[];
  role: string;
}

export const projectsData: Project[] = [
  {
    id: "agrishield",
    title: "해남군 농업기술센터 국책사업 병해충 탐지 프로젝트",
    shortDescription: "드론 촬영 이미지 및 영상을 분석하여 병해충을 탐지하고 LLM을 통해 PDF 리포트를 자동 생성하는 플랫폼",
    techStack: ["LLM", "Data Extraction", "Drone Imaging", "PDF Generation", "Python"],
    description: "드론으로 촬영된 농경지 이미지 및 영상에서 데이터를 추출하고, 추출된 이미지를 LLM 모델이 분석하도록 환경을 구축했습니다. 분석 결과를 바탕으로 병해충 발생 상황에 대한 종합적인 진단 PDF 리포트를 생성하여 농업기술센터에 제공하는 국책사업 프로젝트입니다.",
    architecture: "드론 데이터 수집 -> 이미지 전처리 및 특성 추출 -> Vision LLM 병해충 판독 -> 분석 결과 구조화 -> PDF 자동 생성 및 배포",
    coverImage: "/1-agrishield/1.png",
    images: [
      { url: "/1-agrishield/1.png", caption: "대시보드 메인 화면: 기존 프로젝트 목록을 관리하고 새로운 농경지 병해충 분석을 시작할 수 있는 진입점입니다." },
      { url: "/1-agrishield/2.png", caption: "신규 분석 설정: 대상지의 주소, 면적 등의 상세 정보를 입력하고 드론으로 촬영된 원본 이미지 및 로그 데이터를 업로드하여 AI 분석 파이프라인을 가동합니다." },
      { url: "/1-agrishield/3.png", caption: "프로젝트 개요: 분석 처리 상태(진행 중, 완료, 실패)를 직관적인 카드 뷰로 모니터링하며, 현재까지 탐지된 주요 병해충 유형을 요약하여 보여줍니다." },
      { url: "/1-agrishield/6.png", caption: "상세 탐지 목록: AI 모델이 탐지한 병해충 증상을 목록화하여 제공합니다. 각 항목을 클릭하면 해당 이미지가 확대되며, 모델의 구체적인 진단 내역을 확인할 수 있습니다." },
      { url: "/1-agrishield/7.png", caption: "지도 시각화 및 리포트 연동: 분석된 위치 정보를 바탕으로 지도 위에 병해충 발생 지점을 마커로 시각화합니다. 모든 분석 데이터를 종합하여 최종 PDF 보고서를 생성합니다." },
      { url: "/1-agrishield/8.jpg", caption: "자동 생성 PDF 리포트 예시 (1): Vision LLM 기반으로 자동 생성된 PDF 리포트의 실제 출력물입니다. 촬영 위치 데이터와 종합적인 분석 개요가 문서화되어 관공서 제출용으로 활용됩니다." },
      { url: "/1-agrishield/9.jpg", caption: "자동 생성 PDF 리포트 예시 (2): 세부적인 개별 병해충 탐지 결과 및 원본 증상 사진이 포함된 페이지입니다. 실무자가 현장 상황을 정확히 파악할 수 있도록 AI 판독 결과가 일목요연하게 정리되어 있습니다." }
    ],
    keyFeatures: [
      "드론 기반 고해상도 농경지 이미지 데이터 파이프라인 구축",
      "Vision 모델과 LLM을 융합한 정밀 병해충 객체 탐지 및 진단",
      "농업기술센터 실무자용 커스텀 PDF 진단 리포트 자동 생성"
    ],
    role: "AI 데이터 파이프라인 설계 및 LLM 리포트 생성 백엔드 개발"
  },
  {
    id: "ivycode-cli",
    title: "LLM 스트리밍 기반 CLI 툴",
    shortDescription: "사용자 요청 및 툴콜(Tool Call) 기반으로 동작하는 터미널 환경의 LLM 코드 에이전트",
    techStack: ["LLM Streaming", "CLI", "Agentic AI", "Tool Calling", "Prompt Engineering"],
    description: "터미널 환경에서 개발자의 코딩을 돕는 LLM 기반 코드 에이전트입니다. 사용자의 요청, 프롬프트, 툴콜 등의 컨텍스트를 동적으로 구성하며, 스트리밍 응답을 통해 실시간으로 코드를 생성하고 터미널 환경을 제어합니다.",
    architecture: "CLI 인터페이스 (사용자 입력) -> 컨텍스트 매니저 (프롬프트 구성) -> LLM API (스트리밍) -> Tool Execution (파일 조작, 명령어 실행) -> 결과 출력",
    coverImage: "/2-ivycode-cli/Ivycodecli-1-2.png",
    images: [
      { url: "/2-ivycode-cli/Ivycodecli-1-1.png", caption: "CLI 에이전트 초기화 및 툴콜(Tool Call) 처리: 사용자의 자연어 프롬프트를 인식하여 필요한 도구(파일 시스템 접근, 터미널 명령어 실행 등)를 자동으로 기획하고 수행하는 과정입니다." },
      { url: "/2-ivycode-cli/Ivycodecli-1-3.png", caption: "실시간 스트리밍 코드 생성: LLM의 응답을 터미널 상에 실시간 스트리밍으로 부드럽게 출력하며, 생성된 코드를 즉시 프로젝트 파일에 반영하거나 명령어를 백그라운드에서 실행합니다." }
    ],
    keyFeatures: [
      "실시간 LLM 스트리밍 응답을 통한 빠른 사용자 피드백",
      "파일 읽기/쓰기, 터미널 명령어 실행 등 Agentic Tool Call 구현",
      "다양한 LLM API(OpenAI, Anthropic 등) 유연한 연동 구조"
    ],
    role: "핵심 에이전트 로직 설계 및 CLI 프레임워크 구현"
  },
  {
    id: "ivycode-ext",
    title: "VScode Extension 코드 에이전트",
    shortDescription: "VS Code 에디터에 통합된 LLM 기반 지능형 코딩 어시스턴트",
    techStack: ["VS Code Extension API", "TypeScript", "LLM", "Agentic AI"],
    description: "앞서 개발한 CLI 툴의 핵심 코어 로직을 VS Code 확장 프로그램으로 이식한 프로젝트입니다. 에디터 내에서 코드 컨텍스트를 직접 읽어들이고, 자연어 명령만으로 코드 작성, 리팩토링, 버그 수정 등을 자동화하는 에이전트입니다.",
    architecture: "VS Code API 연동 -> 에디터 컨텍스트(열린 파일, 커서 위치 등) 추출 -> LLM 요청 -> 스트리밍 응답 기반 에디터 조작 (코드 삽입/수정)",
    coverImage: "/3-ivycode-ext/Ivycode-ext-1-1.png",
    images: [
      { url: "/3-ivycode-ext/Ivycode-ext-1-2.png", caption: "VS Code 네이티브 인터페이스: 개발 환경에 완벽히 통합된 사이드바 챗봇 뷰어입니다. 자연어 채팅을 통해 에디터 조작, 코드 리뷰, 버그 수정 등을 에이전트에게 지시할 수 있습니다." },
      { url: "/3-ivycode-ext/Ivycode-ext-1-3.png", caption: "Context-Aware 자동 완성 및 분석: 현재 열려있는 파일의 전체 코드, 커서 위치, 그리고 드래그한 블록을 에이전트가 실시간 문맥으로 파악하여 가장 적절하고 정확한 코드 수정안을 제시합니다." },
      { url: "/3-ivycode-ext/Ivycode-ext-1-4.png", caption: "인라인 Diff 뷰어 연동: 에이전트가 제안한 코드 변경 사항을 적용하기 전, 기존 원본 코드와 한눈에 비교할 수 있는 네이티브 Diff 뷰어를 제공하여 개발자가 안전하게 코드를 반영할 수 있도록 지원합니다." }
    ],
    keyFeatures: [
      "현재 열려있는 파일 및 커서 위치를 인식하는 Context-Aware 시스템",
      "선택된 코드 블록에 대한 리팩토링 및 주석 자동 생성",
      "VS Code 네이티브 UI를 활용한 매끄러운 챗봇 인터페이스"
    ],
    role: "VS Code 확장 프로그램 아키텍처 설계 및 에이전트 통합"
  },
  {
    id: "github-code-review",
    title: "LLM 기반 자동 코드리뷰 봇",
    shortDescription: "PR, 커밋 등 이벤트 발생 시 변경사항을 분석하여 코드리뷰를 달아주는 Gitea Webhook & Github App",
    techStack: ["Github App", "Gitea Webhook", "CI/CD", "LLM Code Review", "Node.js"],
    description: "저장소에서 지정된 이벤트(PR 생성, 특정 커밋)가 발생할 때 Webhook을 통해 코드 베이스의 변경사항을 캡처합니다. 이를 LLM에 전달하여 개선점, 보안 취약점, 클린 코드 관점에서의 리뷰를 자동으로 생성하고 Github/Gitea에 코멘트를 남깁니다.",
    architecture: "Webhook Event 수신 -> Git Diff 추출 -> LLM Prompting (리뷰어 페르소나 적용) -> Review Comment 생성 -> Github/Gitea API 호출 및 코멘트 등록",
    coverImage: "/4-githubcodereview/review-1.png",
    images: [
      { url: "/4-githubcodereview/review-2.png", caption: "자동화된 PR 코드 리뷰 봇: Github 또는 Gitea 저장소에 Pull Request가 생성되면 Webhook을 통해 즉시 코드 변경점(Git Diff)을 분석합니다. 버그 발생 가능성, 보안 취약점, 최적화 방안을 마크다운 형태의 상세한 코멘트로 자동 등록해주는 실제 동작 화면입니다." }
    ],
    keyFeatures: [
      "Github 및 Gitea 환경과 호환되는 Webhook 리스너 서버 구축",
      "코드 변경점(Diff) 분석을 통한 문맥 기반의 정확한 리뷰 코멘트 생성",
      "사내 코딩 컨벤션에 맞춘 프롬프트 커스터마이징 기능 지원"
    ],
    role: "리뷰 봇 시스템 전체 설계 및 Webhook 연동 서버 개발"
  },
  {
    id: "company-homepage",
    title: "회사 공식 홈페이지 구축",
    shortDescription: "Next.js 기반의 고성능 풀스택 회사 웹페이지 제작",
    techStack: ["Next.js", "React", "Full-stack", "TypeScript", "Responsive Design"],
    description: "Next.js의 App Router를 활용하여 제작된 기업 공식 홈페이지입니다. SEO 최적화, 반응형 디자인, 그리고 빠른 페이지 로드 속도를 달성하기 위해 다양한 최적화 기법을 적용했습니다.",
    architecture: "Next.js Frontend & Backend API Routes 연동 -> 정적 및 동적 렌더링 혼합 적용 -> 컴포넌트 기반 UI 아키텍처",
    coverImage: "/6-home-page/Clevi1-1.png",
    images: [
      { url: "/6-home-page/Clevi1-2.png", caption: "Next.js 기반 고성능 랜딩 페이지: 회사의 비전과 연혁을 세련된 UI로 담아낸 메인 화면입니다. Server-Side Rendering(SSR)을 적극적으로 활용하여 검색 엔진 최적화(SEO)와 압도적으로 빠른 초기 로딩 속도를 달성했습니다." },
      { url: "/6-home-page/Cs-1.png", caption: "반응형 서비스 포트폴리오 뷰: 모바일, 태블릿, 데스크탑 등 다양한 디바이스 화면 크기에 완벽하게 대응하는 반응형 그리드 레이아웃을 구축하여, 주요 서비스와 포트폴리오를 방문자에게 직관적으로 소개합니다." }
    ],
    keyFeatures: [
      "검색 엔진 최적화(SEO) 및 Server-Side Rendering(SSR) 적용",
      "다양한 디바이스 환경에 맞춘 유연한 반응형 UI/UX",
      "회사 소개, 연혁, 서비스 포트폴리오를 효율적으로 전달하는 랜딩 페이지"
    ],
    role: "풀스택 웹 프론트엔드/백엔드 아키텍처 구축 및 UI 구현"
  }
];
