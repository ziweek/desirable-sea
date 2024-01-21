import { IconSearch } from "@/components/common/icons";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";

const markers = [
  {
    name: "남원 중앙동 공영주차장",
    position: { lat: 33.27907621, lng: 126.7169622 },
    status: "방치 차량 추정",
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "남원읍사무소 옆 공영주차장",
    position: { lat: 33.27982988, lng: 126.7203062 },
    status: "방치 차량 의심",
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "\ub0a8\uc6d0\ub9ac \uad6c\uc624\uc77c\uc7a5\ub9c8\ub2f9 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    position: { lat: 33.27887642, lng: 126.7213156 },
    imgSrc: "/images/after-detection.jpeg",
  },
  {
    name: "\ub0a8\uc6d0\ub9ac \uad6c\uc624\uc77c\uc7a5\ub9c8\ub2f9 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27887642,
      lng: 126.7213156,
    },
  },
  {
    name: "\uad70\ubbfc\uccb4\uc721\uad00 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \ud0dc\uc704\ub85c 551-27",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27752348,
      lng: 126.7054601,
    },
  },
  {
    name: "\ub0a8\uc6d0 \uc911\uc559\ub3d9 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27907621,
      lng: 126.7169622,
    },
  },
  {
    name: "\ub3d9\ubd80\ubcf4\uac74\uc18c \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27539891,
      lng: 126.7030494,
    },
  },
  {
    name: "\ub0a8\uc6d0 \ube44\uc548\ub3d9 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.2800576,
      lng: 126.7183357,
    },
  },
  {
    name: "\ub0a8\uc6d0\uc74d\uc0ac\ubb34\uc18c \uc606 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27982988,
      lng: 126.7203062,
    },
  },
  {
    name: "\ub0a8\uc6d0 \uad11\uc9c0\ub3d9 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28152836,
      lng: 126.7090267,
    },
  },
  {
    name: "\ub0a8\uc6d0\uc758\ub840\ud68c\uad00 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.29441626,
      lng: 126.7115338,
    },
  },
  {
    name: "\uc11c\uc131\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.33663982,
      lng: 126.6947212,
    },
  },
  {
    name: "\uc11c\uc131\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.34357427,
      lng: 126.7111462,
    },
  },
  {
    name: "\ub0a8\uc6d0\uc2e0\ub840 \uacf5\uc601\ub178\uc6781\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.288233,
      lng: 126.6275841,
    },
  },
  {
    name: "\uc758\uadc0\uad50\ud68c \uc778\uadfc \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.31174303,
      lng: 126.713364,
    },
  },
  {
    name: "\uc758\uadc0\uad50\ud68c \uc778\uadfc \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.3117268,
      lng: 126.7131681,
    },
  },
  {
    name: "\uacf5\ucc9c\ud3ec\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.26633516,
      lng: 126.6430138,
    },
  },
  {
    name: "\uc11c\uc131\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.35847933,
      lng: 126.737071,
    },
  },
  {
    name: "\uc11c\uc131\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.32244704,
      lng: 126.6474355,
    },
  },
  {
    name: "\uc704\ubbf8\ub9ac \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \ud0dc\uc704\ub85c 48",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27303403,
      lng: 126.6532801,
    },
  },
  {
    name: "\uc704\ubbf8\ucd9c\uc7a5\uc18c \uc606 \ub178\uc678\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \ud0dc\uc704\ub85c 105",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27487703,
      lng: 126.6586827,
    },
  },
  {
    name: "\uc704\ubbf8\uc911\uc559\ub85c 241\ubc88\uae38 \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27264343,
      lng: 126.6679089,
    },
  },
  {
    name: "\uc704\ubbf8\uc911\uc559\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \uc704\ubbf8\uc911\uc559\ub85c 204~286",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27233523,
      lng: 126.6639386,
    },
  },
  {
    name: "\uc704\ubbf8\ub300\uc131\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28305288,
      lng: 126.6620968,
    },
  },
  {
    name: "\uc704\ubbf82\ub9ac \ub2e4\ubaa9\uc801\ud68c\uad00 \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \uc704\ubbf8\uc911\uc559\ub85c 78",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.2830467,
      lng: 126.6614849,
    },
  },
  {
    name: "\uc704\ubbf82\ub9ac \ub2e4\ubaa9\uc801\ud68c\uad00 \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28292009,
      lng: 126.6613432,
    },
  },
  {
    name: "\uc704\ubbf82\ub9ac \ub2e4\ubaa9\uc801\ud68c\uad00 \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28284868,
      lng: 126.6616091,
    },
  },
  {
    name: "\uc704\ubbf8\ub9ac \uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \ud0dc\uc704\ub85c115\ubc88\uae38 15",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27568618,
      lng: 126.6603031,
    },
  },
  {
    name: "\ud0dc\uc704\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.27477239,
      lng: 126.6734314,
    },
  },
  {
    name: "\ud0dc\uc704\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28733763,
      lng: 126.7462969,
    },
  },
  {
    name: "\ud0dc\uc704\ub85c 977\ubc88\uae38 \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28825682,
      lng: 126.7471692,
    },
  },
  {
    name: "\uc11c\uc131\ub85c \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.33214671,
      lng: 126.6800836,
    },
  },
  {
    name: "\ub3d9\uc77c\ub2e4\ubaa9\uc801\ud68c\uad00\uc55e \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.22833111,
      lng: 126.2413251,
    },
  },
  {
    name: "\ub300\uc815\ubb38\ud654\uccb4\uc721\uc13c\ud130\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub300\uc815\uc74d \uc554\ubc18\uc218\ub9c8\ub18d\ub85c 419",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.26213539,
      lng: 126.2351814,
    },
  },
  {
    name: "\uc1a1\uc545\uc2a4\ud14c\uc774 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.21197541,
      lng: 126.2913311,
    },
  },
  {
    name: "\ubc31\uc870\uc77c\uc190\ubb18\uc5ed \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.21989256,
      lng: 126.2855847,
    },
  },
  {
    name: "\ub9c8\ub77c\ub3c4\uac00\ub294 \uc5ec\uac1d\uc120 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub300\uc815\uc74d \uc1a1\uc545\uad00\uad11\ub85c 414",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.20765718,
      lng: 126.290237,
    },
  },
  {
    name: "\uc1a1\uc545\uc0b0 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.20615264,
      lng: 126.2896512,
    },
  },
  {
    name: "\uc12f\uc54c\uc624\ub984 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.20491182,
      lng: 126.2773247,
    },
  },
  {
    name: "\ubaa8\uc2ac\ud3ec\uc911\uc559\uc2dc\uc7a5\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ub300\uc815\uc74d \uc601\uc11c\uc911\ub85c 12 \ubaa8\uc2ac\ud3ec\uc911\uc559\uc2dc\uc7a5 \ud654\uc7a5\uc2e4",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.2209708,
      lng: 126.2549771,
    },
  },
  {
    name: "\ud558\ubaa8\uccb4\uc721\uacf5\uc6d0\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.21807971,
      lng: 126.2524862,
    },
  },
  {
    name: "\uc81c\uc8fc\uc740\ud589\ub9de\uc740\ud3b8\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.22119015,
      lng: 126.253216,
    },
  },
  {
    name: "\ub300\uc815\uc74d\ud558\ubaa8\ub9ac \ub178\uc0c1\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.21973081,
      lng: 126.2515523,
    },
  },
  {
    name: "\ub300\uc815\uac10\ud611\uc55e\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.22302674,
      lng: 126.252015,
    },
  },
  {
    name: "\uc131\uc0b0\uc74d\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4486549,
      lng: 126.9167002,
    },
  },
  {
    name: "\uace0\uc131\uc624\uc77c\uc7a5 \uc606 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc131\uc0b0\uc74d \uace0\uc131\uc624\uc870\ub85c 93",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.45204973,
      lng: 126.9137848,
    },
  },
  {
    name: "\uc131\uc0b0\uc74d\uc0ac\ubb34\uc18c \uc606 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4425654,
      lng: 126.9114847,
    },
  },
  {
    name: "\uace0\uc131\ub9ac \uc6d0\uad11\uc5b4\ub9b0\uc774\uc9d1 \uc778\uadfc \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.44915338,
      lng: 126.9107197,
    },
  },
  {
    name: "\uace0\uc131\ub9ac \uad6c\ubcf4\uac74\uc9c0\uc18c \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.45091591,
      lng: 126.9137295,
    },
  },
  {
    name: "\uc131\uc0b0\uace0\uc1311\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.44856022,
      lng: 126.9166868,
    },
  },
  {
    name: "\uc131\uc0b0\uc77c\ucd9c\ubd09 \uc8fc\ubcc0 \ub179\uc9c0\uacf5\uac04 \uc870\uc131 \uc8fc\ucc28\uc7a5(1)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.45058787,
      lng: 126.9221164,
    },
  },
  {
    name: "\uc131\uc0b0\ud3ec\ud56d \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.47239525,
      lng: 126.9331833,
    },
  },
  {
    name: "\uc2dc\ud765\ucd08\ub4f1\ud559\uad50\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc131\uc0b0\uc74d \uc2dc\ud765\uc0c1\ub3d9\ub85c 113",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.47944842,
      lng: 126.8947248,
    },
  },
  {
    name: "\ubd04 \uadf8\ub9ac\uace0 \uac00\uc744\ub9ac\uc870\ud2b8\uc8fc\ucc28\uc7a51",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc131\uc0b0\uc74d \ud574\ub9de\uc774\ud574\uc548\ub85c 2660",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.47395019,
      lng: 126.9111192,
    },
  },
  {
    name: "\ubd04 \uadf8\ub9ac\uace0 \uac00\uc744\ub9ac\uc870\ud2b8\uc8fc\ucc28\uc7a52",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.47470061,
      lng: 126.9108899,
    },
  },
  {
    name: "\uace0\uc131\ub9ac \ud68c\uc804\uad50\ucc28\ub85c \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc131\uc0b0\uc74d \uace0\uc131\uc624\uc870\ub85c 42",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.44706057,
      lng: 126.9156154,
    },
  },
  {
    name: "\uc12d\uc9c0\ucf54\uc9c0 \ub178\uc678\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.42371492,
      lng: 126.9290165,
    },
  },
  {
    name: "\uc131\uc0b0\uc77c\ucd9c\ubd09 \uc8fc\ubcc0 \ub179\uc9c0\uacf5\uac04 \uc870\uc131 \uc8fc\ucc28\uc7a5(2)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.45535516,
      lng: 126.9258338,
    },
  },
  {
    name: "\uc131\uc0b0\uad6d\ubbfc\uccb4\uc721\uc13c\ud130 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc131\uc0b0\uc74d \uc77c\uc8fc\ub3d9\ub85c 4024",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.46767726,
      lng: 126.905053,
    },
  },
  {
    name: "\uc18c\ubc29\ud30c\ucd9c\uc18c \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc131\uc0b0\uc74d \uc77c\uc8fc\ub3d9\ub85c4120\ubc88\uae38 7",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4602223,
      lng: 126.909872,
    },
  },
  {
    name: "\ub3d9\uad11\uc721\uac70\ub9ac \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.31087664,
      lng: 126.3415377,
    },
  },
  {
    name: "\uc0b0\ubc29\uc0b0 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.23629429,
      lng: 126.3126249,
    },
  },
  {
    name: "\uc0ac\uacc4\ud3ec\uad6c \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \ud615\uc81c\ud574\uc548\ub85c 16",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.22828806,
      lng: 126.3053443,
    },
  },
  {
    name: "\uc0b0\ubc29\uc0b0 \ub0a8\uce21 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.23586295,
      lng: 126.3120677,
    },
  },
  {
    name: "\uc6a9\uba38\ub9ac \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc0ac\uacc4\ub0a8\ub85c216\ubc88\uae38 28",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.23380074,
      lng: 126.3108903,
    },
  },
  {
    name: "\uc11c\uad11\ucd08\ub4f1\ud559\uad50\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc911\uc0b0\uac04\uc11c\ub85c 1842",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.28807906,
      lng: 126.3263253,
    },
  },
  {
    name: "\uc11c\uadc0\ud3ec\uc2dc\ucd95\ud611\ud310\ub9e4\uc7a5\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc911\uc0b0\uac04\uc11c\ub85c 1914-3",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.29093802,
      lng: 126.3182141,
    },
  },
  {
    name: "\uc18c\uc778\uad6d \ud14c\ub9c8\ud30c\ud06c\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc911\uc0b0\uac04\uc11c\ub85c 1878",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.2897258,
      lng: 126.3224184,
    },
  },
  {
    name: "\uc81c\uc8fc\uc2e0\ud654\uc6d4\ub4dc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc2e0\ud654\uc5ed\uc0ac\ub85c304\ubc88\uae38 38",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.30336166,
      lng: 126.3164773,
    },
  },
  {
    name: "\uc81c\uc8fc\ud56d\uacf5\uc6b0\uc8fc\ud638\ud154\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \ub179\ucc28\ubd84\uc7ac\ub85c 216 \uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \ud56d\uacf5\uc6b0\uc8fc \ud638\ud154",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.30131259,
      lng: 126.2934762,
    },
  },
  {
    name: "\uc81c\uc8fc\uc2e0\ud654\uc6d4\ub4dcC1\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \uc548\ub355\uba74 \uc2e0\ud654\uc5ed\uc0ac\ub85c304\ubc88\uae38 98",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.30354686,
      lng: 126.3165457,
    },
  },
  {
    name: "\ud654\uc21c\uc0ac\uac70\ub9ac \uacf5\uc601\uc8fc\ucc28\uc7a5(406-2-000041)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.24623062,
      lng: 126.33511,
    },
  },
  {
    name: "\uc131\uc74d\ubbfc\uc18d\ub9c8\uc744\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.38449551,
      lng: 126.8012861,
    },
  },
  {
    name: "\ubbfc\uc18d\ub9c8\uc744\ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ud45c\uc120\uba74 \uc911\uc0b0\uac04\ub3d9\ub85c 4678",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.38904228,
      lng: 126.7959529,
    },
  },
  {
    name: "\uc81c\uc8fc\ubbfc\uc18d\ucd0c \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.3243608,
      lng: 126.8431664,
    },
  },
  {
    name: "\ud45c\uc120\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ud45c\uc120\uba74 \ud45c\uc120\uc911\uc559\ub85c 74-1",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.32613319,
      lng: 126.8316363,
    },
  },
  {
    name: "\ud45c\uc158\uc2dc\uac00\uc9c0\ub0b4 \ub178\uc678\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.32503167,
      lng: 126.8338428,
    },
  },
  {
    name: "\uba74\uc0ac\ubb34\uc18c\uc606 \uacf5\uc601\ub178\uc678\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.32597226,
      lng: 126.8309787,
    },
  },
  {
    name: "\ud45c\uc120\uc0dd\ud65c\uccb4\uc721\uad00\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ud45c\uc120\uba74 \ud55c\ub9c8\uc74c\ucd08\ub4f1\ub85c 399",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.35339576,
      lng: 126.8147688,
    },
  },
  {
    name: "\uc1e0\uc18c\uae4d \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.25411584,
      lng: 126.6224245,
    },
  },
  {
    name: "\ud6a8\ub3c8\uc911\ud559\uad50 \ubd81\uce21 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.26647462,
      lng: 126.6208338,
    },
  },
  {
    name: "\ud6a8\ub3c8\ub3d9\uc8fc\ubbfc\uc13c\ud130 \ub0a8\uce21 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.26303269,
      lng: 126.6157079,
    },
  },
  {
    name: "\uc1e0\uc18c\uae4d 2\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.25090078,
      lng: 126.6214403,
    },
  },
  {
    name: "\uacf5\ud55c\uc9c0 \ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.25469958,
      lng: 126.6224032,
    },
  },
  {
    name: "\ub3d4\ubca0\ub0ad\uace8\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc11c\uadc0\ud3ec\uc2dc \ud0dc\ud3c9\ub85c92\ubc88\uae38 49",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.24013463,
      lng: 126.5318438,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \uacf5\uc601\uc8fc\ucc28\uc7a5(405-2-000254)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \uae40\ub155\ub85c1\uae38 45-8",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.5578216,
      lng: 126.7486588,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \uacf5\uc601\uc8fc\ucc28\uc7a5(405-2-000258)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.55825996,
      lng: 126.7629236,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000255)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \ud574\ub9de\uc774\ud574\uc548\ub85c 1412",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52591811,
      lng: 126.8574652,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000257)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \uc138\ud3c9\ud56d\ub85c 46-11",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52693784,
      lng: 126.8563117,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000312)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52467461,
      lng: 126.8561298,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000313)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52430114,
      lng: 126.8567251,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000317)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52467461,
      lng: 126.8561298,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \uacf5\uc601\uc8fc\ucc28\uc7a5(405-2-000260)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \ub9cc\uc7a5\uad74\uae38 182",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52897298,
      lng: 126.7720355,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000259)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.55726836,
      lng: 126.7945379,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000256)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \uc138\ud3c9\ud56d\ub85c 13",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.52496631,
      lng: 126.8530856,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000262)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \ube44\uc790\uc232\uae38 55",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.49130423,
      lng: 126.8109449,
    },
  },
  {
    name: "\ud558\ub3c4\ub9ac \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.51264109,
      lng: 126.8975369,
    },
  },
  {
    name: "\uad6c\uc88c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000314)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.54179382,
      lng: 126.8109373,
    },
  },
  {
    name: "\uace0\uc1311\ub9ac\uc885\ud569\uc6b4\ub3d9\uc7a5\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \uad11\uc131\ub85c 94",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4575407,
      lng: 126.4179105,
    },
  },
  {
    name: "\ubb34\ub8cc\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.47845237,
      lng: 126.3758438,
    },
  },
  {
    name: "\uc560\uc6d4\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc560\uc6d4\uc74d \ud558\uadc0\ub85c21\uae38 30",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.479628,
      lng: 126.4033243,
    },
  },
  {
    name: "\uc6b0\ub3c4 \uacf5\uc601 \uc8fc\ucc28\uc7a5(\uc0b0\ud638\ud574\uc218\uc695\uc7a5 \uc606)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.5032269,
      lng: 126.942873,
    },
  },
  {
    name: "\uc0b0\ud638\ud574\uc218\uc695\uc7a5\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.501893,
      lng: 126.943864,
    },
  },
  {
    name: "\ud558\uace0\uc218\ub3d9\ud574\uc218\uc695\uc7a5\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.51458977,
      lng: 126.9573363,
    },
  },
  {
    name: "\uc6b0\ub3c4\ubd09\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4938841,
      lng: 126.959634,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000284)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d 516\ub85c 1865",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.38489104,
      lng: 126.6199848,
    },
  },
  {
    name: "\uc131\ud310\uc545\ud734\uac8c\uc18c \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d 516\ub85c 1865",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.38489104,
      lng: 126.6199848,
    },
  },
  {
    name: "\uc0bc\ub2e4\uc218\uc232\uae38 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.42746299,
      lng: 126.6738904,
    },
  },
  {
    name: "\uc0b0\uad7c\ubd80\ub9ac\ubd84\ud654\uad6c\ub300\ud615\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \ube44\uc790\ub9bc\ub85c 768",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.43486147,
      lng: 126.6873261,
    },
  },
  {
    name: "\uc81c\uc8fc\ub3cc\ubb38\ud654\uacf5\uc6d0\uc18c\ud615\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \ub0a8\uc870\ub85c 2023",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.44998358,
      lng: 126.6615315,
    },
  },
  {
    name: "\uc5d0\ucf54\ub79c\ub4dc \ud14c\ub9c8\ud30c\ud06c\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \ub0a8\uc870\ub85c 1982",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4482208,
      lng: 126.672342,
    },
  },
  {
    name: "\uc81c\uc8fc\ub3cc\ubb38\ud654\uacf5\uc6d0 \ub300\ud615\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \ub0a8\uc870\ub85c 2023",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.437342,
      lng: 126.66691,
    },
  },
  {
    name: "\uc0b0\uad7c\ubd80\ub9ac\ubd84\ud654\uad6c \uc18c\ud615\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4349219,
      lng: 126.689684,
    },
  },
  {
    name: "\uc81c\uc8fc\uc13c\ud2b8\ub7f4\ud30c\ud06c\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \ube44\uc790\ub9bc\ub85c 606",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4337757,
      lng: 126.675203,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000341)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.548269,
      lng: 126.650334,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000271)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.53464472,
      lng: 126.6159777,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000272)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.54160525,
      lng: 126.634974,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000280)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \uc2e0\ubd81\ub85c 303",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.53990095,
      lng: 126.6410427,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000307)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.53904875,
      lng: 126.6375263,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000308)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.53889373,
      lng: 126.6373673,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000273)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.53831185,
      lng: 126.6676081,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000274)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.54133227,
      lng: 126.6692952,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000281)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \uc870\ucc9c\uc74d \ud568\ub35516\uae38 15-13",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.53983164,
      lng: 126.6679027,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000309)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.5404772,
      lng: 126.6736364,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000310)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.54247259,
      lng: 126.6727135,
    },
  },
  {
    name: "\uc870\ucc9c\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000311)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.54481717,
      lng: 126.6622002,
    },
  },
  {
    name: "\uc2e0\uc591\ud56d \uc8fc\ucc28\uc7a51",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ucd94\uc790\uba74 \ucd94\uc790\ub85c 576-4",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.94523665,
      lng: 126.3282534,
    },
  },
  {
    name: "\uc2e0\uc591\ud56d \uc8fc\ucc28\uc7a52",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.94499794,
      lng: 126.3289084,
    },
  },
  {
    name: "\uc81c\uc8fc\ud574\uc591\uacbd\ucc30\uc11c \ucd94\uc790\ud30c\ucd9c\uc18c \uc55e \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.9411014,
      lng: 126.3246299,
    },
  },
  {
    name: "\uc218\uc6d4\ubd09\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \ub178\uc744\ud574\uc548\ub85c 1013-61",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.29529346,
      lng: 126.164029,
    },
  },
  {
    name: "\ucc28\uadc0\ub3c4\ud574\uc801\uc7a0\uc218\ud568\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.30787804,
      lng: 126.1637801,
    },
  },
  {
    name: "\uacf5\uc601\uc8fc\ucc28\uc7a5(\ub450\ubaa8\ub9ac 2879 )",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.35149242,
      lng: 126.1842677,
    },
  },
  {
    name: "\uacf5\uc601\uc8fc\ucc28\uc7a5(\uc2e0\ucc3d\ub9ac 232-2)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.34958995,
      lng: 126.1845929,
    },
  },
  {
    name: "\uc131\uae40\ub300\uac74\uc2e0\ubd80\uc81c\uc8fc\ud45c\ucc29\uae30\ub150\uad00\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \uc6a9\uc2181\uae38 108",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.32268196,
      lng: 126.1676042,
    },
  },
  {
    name: "\uc800\uc9c0\uc624\ub984 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.334887,
      lng: 126.2480529,
    },
  },
  {
    name: "\uc800\uc9c0\ubb38\ud654\uc608\uc220\uc778\ub9c8\uc744 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.3382348,
      lng: 126.265774,
    },
  },
  {
    name: "\uc0dd\uac01\ud558\ub294 \uc815\uc6d0 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \ub179\ucc28\ubd84\uc7ac\ub85c 678",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.3263898,
      lng: 126.255128,
    },
  },
  {
    name: "\uc720\ub9ac\uc758\uc131 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \ub179\ucc28\ubd84\uc7ac\ub85c 462",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.314172,
      lng: 126.272515,
    },
  },
  {
    name: "\ub77c\uc628CC \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\uacbd\uba74 \uc6a9\uae08\ub85c 998",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.3418295,
      lng: 126.279563,
    },
  },
  {
    name: "\ud604\ub300\ubbf8\uc220\uad00 \uacf5\uc601 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.33824391,
      lng: 126.2657809,
    },
  },
  {
    name: "\uc800\uc9c0\ub179\uc0c9\uccb4\ud5d8\uc7a5 \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.33987983,
      lng: 126.2607602,
    },
  },
  {
    name: "\uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.36445161,
      lng: 126.2002004,
    },
  },
  {
    name: "\uacf5\uc601\uc8fc\ucc28\uc7a5(\ub450\ubaa8\ub9ac 1499-2)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.33815257,
      lng: 126.1957201,
    },
  },
  {
    name: "405-2-000266 \ud55c\ub9bc\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.38888402,
      lng: 126.2318593,
    },
  },
  {
    name: "405-2-000267 \ud55c\ub9bc\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud55c\ub9bc\ub85c 299",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.39109167,
      lng: 126.2378721,
    },
  },
  {
    name: "\uae08\uc624\ub984\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.3509628,
      lng: 126.3057481,
    },
  },
  {
    name: "\uc815\ubb3c\uc624\ub984\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.34159521,
      lng: 126.3273959,
    },
  },
  {
    name: "\ud55c\ub9bc\ubbfc\uc18d\uc624\uc77c\uc2dc\uc7a5 \uacf5\uc601\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud55c\uc218\ud480\ub85c4\uae38 10",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.42047845,
      lng: 126.2738721,
    },
  },
  {
    name: "\ub290\uc9c0\ub9ac\uc624\ub984 \uc8fc\ucc28\uc7a5 ",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ubd09\uc218\ub300\uae38 5",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.36282595,
      lng: 126.2604655,
    },
  },
  {
    name: "\ud611\uc7ac\ud574\uc218\uc695\uc7a5\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.39291834,
      lng: 126.2394979,
    },
  },
  {
    name: "\ud55c\ub9bc\uacf5\uc6d0\uc8fc\ucc28\uc7a5",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud55c\ub9bc\ub85c 300",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.39042434,
      lng: 126.2378484,
    },
  },
  {
    name: "\ud55c\ub9bc\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000306)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud55c\ub9bc\ub85c6\uae38 10-4",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.41285625,
      lng: 126.2623411,
    },
  },
  {
    name: "\ud55c\ub9bc\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000305)",
    type: "\uc8fc\ucc28\uc7a5",
    address:
      "\uc81c\uc8fc\ud2b9\ubcc4\uc790\uce58\ub3c4 \uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \ud55c\ub9bc\ub85c 682-3",
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.41574,
      lng: 126.2657,
    },
  },
  {
    name: "\ud55c\ub9bc\uc74d \ubb34\ub8cc \uc8fc\ucc28\uc7a5(405-2-000285)",
    type: "\uc8fc\ucc28\uc7a5",
    address: null,
    imgSrc: "/images/after-detection.jpeg",
    position: {
      lat: 33.4112,
      lng: 126.2686,
    },
  },
];

interface SearchBarProps {
  value?: string;
}

export default function SearchBar(props: SearchBarProps): any {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1200 });
  const [textInput, setTextInput] = useState<string>(props.value || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Autocomplete
      className={`w-full ${
        pathname == "/search" ? "max-w-lg" : ""
      } select-text`}
      classNames={{
        clearButton: "text-[#006FEE]",
        selectorButton: "text-[#006FEE]",
        listboxWrapper: "min-h-[400px]",
      }}
      inputProps={{
        classNames: {
          input: "text-lg",
          base: "text-[#006FEE]",
          label: "text-[#006FEE]",
        },
      }}
      listboxProps={{}}
      color={"primary"}
      fullWidth
      radius={"md"}
      allowsCustomValue={true}
      placeholder="검색 키워드를 입력하시오."
      variant={"flat"}
      size={isTabletOrMobile ? "md" : "sm"}
      isClearable={true}
      inputValue={textInput}
      onInputChange={(e) => {
        setTextInput(e);
      }}
      onSelectionChange={(e) => {
        // const query = createQueryString("query", e.toString());
        // router.push("/dashboard/result" + "?" + query);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          // const query = createQueryString("query", textInput);
          // router.push("/dashboard/result" + "?" + query);
        }
      }}
      startContent={
        <div className="mx-2">
          <IconSearch
            width={20}
            height={20}
            strokeWidth={3}
            fill="#006FEE"
          ></IconSearch>
        </div>
      }
    >
      {markers.map((e, j) => (
        <AutocompleteItem key={e.name} value={e.name} className="w-full">
          <div className="flex flex-row items-center justify-between space-y-1 py-2">
            <div className="flex flex-col items-start justify-between">
              <p className="truncate">{e.name}</p>
              <p className="text-xs">{e.address ? e.address : "주소 없음"}</p>
            </div>
            <p className="text-xs">
              {Math.round(Math.random() * (200 - 50) + 50)}
            </p>
          </div>
        </AutocompleteItem>
      ))}
      {/* {dataset.map((data, i) => (
        <AutocompleteSection
          key={i}
          title={data.section}
          classNames={{
            heading:
              "flex w-full font-bold sticky top-1 z-20 py-2 px-2 bg-default-100 shadow-small rounded-small bg-[#dbeafe] select-none",
          }}
        >
          {data.documents.map((document, j) => (
            <AutocompleteItem
              key={document.name}
              value={document.name}
              className="w-full"
            >
              <div className="flex flex-row items-center justify-between space-y-1 py-2">
                <div className="flex flex-col items-start justify-between">
                  <p className="truncate">{document.name}</p>
                  <p className="text-xs">{document.address}</p>
                </div>
                <p className="text-xs">
                  {Math.round(Math.random() * (200 - 50) + 50)}
                </p>
              </div>
            </AutocompleteItem>
          ))}
        </AutocompleteSection>
      ))} */}
    </Autocomplete>
  );
}
