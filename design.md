# Portfolio Design Guide

이 문서는 Kunho 포트폴리오 페이지를 추가하거나 수정할 때 유지해야 할 전반적인 디자인 원칙을 정리한다. 처음 설계할 때의 핵심 방향은 "AI 연구자를 하나의 제품처럼 소개하는 Apple-style 포트폴리오"이며, 모든 페이지는 절제된 제품 페이지의 밀도와 연구 프로젝트 문서의 가독성을 함께 가져가야 한다.

## Overall Direction

- 사이트는 개인 소개 페이지라기보다 `Kunho Pro`라는 제품을 소개하는 듯한 인상을 준다.
- 화면은 여백이 넓고 조용해야 하며, 정보는 짧고 강하게 배치한다.
- 장식보다 구조가 먼저 보이게 한다. 큰 타이포그래피, 명확한 카드, 얇은 구분선, 은은한 그림자가 기본이다.
- AI, RAG, LLM, Agent 같은 기술 키워드는 시각 요소 안에서도 제품 사양처럼 다룬다.
- 각 프로젝트는 독립적인 색 테마를 만들지 않고, 메인 포트폴리오의 시각 언어 안에서 확장한다.

## Design Keywords

- **Apple-like restraint**: 과한 장식 없이 넓은 여백, 큰 제목, 조용한 색 대비를 사용한다.
- **Productized researcher**: 사람을 "AI Researcher"라는 제품 사양처럼 소개한다.
- **Technical clarity**: 복잡한 연구 주제도 카드, 메타 정보, 라벨 리스트로 빠르게 훑을 수 있게 만든다.
- **Glass and light surfaces**: 반투명 상단바, 밝은 카드, 얇은 테두리, 부드러운 blur를 사용한다.
- **Focused accent colors**: 파랑, 청록, 주황을 제한적으로 사용해 기술적이고 선명한 인상을 만든다.

## Visual System

### Color

CSS 변수 기준:

- `--page: #f5f5f7` - 전체 페이지 배경. Apple 제품 페이지처럼 밝고 차분한 회색이다.
- `--surface: #ffffff` - 카드와 주요 콘텐츠 표면.
- `--ink: #1d1d1f` - 기본 본문과 제목.
- `--muted: #6e6e73` - 보조 설명, 캡션, 메타 텍스트.
- `--line: #d2d2d7` - 얇은 구분선과 테두리.
- `--dark: #050506` - 검은 feature 섹션 배경.
- `--blue: #0071e3` - 주요 액션, 링크, 기술 라벨의 핵심 강조색.
- `--teal: #00a6a6` - AI/시스템 계열 보조 강조색.
- `--orange: #f56300` - eyebrow, 핵심 포인트, 따뜻한 강조색.

Color rules:

- 전체 화면이 하나의 강한 색으로 지배되지 않게 한다.
- 파랑은 액션과 링크에 우선 사용한다.
- 주황은 섹션의 작은 시작점, 즉 eyebrow 역할에 사용한다.
- 청록은 RAG, 시스템, 모니터링처럼 기술적 균형을 주는 보조색으로 사용한다.
- 프로젝트 상세 페이지에서 별도 브랜드 컬러를 만들지 않는다.

### Typography

- 기본 폰트 스택은 Apple 시스템 폰트와 한국어 폰트를 함께 사용한다: `-apple-system`, `BlinkMacSystemFont`, `SF Pro Display`, `SF Pro Text`, `Apple SD Gothic Neo`, `Pretendard`, `Segoe UI`, `sans-serif`.
- 제목은 크고 단단하게, 본문은 넉넉한 line-height로 읽기 쉽게 둔다.
- 히어로 제목은 제품 런칭 페이지처럼 매우 크게 사용한다.
- 카드 안의 제목은 짧은 문장으로 두고, 설명은 한두 줄 안에서 끝낸다.
- `letter-spacing`은 0을 유지한다. 인위적인 압축감이나 장식적 자간을 만들지 않는다.
- 한국어 문장은 `word-break: keep-all` 기준으로 자연스럽게 줄바꿈되도록 작성한다.

### Layout

- 전역 최대 폭은 `--max: 1120px`를 기준으로 한다.
- 본문은 중앙 정렬된 단일 흐름을 유지한다.
- 히어로는 좌측 카피와 우측 제품 비주얼의 2열 구조를 사용하되, 모바일에서는 1열로 전환한다.
- 섹션 간 간격은 넓게 둔다. 콘텐츠가 빽빽하게 이어지지 않아야 한다.
- 카드 그리드는 기본적으로 2열이며, 좁은 화면에서는 1열이다.
- 긴 보고서 페이지에서도 본문 폭을 줄이는 영구 사이드바는 쓰지 않는다.

### Surfaces, Radius, and Shadow

- 카드와 패널은 밝은 표면, 얇은 테두리, 부드러운 그림자를 사용한다.
- 주요 카드 반경은 대체로 `24px`에서 `28px` 사이를 사용한다.
- 보고서 내부 이미지와 작은 정보 박스는 `18px` 전후의 반경을 사용한다.
- 버튼은 pill 형태를 사용해 제품 페이지의 CTA처럼 보이게 한다.
- 그림자는 콘텐츠를 띄우는 용도이지 장식의 중심이 되면 안 된다.

### Motion

- 스크롤 진입 애니메이션은 `reveal` 클래스를 사용한다.
- 기본 동작은 아래에서 위로 살짝 올라오며 opacity가 전환되는 정도로 제한한다.
- `prefers-reduced-motion: reduce` 환경에서는 애니메이션을 제거한다.
- hover는 카드가 조금 떠오르는 정도로만 사용한다.

## Main Page Elements

### Topbar

- 상단바는 sticky이며 반투명 배경과 blur를 사용한다.
- 높이는 낮게 유지해 제품 페이지의 내비게이션처럼 보이게 한다.
- 브랜드명은 `Kunho`로 짧게 유지한다.
- 내비게이션 항목은 핵심 섹션으로만 제한한다.

### Hero

- 히어로는 사이트의 첫인상을 결정하는 제품 소개 영역이다.
- `Kunho Pro` eyebrow로 개인을 제품처럼 포지셔닝한다.
- H1은 짧고 선언적인 문장으로 작성한다.
- 오른쪽 `product-stage`는 실제 프로필 이미지를 제품 사진처럼 보여준다.
- `halo`는 파랑, 청록, 주황의 희미한 빛을 섞어 AI/기술/개인성을 함께 암시한다.
- `glass-spec`은 제품 사양 카드처럼 `Designed for LLM, RAG, Agent`를 보여준다.

### Metrics

- 세 개의 요약 카드는 개인의 작업 방식을 짧게 정의한다.
- 번호, 짧은 키워드, 한 문단 설명의 구조를 유지한다.
- 카드 내용은 경력 소개보다 사고방식과 작업 태도를 보여주는 쪽에 가깝다.

### Feature Sections

- 어두운 feature 섹션은 기술적 깊이와 코어 아키텍처를 보여준다.
- 밝은 feature 섹션은 개인적 작업 방식, 기록 습관, 선호하는 구조를 보여준다.
- `feature-visual`의 타일은 RAG, LLM, Monitoring, AI Agent 같은 핵심 역량을 제품 기능처럼 나열한다.

### Project Cards

- 프로젝트 카드는 앱 카드처럼 작동한다.
- 제목보다 먼저 프로젝트명을 작은 라벨처럼 보여준다.
- H3는 프로젝트의 핵심 결과를 한 문장으로 말한다.
- 기술 스택은 `span` 안에 짧게 나열한다.
- CTA는 `자세히 보기`처럼 명확한 이동 동작을 나타낸다.
- hover/focus 상태에서 살짝 떠오르게 하되, 레이아웃이 흔들리지 않게 한다.

### Specs

- Specs 섹션은 개인 정보를 제품 사양표처럼 정리한다.
- `Model`, `Born`, `Physical Spec`, `Core stack`, `Interested in`, `Links` 같은 라벨을 사용한다.
- 이 섹션은 자기소개 문장보다 제품 스펙시트의 느낌을 우선한다.

## Page Types

### Summary Project Page

Use this for short project writeups.

Required structure:

- `project-article`
- `project-lead`
- `project-tags`
- `project-section`
- `project-links`

Content rules:

- Start with a clear project title and one lead paragraph.
- Use tags for the core stack or concepts.
- Keep sections short and scannable.
- End with `Repository` and `Back to projects` buttons.

### Report Project Page

Use this when converting a DOCX, report, paper, assignment, or long technical writeup into a web page.

Required structure:

- `report-article`
- `report-hero`
- `report-meta`
- `report-summary`
- `report-body`
- `report-toc`
- `report-content`
- `report-section`
- `report-label-list`
- `report-figure`
- `report-links`

Content rules:

- Preserve the source document's section order and numbering.
- Do not summarize the document unless the user explicitly asks for a summary.
- Keep the original report language as much as practical.
- Place figures, tables, and screenshots close to their original section.
- Use `figure` and `figcaption` for every image-based table, figure, or screen capture.
- End with `Repository` and `Back to projects` buttons.

## Layout Rules

- Main report width: `report-article` uses a maximum width of `980px`.
- Summary page width: `project-article` uses a maximum width of `860px`.
- The report table of contents must not reduce body text width.
- `report-toc` should be a horizontal block above the body by default.
- `report-toc` may become a floating left widget only when the viewport is at least `1500px` wide.
- Do not use a two-column layout where the TOC permanently takes space from the report content.
- On mobile and tablet widths, keep the TOC in the normal document flow.

## Visual Rules

- Preserve the portfolio background color and Apple-like restraint from `styles.css`.
- Use light surfaces, thin borders, subtle shadows, and moderate radius.
- Do not introduce a different color theme for individual projects unless the user asks.
- Use `report-label-list` for labeled technical bullets, not dense plain bullet lists.
- Use normal paragraphs for explanation-heavy content.
- Images should use `report-figure img` styling: full width, thin border, rounded corners, and subtle shadow.
- Captions should be short and match the original report label when possible, such as `Figure 1. System Architecture`.

## Content Conversion Workflow

When converting from a DOCX or report:

1. Extract the document text and identify the section hierarchy.
2. Extract embedded images into `projects/assets/<project-slug>/`.
3. Map the source structure into `report-section` blocks.
4. Keep source headings, numbering, captions, and references.
5. Convert repeated labeled items into `report-label-list`.
6. Add extracted figures with relative paths from the HTML file.
7. Verify every `img src` path exists.
8. Keep `Repository` and `Back to projects` links at the end.

## File Naming

- Project pages live in `projects/`.
- Project assets live in `projects/assets/<project-slug>/`.
- Use lowercase kebab-case filenames.
- Example:
  - `projects/financial-rag-system.html`
  - `projects/assets/financial-rag-system/image19.png`

## Accessibility

- Every project page must have one `h1`.
- Preserve heading order: `h1`, then `h2`, then `h3`.
- Every image must have meaningful `alt` text.
- Navigation and table-of-contents links should target stable section IDs.
- Interactive project cards on the index page should use accessible labels when the visible text is not enough.
