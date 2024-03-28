"use client";

import { useMemo, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  RadioGroup,
  Radio,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { HowToWriteButton } from "./howToWriteButton";
import { writeApi } from "../../app/board/components/writeButtonDetail";
import axios from "axios";
import { format } from "date-fns";
// import { useRouter } from "next/router";
// import handler from "../api/writeApi";
// import BoardConfirm from "@/app/board/components/boardConfirm";
// import { writeApi } from "../api/writeApi";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

const initialValue = {
  title: "",
  writer: "",
  date: formattedDate,
  url: "",
  icon: "",
};

const pattern = /^https:\/\/cafe\.naver\.com\/(mixmasterau|blade)\/\d+$/;

export const WriteButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [openCustomModal, setOpenCustomModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const router = useRouter();

  const [writeValue, setWriteValue] = useState(initialValue);

  const checkStringFormat = (inputString) => {
    // 정규표현식을 사용하여 주어진 형식에 맞는지 확인합니다.
    // const pattern = /^https:\/\/cafe\.naver\.com\/(mixmasterau|blade)\/\d+$/;

    // 정규표현식에 맞는지 여부를 검사합니다.
    return pattern.test(inputString);
  };

  const validation = async () => {
    if (writeValue.title === "" || writeValue.title === undefined) {
      return alert("제목을 입력해주세요.");
    }
    if (writeValue.writer === "" || writeValue.writer === undefined) {
      return alert("작성자를 입력해주세요.");
    }
    if (writeValue.url === "" || writeValue.url === undefined) {
      return alert("URL을 입력해주세요.");
    }
    // url 형식 확인
    if (!checkStringFormat(writeValue.url)) {
      return alert(
        "글쓰는 방법을 참고해주세요!\nhttps://cafe.naver.com/mixmasterau/[게시물번호]\nhttps://cafe.naver.com/blade/[게시물번호]\n형식의 글만 작성이 가능합니다!"
      );
    }
    if (writeValue.icon === "" || writeValue.icon === undefined) {
      return alert("종류를 선택해주세요.");
    }

    writeApi();
  };

  const setResultFnc = () => {
    console.log(writeValue);

    setOpenCustomModal(true);
    // writeApi();
  };

  const writeApi = async () => {
    setLoading(true);
    try {
      const response = await axios.post("/api/writeApi", writeValue);
      if (response.status === 200) {
        // alert("글쓰기 성공");
        // setOpenCustomModal(false);
        //모달 닫아주고, 로딩 ui 켜주고, 리스트페이지 띄워주기
        // onClose;
        setLoading(false);
        alert("글 작성에 성공했습니다!!");
        window.location.reload();
        // router.push("/board");
      }
    } catch (error) {
      setLoading(false);
      alert("글쓰기에 실패했습니다.");
      console.error("Error writing data:", error);
    }
  };

  const [urlValue, setUrlValue] = useState("");

  const validateUrl = (value) => value.match(pattern);

  const isInvalid = useMemo(() => {
    if (urlValue === "") return false;

    return validateUrl(urlValue) ? false : true;
  }, [urlValue]);

  return (
    <>
      <Button
        className="cursor-pointer"
        color="primary"
        onClick={() => {
          //   setWriteValue(item);
          // setReportPop(true);
        }}
        onPress={onOpen}
      >
        글쓰기
      </Button>
      <Modal
        isOpen={isOpen}
        size="xl"
        onOpenChange={onOpenChange}
        className="max-w-[300px] absolute top-0  lg:relative max-w-[600px] max-h-[600px] overflow-scroll"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">글쓰기</ModalHeader>
              <ModalBody>
                <div>
                  <span>제목</span>
                  <Input
                    className="mt-1 mb-5"
                    placeholder="제목을 입력해주세요."
                    onChange={(e) => {
                      setWriteValue({ ...writeValue, title: e.target.value });
                      e.preventDefault();
                    }}
                  />
                </div>
                <div>
                  <span>작성자</span>
                  <Input
                    className="mt-1 mb-5"
                    placeholder="게임 닉네임을 입력해주세요."
                    onChange={(e) => {
                      setWriteValue({ ...writeValue, writer: e.target.value });
                      e.preventDefault();
                    }}
                  />
                </div>
                <div>
                  <span className="">URL</span>
                  {/* <Input
                    className="mt-1 mb-5"
                    placeholder="복사해오신 URL을 입력해주세요."
                    onChange={(e) =>
                      setWriteValue({ ...writeValue, url: e.target.value })
                    }
                  /> */}
                  <Input
                    value={urlValue}
                    // type="email"
                    label="URL을 입력해주세요!"
                    // variant="bordered"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : ""}
                    errorMessage={
                      isInvalid &&
                      "올바른 형식 : https://cafe.naver.com/mixmasterau/[게시물번호] or  OR https://cafe.naver.com/blade/[게시물번호]"
                    }
                    onValueChange={setUrlValue}
                    onChange={(e) =>
                      setWriteValue({ ...writeValue, url: e.target.value })
                    }
                    // className="max-w-xs"
                  />
                </div>
                <div>
                  <p>글 종류</p>
                  <RadioGroup
                    // label="원하는 카테고리를 선택해주세요."
                    color="secondary"
                    // defaultValue="전체보기"
                    orientation="horizontal"
                    // onChange={writeHandle}
                    className="mt-2 mb-5"
                    onChange={(e) =>
                      setWriteValue({ ...writeValue, icon: e.target.value })
                    }
                  >
                    <Radio value="공략">공략</Radio>
                    <Divider orientation="vertical" className="mx-1" />
                    <Radio value="정보">정보</Radio>
                    <Divider orientation="vertical" className="mx-1" />
                    <Radio value="자유">자유</Radio>
                    <Divider orientation="vertical" className="mx-1" />
                    <Radio value="기타">기타</Radio>
                  </RadioGroup>
                </div>
              </ModalBody>
              <ModalFooter>
                <HowToWriteButton />
                <Button color="primary" onPress={validation}>
                  글쓰기
                </Button>
                {/* <WriteButtonDetail /> */}
                {loading && (
                  <div className="z-100000 absolute bottom-0 left-0 right-0 top-0 bg-gray-950 bg-opacity-50 flex justify-center items-center">
                    <Spinner
                      label="글작성 중..."
                      color="primary"
                      labelColor="primary"
                    />
                  </div>
                )}
              </ModalFooter>
            </>
          )}
          {/* {openCustomModal && <BoardConfirm />} */}
        </ModalContent>
      </Modal>
    </>
  );
};
