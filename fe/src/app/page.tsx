"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [mobile, setMobile] = useState<boolean>(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width:1224px)" });

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

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);
  return (
    <section>
      {/* 헤더 */}
      <div
        className={`fixed z-30 top-0 flex w-full flex-row items-center justify-center px-4 py-3 ${
          true ? "bg-black/75" : ""
        }`}
      >
        <div className="max-w-[1200px] flex flex-row justify-between w-full items-center">
          <div>
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="flex flex-row items-center justify-start space-x-2">
                <Image
                  src={"/images/appIcon.png"}
                  width={75}
                  height={75}
                  alt="logo"
                ></Image>
                <div className="item-start flex h-full flex-col justify-end">
                  <p className="select-none text-start text-lg text-white font-bold">
                    바라는 바당
                  </p>
                  <p className="select-none text-start text-xs text-white">
                    제주 위성데이터를 활용한, 장기 방치 차량 탐색 지능형 플랫폼
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-row items-center justify-end">
            <Button
              variant="light"
              disableRipple
              onPress={() => {
                router.push("https://github.com/ziweek/desirable-sea");
              }}
            >
              <p className={`font-bold text-white`}>개발팀 소개</p>
            </Button>
          </div>
        </div>
      </div>
      {/* 바디 */}
      <div>
        {/* 1. 프로젝트 소개  */}
        <div className="flex h-screen flex-col items-center justify-center bg-[url('../../public/images/jeju-satellite.jpg')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center space-y-4 max-w-[1200px] w-full">
            <p
              data-aos={"fade-in"}
              data-aos-duration="1000"
              className={`select-none pt-24 font-bold text-white text-center ${
                mobile ? "text-sm" : "text-4xl"
              }`}
            >
              제주 위성데이터를 활용한 장기 방치 차량 탐색 지능형 플랫폼
            </p>
            <div
              data-aos={"fade-in"}
              data-aos-delay="250"
              data-aos-duration="1000"
            >
              <div className="flex flex-row space-x-4">
                <Button
                  className="hover:-translate-y-1 border-white"
                  size={"lg"}
                  variant={"bordered"}
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                >
                  <p className="font-bold text-white">서비스 소개자료</p>
                </Button>
                <Button
                  className="hover:-translate-y-1 border-white"
                  size={"lg"}
                  variant={"bordered"}
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                >
                  <p className="font-bold text-white">서비스 체험하기</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* 2. 문제 제기 */}
        <div className="space-y-4 flex h-full py-16 min-h-screen flex-col items-center justify-center bg-[url('../../public/images/jeju-car.jpg')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center space-y-4 max-w-[1200px] w-full">
            <div className="flex flex-col items-center justify-center space-y-4 max-w-[1200px] w-full">
              <p className="select-none text-2xl font-bold text-white">
                제주도에 방치된 차량은 얼마나 될까요?
              </p>
              <p className="select-none text-white">
                000의 가 방되어 있는 것으로 확인됨.
              </p>
            </div>
            <div
              className="flex min-h-[60vh] px-4 w-full select-none items-center justify-between max-w-[1200px]"
              style={
                mobile
                  ? {
                      display: "grid",
                      gridTemplateRows: "1fr 1fr",
                      gridTemplateColumns: "1fr",
                      gap: "20px",
                    }
                  : {
                      display: "grid",
                      gridTemplateRows: "1fr",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }
              }
            >
              {[
                {
                  title: "활용 데이터셋",
                  children: (
                    <Table aria-label="table of dataset" removeWrapper>
                      <TableHeader>
                        <TableColumn>데이터 제공처</TableColumn>
                        <TableColumn>데이터셋</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {[
                          {
                            publish: "대회",
                            name: "제공데이터",
                            link: "",
                          },
                        ].map((row, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell>{row.publish}</TableCell>
                              <TableCell>
                                <Link href={row.link}>{row.name}</Link>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  ),
                },
                {
                  title: "시스템 아키텍쳐",
                  children: <></>,
                },
              ].map((content, i) => {
                return (
                  <Card key={i} className="min-h-[400px] h-full p-4 w-full">
                    <CardHeader>
                      <p className="text-lg font-bold">{content.title}</p>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody className="flex flex-col items-center justify-center">
                      {content.children}
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        {/* 3. 핵심 기술 설명 */}
        <div className="flex h-full py-16 min-h-screen flex-col items-center justify-center space-y-8 bg-white">
          <p className="select-none text-4xl font-bold text-black">
            서비스 소개
          </p>
          <div
            className="flex min-h-[60vh] w-[90vw] select-none flex-col items-center justify-between max-w-[1200px]"
            style={
              mobile
                ? { gap: "20px" }
                : {
                    display: "grid",
                    gridTemplateAreas: `"a b c" "d e e"`,
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    gap: "20px",
                  }
            }
          >
            {[
              { title: "실시간 지도 API 연동", gridArea: "a", text: "sdf" },
              {
                title: "컴퓨터 비전",
                gridArea: "b",
                text: "sdf",
              },
              { title: "위성데이터 활용", gridArea: "c", text: "sdf" },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  className="min-h-[300px] h-full w-full p-4"
                  isBlurred
                  style={{ gridArea: content.gridArea }}
                >
                  <CardHeader>
                    <p className="text-lg font-bold">{content.title}</p>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody>
                    <p>{content.text}</p>
                  </CardBody>
                </Card>
              );
            })}
            {[
              {
                title: "활용 데이터셋",
                gridArea: "d",
                children: (
                  <Table aria-label="table of dataset" removeWrapper>
                    <TableHeader>
                      <TableColumn>데이터 제공처</TableColumn>
                      <TableColumn>데이터셋</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          publish: "대회",
                          name: "제공데이터",
                          link: "",
                        },
                      ].map((row, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell>{row.publish}</TableCell>
                            <TableCell>
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                ),
              },
              {
                title: "시스템 아키텍쳐",
                gridArea: "e",
                children: (
                  <div className="flex w-full flex-row">
                    {[
                      {
                        name: "NEXT.js",
                        imgSrc: "/images/logo/nextjs.png",
                        content: "I am a tooltip",
                      },
                    ].map((achitecture, i) => (
                      <Tooltip
                        key={i}
                        showArrow
                        content={
                          <div className="flex flex-col space-y-2">
                            <p className="font-bold">{achitecture.name}</p>
                            <p>{achitecture.content}</p>
                          </div>
                        }
                        placement={"bottom"}
                      >
                        <Card>
                          {/* <Image
                            src={achitecture.imgSrc}
                            width={150}
                            height={50}
                            alt="a"
                          ></Image> */}
                        </Card>
                      </Tooltip>
                    ))}
                  </div>
                ),
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  className="min-h-[300px] h-full w-full p-4"
                  isBlurred
                  style={{ gridArea: content.gridArea }}
                >
                  <CardHeader>
                    <p className="text-lg font-bold">{content.title}</p>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody className="flex flex-col items-center justify-center">
                    {content.children}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
