"use client";

import { IconSearch } from "@/components/common/icons";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
  Card,
  Button,
} from "@nextui-org/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const dataset = [
  {
    section: "최근 검색 장소",
    documents: [
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
    ],
  },
  {
    section: "제주시 추천 장소",
    documents: [
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "제주시 000 공영주차장",
        address: "제주서 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
    ],
  },
  {
    section: "서귀포시 추천 장소",
    documents: [
      {
        name: "서귀포시 000 공영주차장",
        address: "서귀포시 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "서귀포시 000 공영주차장",
        address: "서귀포시 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "서귀포시 000 공영주차장",
        address: "서귀포시 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "서귀포시 000 공영주차장",
        address: "서귀포시 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
      {
        name: "서귀포시 000 공영주차장",
        address: "서귀포시 어디어디 어디어디",
        latitude: "2023.01.01",
        longitude: "2023.01.01",
      },
    ],
  },
];

interface ResultSectionProps {
  value?: string;
  textColor?: string;
}

export default function ResultSection(props: ResultSectionProps): any {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const [textInput, setTextInput] = useState<string>(props.value || "");

  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set(name, value);

  //     return params.toString();
  //   },
  //   [searchParams]
  // );

  return (
    <div
      className={`z-50 absolute bottom-0 flex flex-row items-center justify-between w-full mx-auto mb-8`}
    >
      <Card
        isBlurred
        className={`flex flex-row items-center justify-between mx-auto px-8 h-[40vh] w-[90vw]`}
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "1fr 4fr 2fr",
        //   gap: "10px",
        // }}
      >
        <div>
          <p></p>
        </div>
      </Card>
    </div>
  );
}
