"use client";

import {
  Card,
  Pagination,
  CardBody,
  CardFooter,
  Button,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IconLogo } from "../common/icons";
import { useRouter } from "next/navigation";
import SearchBar from "../search-bar";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { Children, useEffect, useState } from "react";
import { LottieCongratulations, LottieHi } from "../common/lotties";

type HeaderProps = {
  isLogoVisible?: boolean;
  isSearchBarVisible?: boolean;
  searchedText?: string;
  logoFill?: string;
  textColor?: string;
  isHeaderBackgroundVisible?: boolean;
};

const tutorialContent = [
  {
    header: (
      <div className="text-2xl font-bold">{/* 짜잔! 바라는바당입니다. */}</div>
    ),
    body: (
      <div>
        <p className="text-center w-full text-2xl font-bold">
          제주 위성데이터를 활용한<br></br>장기 방치 차량 탐지 지능형 플랫폼
        </p>
        <div className="w-full flex flex-col items-center">
          <LottieHi loop={true} width={"200px"}></LottieHi>
        </div>
        <p className="text-lg text-center w-full">
          안녕하세요. 바라는바당 팀입니다.
        </p>
        <p className="text-lg text-center w-full">
          지금부터 튜토리얼을 진행하겠습니다.
        </p>
      </div>
    ),
  },
  {
    header: (
      <div className="font-bold text-xl">장기 방치 차량 자동 분석하기</div>
    ),
    body: (
      <>
        <p className="font-bold">실행방법</p>
        <p className="px-2">
          상단바의 좌측에 위치한 <strong>로고 버튼</strong>을 탭합니다.
        </p>
        <p className="font-bold">기능소개</p>
        <p className="px-2">
          <strong>장기 방치 차량 자동 분석하기</strong> 기능은 서버에서
          지속적으로 모니터링하여 장기 방치 차량으로 추정되는 타겟을
          데이터베이스에서 불러와 화면에 표시하는 기능입니다.
        </p>
      </>
    ),
  },
  {
    header: (
      <div className="font-bold text-xl">검색어로 특정 지역 분석하기</div>
    ),
    body: (
      <>
        <p className="font-bold">실행방법</p>
        <p className="px-2">
          상단바의 중앙에 위치한 <strong>검색창</strong>에 질의어를 입력합니다.
        </p>
        <p className="font-bold">기능소개</p>
        <p className="px-2">
          <strong>검색어로 특정 지역 분석하기</strong> 기능은 질의어로 특정된
          지역의 위성데이터를 실시간으로 서버에서 분석하고 그 결과를 화면에
          표시하는 기능입니다.
        </p>
      </>
    ),
  },
  {
    header: <div></div>,
    body: (
      <div>
        <LottieCongratulations loop={true}></LottieCongratulations>
        <p className="text-lg text-center w-full px-2">
          지금부터 프로토타입을 시작하겠습니다.
        </p>
      </div>
    ),
  },
];

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:1200px)" });
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(true);
  const [indexOfModal, setIndexOfModal] = useState<number>(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {}, []);

  return (
    <div className="relative">
      {isTabletOrMobile ? (
        <div className="top-0 left-0 z-20 fixed space-y-2">
          <Card
            className={`w-screen flex flex-row items-center justify-between py-2 px-2 rounded-t-none`}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "5px",
            }}
            radius={"sm"}
          >
            <div className="flex flex-col justify-center w-fit">
              {props.isLogoVisible || props.isLogoVisible == undefined ? (
                <Tooltip
                  color="primary"
                  content="상단의 로고를 탭하여 분석 시작하기"
                  delay={1000}
                  isOpen={indexOfModal == 1}
                  size={"lg"}
                  showArrow={true}
                  placement={"bottom-start"}
                >
                  <Button
                    isIconOnly
                    size={"lg"}
                    variant={"light"}
                    onPress={() => {
                      setIsSliderVisible(!isSliderVisible);
                    }}
                  >
                    <Image
                      src={"/images/appIcon.png"}
                      width={50}
                      height={50}
                      alt="logo"
                    ></Image>
                  </Button>
                </Tooltip>
              ) : (
                <></>
              )}
            </div>
            <div>
              {props.isSearchBarVisible ? (
                <>
                  <Tooltip
                    color="primary"
                    content="키워드를 검색하여 시작하기"
                    delay={1000}
                    isOpen={indexOfModal == 2}
                    size={"lg"}
                    showArrow={true}
                    placement={"bottom"}
                  >
                    <div className="flex w-full flex-col items-center justify-center">
                      <SearchBar value={props.searchedText}></SearchBar>
                    </div>
                  </Tooltip>
                </>
              ) : (
                <></>
              )}
            </div>
          </Card>
          {isSliderVisible ? (
            <Card
              className="absolute z-50 w-screen bg-transparent border-0 scrollbar-hide"
              radius={"none"}
              shadow={"none"}
            >
              <ScrollMenu>
                {[1, 2, 3].map((e, i) => (
                  <Card
                    key={i}
                    className={`w-[200px] h-[150px] ml-2 shadow-md ${
                      e == 3 ? "mr-2" : ""
                    }`}
                    radius={"sm"}
                  >
                    <Image
                      alt="img"
                      className="object-cover object-center"
                      height={150}
                      src={`/images/results/${e}.png`}
                      width={200}
                    />
                    <CardFooter className="justify-between bg-white/50 border-white/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                      <p className="text-tiny text-black/80 font-bold">
                        제주시 어디동
                      </p>
                      <Button
                        className="text-tiny text-white bg-black/50"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                      >
                        바로가기
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </ScrollMenu>
            </Card>
          ) : (
            <></>
          )}
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
      <Modal isOpen={isModalVisible} isDismissable>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              {tutorialContent[indexOfModal]?.header}
            </ModalHeader>
            <ModalBody>{tutorialContent[indexOfModal]?.body}</ModalBody>

            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  if (indexOfModal == 0) {
                    router.back();
                  } else {
                    setIndexOfModal((indexOfModal) => {
                      return indexOfModal - 1;
                    });
                  }
                }}
              >
                돌아가기
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  if (indexOfModal == tutorialContent.length - 1) {
                    setIsModalVisible(false);
                  } else {
                    setIndexOfModal((indexOfModal) => {
                      return indexOfModal + 1;
                    });
                  }
                }}
              >
                {indexOfModal == tutorialContent.length - 1
                  ? "시작하기"
                  : "다음으로"}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
}
