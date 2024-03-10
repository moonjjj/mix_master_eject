"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
  Code,
} from "@nextui-org/react";
export const HowToWriteButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [writeValue, setWriteValue] = useState([]);

  return (
    <>
      <Button
        className="cursor-pointer"
        onClick={() => {
          //   setWriteValue(item);
          // setReportPop(true);
        }}
        onPress={onOpen}
      >
        글쓰는 방법
      </Button>
      <Modal
        isOpen={isOpen}
        size="2xl"
        onOpenChange={onOpenChange}
        className="max-w-[300px] lg: max-w-[600px] max-h-[600px] overflow-scroll"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                글쓰는 방법
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-5">
                  <div>
                    <Code size="sm">웹</Code>
                    <img src="../../../howToWrite_web.png" className="" />
                  </div>
                  <Divider orientation="vertical" />
                  <div>
                    <Code size="sm">모바일</Code>
                    <img
                      src="../../../howToWrite_mobile.png"
                      // className="w-[400px]"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <Code size="lg">
                    네이버 카페 글의 URL복사 버튼을 눌러 글을 작성해주세요!
                  </Code>
                </div>
                <div>
                  <Code size="sm">
                    네이버 카페는 주소창 URL로 상세페이지를 구분하지 않기 때문에
                    <br />
                    불편하더라도 양해 부탁드립니다..!
                  </Code>
                  {/* <Code size="md"></Code> */}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  닫기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
