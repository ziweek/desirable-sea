"use client";

import {
  Card,
  Pagination,
  PaginationItem,
  PaginationCursor,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { IconLogo } from "../common/icons";
import { useRouter } from "next/navigation";
import SearchBar from "../search-bar";

type HeaderProps = {
  isLogoVisible?: boolean;
  isSearchBarVisible?: boolean;
  searchedText?: string;
  logoFill?: string;
  textColor?: string;
  isHeaderBackgroundVisible?: boolean;
};

export default function Header(props: HeaderProps) {
  const router = useRouter();

  return (
    <div
      style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: "15px" }}
      className={`z-50 absolute top-0 flex flex-col items-start justify-center px-8 w-[450px] h-screen py-8`}
    >
      <Card
        isBlurred
        className={`flex flex-row items-center justify-between w-full px-4 py-2 max-w-[1024px]`}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gap: "5px",
        }}
      >
        <div className="flex flex-col justify-center w-fit px-2">
          {props.isLogoVisible || props.isLogoVisible == undefined ? (
            <IconLogo width={"50px"} fill={"#006FEE"}></IconLogo>
          ) : (
            <></>
          )}
        </div>
        <div>
          {props.isSearchBarVisible ? (
            <div className="flex w-full flex-col items-center justify-center">
              <SearchBar value={props.searchedText}></SearchBar>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Card>
      <Card className="w-full h-full" isBlurred>
        {/* <CardHeader></CardHeader>
        <Divider></Divider> */}
        <CardBody>
          <div className="flex flex-col mx-auto justify-between h-full py-8">
            <div className="space-y-4">
              {[1, 2].map((e, i) => {
                return (
                  <Card key={i} className="h-fit p-4 space-y-4">
                    <div className="flex flex-col justify-center items-start">
                      <p className="font-bold">제주시 어디 공영주차장</p>
                      <p className="text-xs">제주시 어디동 어디어디</p>
                    </div>
                    <div className="flex flex-row justify-around items-center spzce-x-4 w-full">
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <Card
                          className="h-[125px] w-[125px] bg-black"
                          radius={"none"}
                          shadow={"none"}
                        >
                          d
                        </Card>
                        <p className="text-xs">최초포착</p>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-1">
                        <Card
                          className="h-[125px] w-[125px] bg-black"
                          radius={"none"}
                          shadow={"none"}
                        >
                          d
                        </Card>
                        <p className="text-xs">최근포착</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-end">
                      <p className="font-bold text-red-500">
                        장기 방치 차량으로 탐지됨.
                      </p>
                      <p className="text-xs">지난 1년 간 정차되어 있음.</p>
                    </div>
                  </Card>
                );
              })}
            </div>
            <Pagination
              size={"sm"}
              total={10}
              initialPage={1}
              showControls
              variant={"bordered"}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
