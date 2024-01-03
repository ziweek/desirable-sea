# Hello, Desirable BaDang


<img src="/src/banner.png"/>

**제주위성데이터를 활용한 장기방치차량 탐지 지능형 플랫폼**  
"Intelligent Platform for Long-Term Abandoned Vehicle Detection Utilizing Jeju Satellite Data"

<p align="left">
  <img src="https://img.shields.io/badge/ultralytics-YOLOv8-FEE500?style=flat-square"/>
  <img src="https://img.shields.io/badge/OpenMMLab-MMRotate-FEE500?style=flat-square"/>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white"/>
  <br/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Amazon%20AWS-FF9900?style=flat-square&logo=amazonaws&logoColor=white"/>
</p>

<br/>
<br/>
<br/>

<table>
  <tr>
    <td>
      <p align='center'>김지욱</p>
    </td>
    <td>
      <p align='center'>부선웅</p>
    </td>
  </tr>
   <tr>
    <td>
      <img src="https://drive.google.com/uc?export=view&id=1459-NPm4sC50nrQRdjTpmpz_eKunIi04" width=210 height=280/>
    </td>
    <td>
      <img src="https://drive.google.com/uc?export=view&id=1RXq9nhJ5xsv_tMCUZ4l6QwDeiyR1mtSD" width=210 height=280/>
    </td>
  </tr>
  <tr>
    <td>
      <p align='center'>
        <a href='' target="_blank">
          <img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
        </a>
      </p>
    </td>
    <td>
      <p align='center'>
        <a href='' target="_blank">
          <img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
        </a>
      </p>
    </td>
  </tr>
</table>



<br/>
<br/>
<br/>



# Introduction
프로젝트에 대한 소개

이 프로젝트는 제주 위성 데이터를 활용하여 장기 방치된 차량을 탐지하는 지능형 플랫폼을 개발하는 것을 목표로 합니다. 제주 위성 데이터는 차량의 위치, 이동 패턴, 및 주변 환경에 대한 다양한 정보를 제공하여 차량 관리 및 도로 안전에 대한 효과적인 해결책을 제시할 수 있습니다.

### 1.1 프로젝트 목표

1. 장기 방치 차량 탐지: 제주 위성 데이터를 기반으로 고도화된 이미지 분석 및 패턴 인식 기술을 활용하여 도로 및 주차장에서 장기 방치된 차량을 식별하고 탐지합니다.
2. 실시간 감시 시스템: 프로젝트는 실시간으로 데이터를 수집하고 분석하여 차량의 이동 패턴을 추적하며, 이를 통해 즉각적인 행동을 취할 수 있는 감시 시스템을 구축합니다.
3. 데이터 시각화 및 리포팅: 효과적인 의사 결정을 위해 제주 위성 데이터를 시각적으로 표현하고, 관련 정보에 대한 리포팅 기능을 개발하여 관리자 및 관련 기관에게 유용한 정보를 제공합니다.

<br/>

### 1.2 프로젝트 기대효과

1. 도로 안전 강화: 장기 방치된 차량의 신속한 감지를 통해 도로 안전성을 향상시키고 교통 체증을 방지합니다.
2. 도시 환경 개선: 장기 방치 차량의 효율적인 관리를 통해 도시 환경을 개선하고 시민들에게 더 나은 교통 환경을 제공합니다.
3. 정확한 데이터 기반 의사 결정: 실시간 데이터 수집과 시각화를 통해 정확한 차량 이동 패턴 및 도로 사용 통계를 제공하여 정부 기관 및 도로 유지보수 조직이 미래 계획 및 운영에 대한 더 나은 의사 결정을 할 수 있습니다.



<br/>
<br/>
<br/>



# Architecture
프로젝트에 대한 소개

### 2.1 시스템 아키텍처

데이터 수집 및 전처리: 제주 위성 데이터를 수집하고 전처리하여 고품질의 입력 데이터를 생성합니다.
이미지 분석 및 패턴 인식: 고도화된 이미지 분석 및 패턴 인식 기술을 통해 장기 방치된 차량을 탐지하고 이동 패턴을 추출합니다.
실시간 감시 시스템: 탐지된 데이터를 실시간으로 감시하고 이를 관리자에게 효과적으로 전달하는 시스템을 구축합니다.
데이터 시각화 및 리포팅: 정확한 시각화 도구를 활용하여 데이터를 시각적으로 표현하고, 리포팅 기능을 통해 의사 결정에 필요한 정보를 제공합니다.

<br/>

### 2.2 핵심 기술

위성 데이터 처리: 제주 위성 데이터를 처리하기 위한 고급 이미지 처리 및 GIS 기술을 적용합니다.
딥러닝 알고리즘: 차량 인식 및 패턴 분석을 위해 딥러닝 알고리즘을 구현하여 정확한 결과를 도출합니다.
실시간 데이터 처리: 데이터의 실시간 처리를 위해 병렬 및 분산 처리 기술을 활용하여 성능을 최적화합니다.
데이터 시각화: 효과적인 데이터 시각화를 위해 강력한 시각화 도구 및 기술을 도입합니다.



<br/>
<br/>
<br/>



# Production

### 예산 및 리소스

예산 및 리소스는 팀 규모, 기술 선택 등에 따라 유동적으로 조정될 수 있음
팀 구성: 개발자, 데이터 과학자, 디자이너, 프로젝트 매니저
하드웨어 및 소프트웨어 인프라 구축에 필요한 예산 고려

<br/>

### 프로젝트 일정

요구사항 분석 및 계획 수립 (1개월): 프로젝트 목표를 명확히 하고 필요한 리소스를 계획합니다.
데이터 수집 및 전처리 개발 (2개월): 제주 위성 데이터 수집 및 전처리를 위한 시스템을 개발합니다.
이미지 분석 및 패턴 인식 개발 (3개월): 딥러닝 알고리즘을 구현하여 차량 탐지 및 패턴 인식 시스템을 개발합니다.
실시간 감시 시스템 구축 (2개월): 탐지된 데이터를 실시간으로 감시하고 관리자에게 전달하는 시스템을 구축합니다.
데이터 시각화 및 리포팅 개발 (2개월): 정확한 시각화 도구를 도입하고 리포팅 기능을 개발합니다.
시스템 통합 및 테스트 (2개월): 각 구성 요소를 통합하고 시스템 전반에 대한 테스트를 진행합니다.
배포 및 운영 (1개월): 시스템을 실제 운영 환경에 배포하고 운영을 시작합니다.



<br/>
<br/>
<br/>



# Comment

김지욱


부선웅






