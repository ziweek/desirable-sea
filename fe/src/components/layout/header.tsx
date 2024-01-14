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
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1200, minWidth: 360 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });
  const isRetina = useMediaQuery({ minResolution: "2dppx" });

  const [mobile, setMobile] = useState<boolean>(false);

  const checkResize = () => {
    if (isTabletOrMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isTabletOrMobile]);

  return (
    <>
      {isTabletOrMobile ? (
        <div>
          <Card
            isBlurred
            className={`z-50 fixed top-0 flex flex-row items-center justify-between w-full py-2 px-4 rounded-b-none`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "5px",
            }}
            radius={"sm"}
          >
            <div className="flex flex-col justify-center w-fit">
              {props.isLogoVisible || props.isLogoVisible == undefined ? (
                <Image
                  src={"/images/appIcon.png"}
                  width={50}
                  height={50}
                  alt="logo"
                ></Image>
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
        </div>
      ) : (
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
            <CardBody>
              <div className="flex flex-col mx-auto justify-between h-full py-4 select-none">
                <div
                  className="h-full"
                  style={{
                    display: "grid",
                    gridTemplateRows: "1fr auto",
                    gap: "20px",
                  }}
                >
                  {[1].map((e, i) => {
                    return (
                      <Card key={i} className="h-fit p-4 space-y-4">
                        <div className="flex flex-col justify-center items-start">
                          <p className="font-bold">제주은행맞은편공영주차장</p>
                          <p className="text-xs">
                            제주특별자치도 서귀포시 대정읍 하모리 846-11
                          </p>
                        </div>
                        <div className="flex flex-col justify-around items-center space-y-2 w-full">
                          <div className="flex flex-col justify-center items-center space-y-1">
                            <Card
                              className="h-[175px] w-[175px] bg-[url('../../public/images/before-detection.jpeg')] bg-cover bg-center"
                              radius={"none"}
                              shadow={"none"}
                            ></Card>
                            <p className="text-xs">2023.03.07</p>
                          </div>
                          <div className="flex flex-col justify-center items-center space-y-1">
                            <Card
                              className="h-[175px] w-[175px] bg-[url('../../public/images/after-detection.jpeg')] bg-cover bg-center"
                              radius={"none"}
                              shadow={"none"}
                            ></Card>
                            <p className="text-xs">2023.12.29</p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-end">
                          <p className="font-bold text-red-500 text-lg">
                            장기 방치 차량으로 탐지됨.
                          </p>
                          <p className="text-xs">
                            지난 9개월 간 정차되어 있음.
                          </p>
                        </div>
                      </Card>
                    );
                  })}
                  <Pagination
                    size={"sm"}
                    total={10}
                    initialPage={1}
                    showControls
                    variant={"bordered"}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}
    </>
  );
}
