"use client";

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  InfoWindowF,
  GoogleMapProps,
} from "@react-google-maps/api";
import { useCallback, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Card, Progress, ScrollShadow, Chip, Divider } from "@nextui-org/react";
import Image from "next/image";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// const center = {
//   lat: 33.3846,
//   lng: 126.5535,
// };

function getRandomDateWithinPastYear(): string {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const randomDate = new Date(
    oneYearAgo.getTime() +
      Math.random() * (today.getTime() - oneYearAgo.getTime())
  );

  // Format the date as "YYYY-MM-DD"
  const formattedDate = `${randomDate.getFullYear()}-${(
    randomDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${randomDate.getDate().toString().padStart(2, "0")}`;

  return formattedDate;
}

const markers = [
  {
    name: "남원리 구오일장마당 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.27887642, lng: 126.7213156 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "군민체육관 공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 남원읍 태위로 551-27",
    position: { lat: 33.27752348, lng: 126.7054601 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원 중앙동 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.27907621, lng: 126.7169622 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "동부보건소 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.27539891, lng: 126.7030494 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원 비안동 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.2800576, lng: 126.7183357 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원읍사무소 옆 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.27982988, lng: 126.7203062 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원 광지동 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.28152836, lng: 126.7090267 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원의례회관 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.29441626, lng: 126.7115338 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서성로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.33663982, lng: 126.6947212 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서성로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.34357427, lng: 126.7111462 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원신례 공영노외1주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.288233, lng: 126.6275841 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "의귀교회 인근 공한지 무료주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.31174303, lng: 126.713364 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "의귀교회 인근 공한지 무료주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.3117268, lng: 126.7131681 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "공천포로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.26633516, lng: 126.6430138 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서성로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.35847933, lng: 126.737071 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서성로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.32244704, lng: 126.6474355 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미리 공한지 무료주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 남원읍 태위로 48",
    position: { lat: 33.27303403, lng: 126.6532801 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미출장소 옆 노외공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 남원읍 태위로 105",
    position: { lat: 33.27487703, lng: 126.6586827 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미중앙로 241번길 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.27264343, lng: 126.6679089 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미중앙로 노상공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 남원읍 위미중앙로 204~286",
    position: { lat: 33.27233523, lng: 126.6639386 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미대성로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.28305288, lng: 126.6620968 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미2리 다목적회관 공한지 무료주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 남원읍 위미중앙로 78",
    position: { lat: 33.2830467, lng: 126.6614849 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미2리 다목적회관 공한지 무료주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.28292009, lng: 126.6613432 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미2리 다목적회관 공한지 무료주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.28284868, lng: 126.6616091 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "위미리 공한지 무료주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 남원읍 태위로115번길 15",
    position: { lat: 33.27568618, lng: 126.6603031 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "태위로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.27477239, lng: 126.6734314 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "태위로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.28733763, lng: 126.7462969 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "태위로 977번길 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.28825682, lng: 126.7471692 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서성로 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.33214671, lng: 126.6800836 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "동일다목적회관앞 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.22833111, lng: 126.2413251 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "대정문화체육센터주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 대정읍 암반수마농로 419",
    position: { lat: 33.26213539, lng: 126.2351814 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "송악스테이 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.21197541, lng: 126.2913311 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "백조일손묘역 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.21989256, lng: 126.2855847 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "마라도가는 여객선 주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 대정읍 송악관광로 414",
    position: { lat: 33.20765718, lng: 126.290237 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "송악산 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.20615264, lng: 126.2896512 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "섯알오름 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.20491182, lng: 126.2773247 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "모슬포중앙시장주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 대정읍 영서중로 12 모슬포중앙시장 화장실",
    position: { lat: 33.2209708, lng: 126.2549771 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "하모체육공원주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.21807971, lng: 126.2524862 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주은행맞은편공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.22119015, lng: 126.253216 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "대정읍하모리 노상공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.21973081, lng: 126.2515523 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "대정감협앞공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.22302674, lng: 126.252015 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산읍공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.4486549, lng: 126.9167002 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "고성오일장 옆 공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 성산읍 고성오조로 93",
    position: { lat: 33.45204973, lng: 126.9137848 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산읍사무소 옆 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.4425654, lng: 126.9114847 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "고성리 원광어린이집 인근 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.44915338, lng: 126.9107197 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "고성리 구보건지소 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.45091591, lng: 126.9137295 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산고성1공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.44856022, lng: 126.9166868 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산일출봉 주변 녹지공간 조성 주차장(1)",
    type: "주차장",
    address: null,
    position: { lat: 33.45058787, lng: 126.9221164 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산포항 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.47239525, lng: 126.9331833 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "시흥초등학교주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 성산읍 시흥상동로 113",
    position: { lat: 33.47944842, lng: 126.8947248 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "봄 그리고 가을리조트주차장1",
    type: "주차장",
    address: "제주특별자치도 서귀포시 성산읍 해맞이해안로 2660",
    position: { lat: 33.47395019, lng: 126.9111192 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "봄 그리고 가을리조트주차장2",
    type: "주차장",
    address: null,
    position: { lat: 33.47470061, lng: 126.9108899 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "고성리 회전교차로 공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 성산읍 고성오조로 42",
    position: { lat: 33.44706057, lng: 126.9156154 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "섭지코지 노외공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.42371492, lng: 126.9290165 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산일출봉 주변 녹지공간 조성 주차장(2)",
    type: "주차장",
    address: null,
    position: { lat: 33.45535516, lng: 126.9258338 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성산국민체육센터 주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 성산읍 일주동로 4024",
    position: { lat: 33.46767726, lng: 126.905053 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "소방파출소 공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 성산읍 일주동로4120번길 7",
    position: { lat: 33.4602223, lng: 126.909872 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "동광육거리 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.31087664, lng: 126.3415377 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "산방산 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.23629429, lng: 126.3126249 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "사계포구 공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 형제해안로 16",
    position: { lat: 33.22828806, lng: 126.3053443 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "산방산 남측 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.23586295, lng: 126.3120677 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "용머리 공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 사계남로216번길 28",
    position: { lat: 33.23380074, lng: 126.3108903 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서광초등학교주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 중산간서로 1842",
    position: { lat: 33.28807906, lng: 126.3263253 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "서귀포시축협판매장주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 중산간서로 1914-3",
    position: { lat: 33.29093802, lng: 126.3182141 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "소인국 테마파크주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 중산간서로 1878",
    position: { lat: 33.2897258, lng: 126.3224184 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주신화월드주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 신화역사로304번길 38",
    position: { lat: 33.30336166, lng: 126.3164773 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주항공우주호텔주차장",
    type: "주차장",
    address:
      "제주특별자치도 서귀포시 안덕면 녹차분재로 216 제주특별자치도 항공우주 호텔",
    position: { lat: 33.30131259, lng: 126.2934762 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주신화월드C1주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 안덕면 신화역사로304번길 98",
    position: { lat: 33.30354686, lng: 126.3165457 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "화순사거리 공영주차장(406-2-000041)",
    type: "주차장",
    address: null,
    position: { lat: 33.24623062, lng: 126.33511 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성읍민속마을주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.38449551, lng: 126.8012861 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "민속마을무료주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 표선면 중산간동로 4678",
    position: { lat: 33.38904228, lng: 126.7959529 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주민속촌 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.3243608, lng: 126.8431664 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "표선공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 표선면 표선중앙로 74-1",
    position: { lat: 33.32613319, lng: 126.8316363 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "표션시가지내 노외공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.32503167, lng: 126.8338428 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "면사무소옆 공영노외주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.32597226, lng: 126.8309787 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "표선생활체육관주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 표선면 한마음초등로 399",
    position: { lat: 33.35339576, lng: 126.8147688 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "쇠소깍 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.25411584, lng: 126.6224245 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "효돈중학교 북측 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.26647462, lng: 126.6208338 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "효돈동주민센터 남측 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.26303269, lng: 126.6157079 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "쇠소깍 2주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.25090078, lng: 126.6214403 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "공한지 무료주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.25469958, lng: 126.6224032 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "돔베낭골공영주차장",
    type: "주차장",
    address: "제주특별자치도 서귀포시 태평로92번길 49",
    position: { lat: 33.24013463, lng: 126.5318438 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 공영주차장(405-2-000254)",
    type: "주차장",
    address: "제주특별자치도 제주시 구좌읍 김녕로1길 45-8",
    position: { lat: 33.5578216, lng: 126.7486588 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 공영주차장(405-2-000258)",
    type: "주차장",
    address: null,
    position: { lat: 33.55825996, lng: 126.7629236 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000255)",
    type: "주차장",
    address: "제주특별자치도 제주시 구좌읍 해맞이해안로 1412",
    position: { lat: 33.52591811, lng: 126.8574652 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000257)",
    type: "주차장",
    address: "제주특별자치도 제주시 구좌읍 세평항로 46-11",
    position: { lat: 33.52693784, lng: 126.8563117 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000312)",
    type: "주차장",
    address: null,
    position: { lat: 33.52467461, lng: 126.8561298 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000313)",
    type: "주차장",
    address: null,
    position: { lat: 33.52430114, lng: 126.8567251 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000317)",
    type: "주차장",
    address: null,
    position: { lat: 33.52467461, lng: 126.8561298 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 공영주차장(405-2-000260)",
    type: "주차장",
    address: "제주특별자치도 제주시 구좌읍 만장굴길 182",
    position: { lat: 33.52897298, lng: 126.7720355 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000259)",
    type: "주차장",
    address: null,
    position: { lat: 33.55726836, lng: 126.7945379 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000256)",
    type: "주차장",
    address: "제주특별자치도 제주시 구좌읍 세평항로 13",
    position: { lat: 33.52496631, lng: 126.8530856 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000262)",
    type: "주차장",
    address: "제주특별자치도 제주시 구좌읍 비자숲길 55",
    position: { lat: 33.49130423, lng: 126.8109449 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "하도리 공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.51264109, lng: 126.8975369 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "구좌읍 무료 주차장(405-2-000314)",
    type: "주차장",
    address: null,
    position: { lat: 33.54179382, lng: 126.8109373 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "고성1리종합운동장주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 애월읍 광성로 94",
    position: { lat: 33.4575407, lng: 126.4179105 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "무료주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.47845237, lng: 126.3758438 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "애월읍 무료 주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 애월읍 하귀로21길 30",
    position: { lat: 33.479628, lng: 126.4033243 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "우도 공영 주차장(산호해수욕장 옆)",
    type: "주차장",
    address: null,
    position: { lat: 33.5032269, lng: 126.942873 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "산호해수욕장주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.501893, lng: 126.943864 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "하고수동해수욕장주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.51458977, lng: 126.9573363 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "우도봉주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.4938841, lng: 126.959634 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000284)",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 516로 1865",
    position: { lat: 33.38489104, lng: 126.6199848 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성판악휴게소 공영주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 516로 1865",
    position: { lat: 33.38489104, lng: 126.6199848 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "삼다수숲길 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.42746299, lng: 126.6738904 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "산굼부리분화구대형주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 비자림로 768",
    position: { lat: 33.43486147, lng: 126.6873261 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주돌문화공원소형주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 남조로 2023",
    position: { lat: 33.44998358, lng: 126.6615315 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "에코랜드 테마파크주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 남조로 1982",
    position: { lat: 33.4482208, lng: 126.672342 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주돌문화공원 대형주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 남조로 2023",
    position: { lat: 33.437342, lng: 126.66691 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "산굼부리분화구 소형주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.4349219, lng: 126.689684 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주센트럴파크주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 비자림로 606",
    position: { lat: 33.4337757, lng: 126.675203 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000341)",
    type: "주차장",
    address: null,
    position: { lat: 33.548269, lng: 126.650334 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000271)",
    type: "주차장",
    address: null,
    position: { lat: 33.53464472, lng: 126.6159777 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000272)",
    type: "주차장",
    address: null,
    position: { lat: 33.54160525, lng: 126.634974 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000280)",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 신북로 303",
    position: { lat: 33.53990095, lng: 126.6410427 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000307)",
    type: "주차장",
    address: null,
    position: { lat: 33.53904875, lng: 126.6375263 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000308)",
    type: "주차장",
    address: null,
    position: { lat: 33.53889373, lng: 126.6373673 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000273)",
    type: "주차장",
    address: null,
    position: { lat: 33.53831185, lng: 126.6676081 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000274)",
    type: "주차장",
    address: null,
    position: { lat: 33.54133227, lng: 126.6692952 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000281)",
    type: "주차장",
    address: "제주특별자치도 제주시 조천읍 함덕16길 15-13",
    position: { lat: 33.53983164, lng: 126.6679027 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000309)",
    type: "주차장",
    address: null,
    position: { lat: 33.5404772, lng: 126.6736364 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000310)",
    type: "주차장",
    address: null,
    position: { lat: 33.54247259, lng: 126.6727135 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "조천읍 무료 주차장(405-2-000311)",
    type: "주차장",
    address: null,
    position: { lat: 33.54481717, lng: 126.6622002 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "신양항 주차장1",
    type: "주차장",
    address: "제주특별자치도 제주시 추자면 추자로 576-4",
    position: { lat: 33.94523665, lng: 126.3282534 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "신양항 주차장2",
    type: "주차장",
    address: null,
    position: { lat: 33.94499794, lng: 126.3289084 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "제주해양경찰서 추자파출소 앞 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.9411014, lng: 126.3246299 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "수월봉주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한경면 노을해안로 1013-61",
    position: { lat: 33.29529346, lng: 126.164029 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "차귀도해적잠수함주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.30787804, lng: 126.1637801 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "공영주차장(두모리 2879 )",
    type: "주차장",
    address: null,
    position: { lat: 33.35149242, lng: 126.1842677 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "공영주차장(신창리 232-2)",
    type: "주차장",
    address: null,
    position: { lat: 33.34958995, lng: 126.1845929 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "성김대건신부제주표착기념관주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한경면 용수1길 108",
    position: { lat: 33.32268196, lng: 126.1676042 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "저지오름 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.334887, lng: 126.2480529 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "저지문화예술인마을 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.3382348, lng: 126.265774 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "생각하는 정원 주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한경면 녹차분재로 678",
    position: { lat: 33.3263898, lng: 126.255128 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "유리의성 주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한경면 녹차분재로 462",
    position: { lat: 33.314172, lng: 126.272515 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "라온CC 주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한경면 용금로 998",
    position: { lat: 33.3418295, lng: 126.279563 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "현대미술관 공영 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.33824391, lng: 126.2657809 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "저지녹색체험장 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.33987983, lng: 126.2607602 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "공영주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.36445161, lng: 126.2002004 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "공영주차장(두모리 1499-2)",
    type: "주차장",
    address: null,
    position: { lat: 33.33815257, lng: 126.1957201 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "405-2-000266 한림읍 무료 주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.38888402, lng: 126.2318593 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "405-2-000267 한림읍 무료 주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한림읍 한림로 299",
    position: { lat: 33.39109167, lng: 126.2378721 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "금오름주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.3509628, lng: 126.3057481 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "정물오름주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.34159521, lng: 126.3273959 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "한림민속오일시장 공영주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한림읍 한수풀로4길 10",
    position: { lat: 33.42047845, lng: 126.2738721 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "느지리오름 주차장 ",
    type: "주차장",
    address: "제주특별자치도 제주시 한림읍 봉수대길 5",
    position: { lat: 33.36282595, lng: 126.2604655 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "협재해수욕장주차장",
    type: "주차장",
    address: null,
    position: { lat: 33.39291834, lng: 126.2394979 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "한림공원주차장",
    type: "주차장",
    address: "제주특별자치도 제주시 한림읍 한림로 300",
    position: { lat: 33.39042434, lng: 126.2378484 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "한림읍 무료 주차장(405-2-000306)",
    type: "주차장",
    address: "제주특별자치도 제주시 한림읍 한림로6길 10-4",
    position: { lat: 33.41285625, lng: 126.2623411 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "한림읍 무료 주차장(405-2-000305)",
    type: "주차장",
    address: "제주특별자치도 제주시 한림읍 한림로 682-3",
    position: { lat: 33.41574, lng: 126.2657 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "한림읍 무료 주차장(405-2-000285)",
    type: "주차장",
    address: null,
    position: { lat: 33.4112, lng: 126.2686 },
    startDate: getRandomDateWithinPastYear(),
    imgSrc: "/images/after-detection.jpeg",
  },
];

const MapStyleRetro = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#523735",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9b2a6",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#dcd2be",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ae9e90",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#93817c",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a5b076",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#447530",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#fdfcf8",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#f8c967",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#e9bc62",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#e98d58",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#db8555",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#806b63",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8f7d77",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b9d3c2",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#92998d",
      },
    ],
  },
];

const MapStyleAubergine = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8ec3b9",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1a3646",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#64779e",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4b6878",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#334e87",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6f9ba5",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3C7680",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#304a7d",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#2c6675",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#255763",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#b0d5ce",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#023e58",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#98a5be",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d2c4d",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#283d6a",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#3a4762",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#0e1626",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#4e6d70",
      },
    ],
  },
];

export default function BaseMap() {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [center, setCenter] = useState<any>({
    lat: 33.3846,
    lng: 126.5535,
  });
  const [zoom, setZoom] = useState<number>(11);
  const { systemTheme } = useTheme();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY!,
  });
  const mapRef = useRef<any>();
  const [map, setMap] = useState(null);
  var zoomTemp = zoom;
  const [isDefined, setIsDefined] = useState(false);

  function calculateDateInterval(inputDate: string) {
    const today: Date = new Date();
    const targetDate: Date = new Date(inputDate);

    // Calculate the difference in milliseconds
    const timeDifference: number = today.getTime() - targetDate.getTime();

    // Convert milliseconds to days
    const daysDifference: number = Math.floor(
      timeDifference / (1000 * 60 * 60 * 24)
    );

    return {
      today: formatDate(today),
      targetDate: formatDate(targetDate),
      days: daysDifference,
    };
  }

  function formatDate(date: Date): string {
    const year: number = date.getFullYear();
    const month: string = String(date.getMonth() + 1).padStart(2, "0");
    const day: string = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
    setIsDefined(true);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div className="w-screen h-screen">
      {isLoaded ? (
        <GoogleMap
          ref={mapRef}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            streetViewControl: false,
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: systemTheme == "dark" ? MapStyleAubergine : MapStyleRetro,
          }}
          onZoomChanged={() => {
            // isDefined && mapRef.current.props.zoom == 10;
            isDefined && console.log(mapRef.current.state.map.zoom);
            setZoom(isDefined && mapRef.current.state.map.zoom);
          }}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {markers.map((e, i) => {
            return (
              <MarkerF
                onLoad={onLoad}
                key={i}
                title={e.name}
                position={e.position}
                clickable
                onMouseDown={() => {
                  setSelectedMarker(e);
                  setCenter({
                    lat: e.position.lat + 0.015,
                    lng: e.position.lng,
                  });
                  setZoom(13);
                }}
                icon={{
                  url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              >
                {selectedMarker == e && (
                  <InfoWindowF
                    position={selectedMarker}
                    options={{
                      pixelOffset: new window.google.maps.Size(0, -5),
                    }}
                    onCloseClick={() => {
                      setSelectedMarker(null);
                    }}
                  >
                    <div className="w-[350px] h-[250px] flex flex-col justify-start items-start space-y-2 overflow-y-scroll px-1 py-1 select-none dark:bg-black">
                      <div className="flex flex-col justify-center items-start space-y-1 w-fit">
                        <Chip
                          variant={"solid"}
                          color={
                            (calculateDateInterval(e.startDate).days / 365) *
                              100 >
                            75
                              ? "danger"
                              : (calculateDateInterval(e.startDate).days /
                                  365) *
                                  100 >
                                30
                              ? "warning"
                              : "success"
                          }
                          size={"md"}
                          className="text-white"
                        >
                          {(calculateDateInterval(e.startDate).days / 365) *
                            100 >
                          75
                            ? "방치 차량 추정"
                            : (calculateDateInterval(e.startDate).days / 365) *
                                100 >
                              30
                            ? "방치 차량 의심"
                            : "방치 차량 없음"}
                        </Chip>
                        <p className="font-bold text-base"> {e.name} </p>
                        <p className="text-sm">
                          {" "}
                          {e.address ? e.address : "주소 없음"}{" "}
                        </p>
                      </div>
                      <Divider></Divider>
                      <Progress
                        color={
                          (calculateDateInterval(e.startDate).days / 365) *
                            100 >
                          75
                            ? "danger"
                            : (calculateDateInterval(e.startDate).days / 365) *
                                100 >
                              30
                            ? "warning"
                            : "success"
                        }
                        value={
                          (calculateDateInterval(e.startDate).days / 365) * 100
                        }
                        size={"md"}
                        label={
                          <p className="font-bold text-center w-full text-xs">
                            {e.startDate}부터{" "}
                            {calculateDateInterval(e.startDate).days}일 간 이동
                            없음
                          </p>
                        }
                      ></Progress>
                      <Card className="w-full h-[90%] mx-auto overflow-scroll">
                        <Image
                          src={e.imgSrc}
                          width={360}
                          height={360}
                          alt="after-detection"
                          className="object-cover"
                        ></Image>
                      </Card>
                    </div>
                  </InfoWindowF>
                )}
              </MarkerF>
            );
          })}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
