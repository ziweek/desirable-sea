# Hello, BaDang

<img src="./src/banner_ko.png"/>

<p align="center">
  <a href='https://github.com/ziweek/desirable-sea/blob/main/README.md'>
    KOREAN
  </a>
  &nbsp;|&nbsp;
  <a href='https://github.com/ziweek/desirable-sea/blob/main/README_EN.md'>
    ENGLISH
  </a>
  <br/>
  <br/>
  <strong>제주 위성데이터를 활용한 장기방치차량 탐지 지능형 플랫폼</strong>
  <br/>
  <strong>Intelligent Platform for Long-Term Abandoned Vehicle Detection Utilizing Jeju Satellite Data</strong>
  <br/>
  <br/>

  <a href='https://paperswithcode.com/task/image-super-resolution'>
    <img src="https://img.shields.io/badge/Paperswithcode-Image%20Super%20Resolution-25c2a0?style=flat-square"/>
  </a>
  <a href='https://github.com/XPixelGroup/HAT'>
    <img src="https://img.shields.io/badge/XPixelGroup-HAT-EF2D5E?style=flat-square"/>
  </a>
  <a href='https://github.com/xinntao/ESRGAN?tab=readme-ov-file'>
    <img src="https://img.shields.io/badge/Xintao-ESRGAN-EF2D5E?style=flat-square"/>
  </a>
  <img src="https://img.shields.io/badge/Weights%20&%20Biases-dea500?style=flat-square&logo=weightsandbiases&logoColor=white&text=white"/>
  </br>
  
  <a href='https://paperswithcode.com/task/object-detection-in-aerial-images'>
    <img src="https://img.shields.io/badge/Paperswithcode-Object%20Detection%20In%20Aerial%20Images-25c2a0?style=flat-square"/>
  </a>
  <a href='https://github.com/open-mmlab/mmrotate'>
    <img src="https://img.shields.io/badge/OpenMMLab-MMRotate-EF2D5E?style=flat-square"/>
  </a>
  <a href='https://github.com/ZFTurbo/Weighted-Boxes-Fusion'>
    <img src="https://img.shields.io/badge/Ensemble-Weighted%20Boxes%20Fusion-EF2D5E?style=flat-square"/>
  </a>
  <br/>

  
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Google%20Maps-4285F4?style=flat-square&logo=googlemaps&logoColor=white"/>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"/>
</p>
<br/>
<br/>
  
<p align="center">  
  <strong>아래의 뱃지에서 프로토타입을 확인해보세요.<strong>
  <br/>
  <br/>
  <a href='https://desirable-sea.vercel.app/'>
    <img src="https://img.shields.io/badge/Product-Vercel-000000?style=flat-square"/>
  </a>
  <a href='https://goor.me/edkv2g6bKZt7nopy6'>
    <img src="https://img.shields.io/badge/Model-goorm-ffffff?style=flat-square"/>
  </a>
  <a href='https://colab.research.google.com/drive/13-VZyx3LiYPRS8aw-AcMSBK0Z4--TF2j?usp=sharing'>
    <img src="https://img.shields.io/badge/Tutorial-Google%20Colab-F9AB00?style=flat-square"/>
  </a>
</p>

<br/>
<br/>

# 1. 프로젝트 개요

> [!NOTE]
> * 본 아이디어는, 제주특별자치도에서 주최하는 [2023년도 제주 위성데이터 활용 경진대회](https://aifactory.space/task/2700/overview)에 출품하여 대상(제주특별자치도지사상)을 수상한 프로젝트입니다.
> * 본 아이디어는, 제주 위성데이터를 활용하고 컴퓨터 비전의 객체 인식 AI 기술을 적용하여, 제주 지역에서 장기적으로 주차되거나 방치되어 있는 차량을 탐지하고, 해당 정보를 유관 기관이 통합하여 관리할 수 있는 지능형 플랫폼을 연구 및 개발하는 것입니다.

https://github.com/ziweek/desirable-sea/assets/99459331/4a7edb47-754c-47fd-8dab-7d2adbb045ec

<table>
  <tr>
     <td>
      <p align='center'>
        해상도 이미지 모델
      </p>
    </td>
    <td>
      <p align='center'>
        소형 객체 인식 모델링
      </p>
    </td>
    <td>
      <p align='center'>
        프로덕트 웹페이지
      </p>
    </td>
  </tr>
   <tr>
    <td>
      <img src="./src/preview-super-image-resolution.png"/>
    </td>
    <td>
      <img src="./src/preview-small-object-detection.png"/>
    </td>
    <td>
      <img src="./src/preview-product-webpage.png"/>
    </td>
  </tr>
</table>
<br/>

<br/>
<br/>



# 업데이트 로그

<details>
  <summary>
    <b>
      예선 제출물 (2024.01.03)
    </b>
  </summary>

  - Product
    - 프론트엔드 개발 완료. 메인 서버와 딥러닝 서버를 구분하여 개발 중에 있음.
  - Model
    - 아래의 프로덕트 > 모델링 > 추론 실행방법을 참고하여, 베이스라인을 기반으로 한 MVP 시연이 가능함.
  
      https://github.com/ziweek/desirable-sea/assets/99459331/a861922b-2486-45da-9844-30aa821bff28

</details>

<details>
  <summary>
    <b>본선 제출물 (2024.01.21)</b>
  </summary>
  
  - Product
    - 공공데이터 포털에서 제공하는 [제주특별자치도_주차장기본정보](https://www.data.go.kr/data/15099715/openapi.do) 사용함.
      <img src="./src/public-api-data.png" width="100%"/>
    - 서버와 데이터베이스 연동
      <img src="./src/server-doc.png" width="100%"/>
    - 반응형 UI 개발 완료 및 다크모드 지원
      <img src="./src/darkmode.png" width="100%"/>
    - PWA(Progressive Web Apps) 지원 ([설치방법](https://github.com/ziweek/desirable-sea/tree/main?tab=readme-ov-file#pwa-%EC%84%A4%EC%B9%98%EB%B0%A9%EB%B2%95))
      <img src="./src/ui-mobile.png"/>
  - Model
    - 원본데이터에 Super Image Resolution 딥러닝 모델을 적용하여 해상도 개선
      <img src="./src/comp-super-image-resolution.png" width="100%">
    - 원본데이터에 대해 데이터 라벨링 진행

      https://github.com/ziweek/desirable-sea/assets/99459331/2212ce20-bb1b-42f8-a97c-bebd22ce3fb3
      
    - 성능지표가 크게 개선됨. (mAP : 73.4 -> 78.9 )
      <img src="./src/model-improvement.png" width="100%"/>
    - 기존의 결과값에 비해 정확도 및 신뢰도가 대폭 상승함. (ship 30% -> small vehicle 91%)
      <img src="./src/dif-precision.png" width="100%"/>
    - 기존의 모델이 흰색 차량만을 식별했던 것과 달리 검은색, 검은색의 차량도 식별함.
      <img src="./src/dif-color.png" width="100%"/>
    - 건물의 그림자가 걸쳐진 차량도 식별함.
      
      <img src="./src/dif-shadow.png" width="100%"/>

  - README
    - CoLab 튜토리얼 추가 [![CoLab](https://img.shields.io/badge/Tutorial-Google%20Colab-F9AB00?style=flat-square)](https://colab.research.google.com/drive/13-VZyx3LiYPRS8aw-AcMSBK0Z4--TF2j?usp=sharing)
      
      
</details>

<br/>
<br/>

# 2. 프로덕트

## 2.1 아키텍처

<details >
  <summary><b>아키텍처 구조</b></summary>
  <img src="./src/service-architecture.png">
</details>

<details >
  <summary><b>데이터 활용</b></summary>
  <img src="./src/comp-super-image-resolution.png">

  https://github.com/ziweek/desirable-sea/assets/99459331/2212ce20-bb1b-42f8-a97c-bebd22ce3fb3
  
</details>

## 2.2 초고해상도 이미지 모델

<details >
  <summary><b>디렉토리 구조</b></summary>
  
```
ESRGAN
├── LR                      # Pytorch 모델을 저장하는 폴더입니다.
│   └── demo.png            # MVP 시연에 사용될 데모 이미지입니다.
├── models
│   ├── ...
│   └── RRDB_ESRGAN_x4.pth  # 베이스라인 관련 코드입니다.
├── ...
└── results
    └── demo_rlt.png        # 모델링 결과로 출력되는 이미지입니다.
```
</details>

<details >
  <summary><b>초기 설치방법</b></summary>

1. setup.sh 파일 만들기.
2. 아래의 쉘스크립트 복사 후 붙여넣기.
3. 터미널에서 setup.sh 실행


```shell

git clone https://github.com/xinntao/ESRGAN
cd ESRGAN

cd models
wget --load-cookies ~/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies ~/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=1TPrz5QKd8DHHt1k8SRtm6tMiPjz_Qene' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=1TPrz5QKd8DHHt1k8SRtm6tMiPjz_Qene" -O RRDB_ESRGAN_x4.pth && rm -rf ~/cookies.txt
cd ..

cd LR
wget https://raw.githubusercontent.com/ziweek/desirable-sea/main/src/demo.png
cd ..
```
</details>


<details >
  <summary><b>추론 실행방법</b></summary>

1. 아래의 쉘스크립트 복사 후 터미널에 붙여넣기.
2. 터미널에서 실행하기.
3. 동일 디렉토리 내에서 result-resolution.jpg 파일 확인하기.

```shell
python test.py
```


<img src="./src/result.png">

</details>

## 2.3 소형 객체 인식 모델

<details >
  <summary><b>디렉토리 구조</b></summary>
  
```
desirable-sea
├── checkpoints  # Pytorch 모델을 저장하는 폴더입니다.
├── mmrotate     # 베이스라인 관련 코드입니다.
│   ├── config
│   ├── ...
│   └── demo
├── ...
├── demo.png     # MVP 시연에 사용될 데모 이미지입니다.
└── result.jpg   # 모델링 결과로 출력되는 이미지입니다.
```
</details>

<details >
  <summary><b>초기 설치방법</b></summary>

1. setup.sh 파일 만들기.
2. 아래의 쉘스크립트 복사 후 붙여넣기.
3. 터미널에서 setup.sh 실행

```shell
# this code is written in Linux.

sudo apt update
sudo apt -y install libgl1-mesa-glx

wget https://repo.anaconda.com/miniconda/Miniconda3-py37_4.9.2-Linux-x86_64.sh
chmod +x Miniconda3-py37_4.9.2-Linux-x86_64.sh
bash ./Miniconda3-py37_4.9.2-Linux-x86_64.sh -b -f -p /usr/local
which conda
conda --version

pip install torch==1.7.0+cu110 torchvision==0.8.1+cu110 torchaudio==0.7.0 -f https://download.pytorch.org/whl/torch_stable.html
pip install openmim --use-feature=2020-resolver
mim install mmcv-full==1.5.3
mim install mmdet==2.25.1

git clone https://github.com/open-mmlab/mmrotate.git
cd mmrotate
pip install -r requirements/build.txt
pip install -v -e .

cd ..


mkdir checkpoints
cd checkpoints
wget https://download.openmmlab.com/mmrotate/v0.1.0/redet/redet_re50_fpn_1x_dota_ms_rr_le90/redet_re50_fpn_1x_dota_ms_rr_le90-fc9217b5.pth
cd ..

wget https://raw.githubusercontent.com/ziweek/desirable-sea/main/src/demo.png

```
</details>


<details >
  <summary><b>추론 실행방법</b></summary>

1. 아래의 쉘스크립트 복사 후 터미널에 붙여넣기.
2. 터미널에서 실행하기.
3. 동일 디렉토리 내에서 result.jpg 파일 확인하기.

```shell
python mmrotate/demo/image_demo.py demo.png mmrotate/configs/redet/redet_re50_refpn_1x_dota_ms_rr_le90.py checkpoints/redet_re50_fpn_1x_dota_ms_rr_le90-fc9217b5.pth --out-file result.jpg
```


<img src="./src/result.png">

</details>

## 2.4 웹페이지

<details >
  <summary><b>PWA 설치방법</b></summary>

iOS에서 설치하는 방법:

1. iOS 기기에서 Safari를 열고 PWA가 호스팅된 URL로 이동합니다.
2. 화면 하단에 있는 공유 아이콘을 탭합니다.
3. 화면을 아래로 스크롤하여 "홈 화면에 추가"를 탭합니다.
4. 다음 화면에서 원하는 경우 앱의 이름을 변경할 수 있습니다. 우측 상단의 "추가"를 탭합니다.
5. PWA 아이콘이 홈 화면에 나타납니다. 앱을 시작하려면 해당 아이콘을 탭합니다.

Android에서 설치하는 방법:

1. Android 기기에서 Chrome 브라우저를 열고 PWA가 호스팅된 URL로 이동합니다.
2. 화면 우측 상단의 세 점 메뉴를 탭합니다.
3. "홈 화면에 추가"를 탭합니다.
4. 다음 화면에서 원하는 경우 앱의 이름을 변경할 수 있습니다. 우측 상단의 "추가"를 탭합니다.
5. PWA 아이콘이 홈 화면에 나타납니다. 앱을 시작하려면 해당 아이콘을 탭합니다.

</details>

<br/>
<br/>

# 3. 팀원 소개

<table>
  <tr>
    <td>
      <p align='center'>김지욱</p>
    </td>
    <td>
      <p align='center'>
        <img src="https://drive.google.com/uc?export=view&id=1459-NPm4sC50nrQRdjTpmpz_eKunIi04" width=600/>
        <a href='https://github.com/ziweek' target="_blank">
          <img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
        </a>
      </p>
    </td>
    <td>
      <p align='left'>
        이 프로젝트에 리더로 참여하여 먼저, 장기 방치 차량 문제에 직면해 이를 관리 하기 위한 지능형 플랫폼의 필요성을 깨닫게 되었습니다. Next.js, Google Map API, 그리고 FastAPI 등의 현대적인 기술들을 통합함으로써 우리의 솔루션은 효율적이고 사용자 친화적인 장기 방치 차량 관리를 실현하며, 위성데이터를 활용한 지능형 플랫폼의 발전에 일조하는 데 자부심을 느낄 수 있었습니다. 이 플랫폼은 제주의 차량문제를 혁신하고 미래 도시 계획에 기여하는 중요한 발판으로서의 역할을 할 것으로 기대됩니다.
      </p>
    </td>
  </tr>
  
   <tr>
    <td>
      <p align='center'>부선웅</p>
    </td>
    <td>
      <p align='center'>
        <img src="https://drive.google.com/uc?export=view&id=1RXq9nhJ5xsv_tMCUZ4l6QwDeiyR1mtSD" width=600/>
        <a href='https://github.com/Boo-seon-woong' target="_blank">
          <img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
        </a>
      </p>
    </td>
    <td>
      <p align='left'>
        CTO로 참여한 이 프로젝트는 최신 기술을 활용하여 제주의 장기 방치 차량 문제에 도전하는 흥미로운 경험이었습니다. 위성데이터와 딥러닝을 결합하여 차량을 정확하게 탐지하는 시스템을 개발하는 과정에서, 기술적인 도전과 혁신의 기회를 마주하게 되었습니다. 이 플랫폼은 미래 제주의 스마트한 지능형 시스템을 모색하는 데 있어 핵심적인 역할을 할 것으로 자부하고 있습니다.
      </p>
    </td>
  </tr>
</table>
