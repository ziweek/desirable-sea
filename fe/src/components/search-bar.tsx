import { IconSearch } from "@/components/common/icons";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
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

interface SearchBarProps {
  value?: string;
}

export default function SearchBar(props: SearchBarProps): any {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
      }}
      inputProps={{
        classNames: {
          base: "text-[#006FEE]",
          inputWrapper: "border-4",
          label: "text-[#006FEE]",
        },
      }}
      listboxProps={{}}
      color={"primary"}
      fullWidth
      radius="full"
      allowsCustomValue={true}
      placeholder="검색 키워드를 입력하시오."
      variant="bordered"
      size={pathname == "/dashboard" ? "md" : "sm"}
      isClearable={true}
      inputValue={textInput}
      onInputChange={(e) => {
        setTextInput(e);
      }}
      onSelectionChange={(e) => {
        const query = createQueryString("query", e.toString());
        router.push("/dashboard/result" + "?" + query);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const query = createQueryString("query", textInput);
          router.push("/dashboard/result" + "?" + query);
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
      {dataset.map((data, i) => (
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
                  <p className="truncate text-black">{document.name}</p>
                  <p className="text-xs text-black/50">{document.address}</p>
                </div>
                <p className="text-xs">
                  {Math.round(Math.random() * (200 - 50) + 50)}
                </p>
              </div>
            </AutocompleteItem>
          ))}
        </AutocompleteSection>
      ))}
    </Autocomplete>
  );
}
