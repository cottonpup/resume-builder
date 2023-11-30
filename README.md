<h1 align="middle">Resume.io</h1>
<p align="middle">간단한 입력으로 빠르게 이력서를 만들어주는 웹 애플리케이션 ✍️</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-yellow?style=flat-square" alt="template version"/>
  <a target="_blank">
    <img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>
<div align="middle">
  <img width="1678" alt="resume-io" src="https://github.com/daybrush/moveable/assets/67526014/b8b9f026-bdd0-406b-8090-25011ce84186">
</div>

<br/>


## 🫥 목차
- [실행 방법]
- [개요](#개요)
- [기술스택](#기술스택)
- [기술 선택 이유](#기술-선택-이유)
- [프로젝트 주요기능 소개](#프로젝트-주요기능-소개)
- [트러블 슈팅](#트러블-슈팅)

<br/>

## 🔥 소개 ( [Demo](https://resume-builder-henna-alpha.vercel.app/) )
[Resume.io](https://resume.io/)는 단순한 입력만으로도 짧은 시간에 프로페셔널한 이력서를 만들 수 있는 매력적인 웹사이트입니다. 하지만 한국어 지원이 없어서 한국어로 인풋 작성이 아예 불가능합니다. 저는 그에 아쉽기도 했고 매우 좋은 UX/UI 를 가진 프로젝트 같아서 직접 클론 개발하기로 결심했습니다. 이를 통해 한국어 사용자들도 쉽게 이력서를 작성할 수 있게 도와드리고 싶습니다. 제 목표는 사용자 경험을 최적화하고, 이력서 디자인에서도 다양한 옵션을 제공하여 선택의 폭을 넓히고 싶습니다. 

<br/>

## 🚀 실행 방법

### 프로젝트 클론 및 의존성 설치

```bash
$ git clone https://github.com/cottonpup/resume-builder.git
```

```bash
$ npm install
# or
$ yarn install
```

```bash
$ npm start
# or
$ yarn run start
```
<br/>

## 📚 기술 스택

| Typescript | React | Redux |
|:------------:|:-------:|:-------:|
| <img src="https://user-images.githubusercontent.com/21965795/174472604-4e0c144f-4500-4cc6-80b7-3dd29c907171.png" width="100px"/> | <img src="https://user-images.githubusercontent.com/21965795/176630651-1248191d-432c-45ac-b876-9e5ff54e36f9.png" width="100px" > | <img src="https://img.stackshare.io/service/5448/13142323.png" width="100px" height="100px" style="background-color: white;"/> |

|  Tailwind | Draft.js | uuid |
|:------------:|:-------:|:-------:|
| <img src="https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png" width="100px"/> | <img src="https://img.stackshare.io/service/5388/9xvwNLlR_400x400.jpg" width="100px"/> | <img src="https://img.stackshare.io/package/15916/default_e0a4fb1126d7400f419f0931cf1669947a5bc552.png" width="100px"/> |



<br/>

## 🌲 디렉터리 구조
```bash
.
├── dist
├── public
└── src/
    ├── components/
    │   ├── EditorView
    │   ├── hooks
    │   ├── PagesView/
    │   │   ├── content
    │   │   ├── footer
    │   │   ├── header
    │   │   └── hooks
    │   └── UI/
    │       ├── Buttons
    │       ├── DatePicker
    │       ├── Inputs
    │       └── RichTextEditor
    └── state/
        ├── action-creators
        ├── action-types
        ├── actions
        └── reducers
```
<br/>

## ⚙️ 주요 기능 소개
- 드래그 앤 드랍 기능
	- 텍스트 블록을 드래그 앤 드랍 기능을 통해 쉽게 순서를 변경할 수 있습니다. 
- 다양한 서식과 디자인 템플릿 (`WIP`)
	- 다양한 디자인과 레이아웃 템플릿을 제공하여 사용자가 원하는 스타일에 맞게 레쥬메를 작성할 수 있습니다.∑
- 한국어 (다국어) 작성 지원
	- 다양한 언어를 지원하여 한국어 사용자도 레쥬메를 작성할 수 있습니다.
- 텍스트 포맷팅
	- 사용자가 입력한 텍스트 구간을 스타일링 할 수 있습니다.
- 간편한 정보 입력
	- 사용자가 개인 정보, 경력, 교육 등의 항목을 쉽게 입력하고 관리할 수 있는 사용자 친화적인 입력 인터페이스를 제공합니다. 또한 좋은 예시들을 보여주고 추천 키워드를 띄어줍니다.
- 리얼타임 미리보기
	- 정보를 입력하는 동시에 레쥬메의 실∑시간 미리보기를 제공하여 작성 중인 내용의 레이아웃과 서식을 확인할 수 있습니다.
- Export 옵션 (`WIP`)
	- 작성한 레쥬메를 PDF나 워드 문서 등 다양한 형식으로 내보내어 다른 곳에서 사용하거나 공유할 수 있습니다.
- 저장 및 관리 (`WIP`)
	- 사용자 계정을 통해 작성한 레쥬메를 저장하고 관리할 수 있으며, 필요할 때 언제든지 열람하거나 편집할 수 있습니다
	
<br/>

## ⁉️ 트러블 슈팅과 고민

<br/>




