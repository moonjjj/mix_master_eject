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
} from "@nextui-org/react";
import { HowToWriteButton } from "./howToWriteButton";

export const WriteButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [writeValue, setWriteValue] = useState([]);

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
      <Modal isOpen={isOpen} size="xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">글쓰기</ModalHeader>
              <ModalBody>
                <pre>
                  글쓰기 내용들 입력받아야할 것들 : 제목 URL 뱃지
                  <br />
                  선택 시간 정해주고 / 글 쓰는 방법 보러가는 버튼 ㅇㅇ
                </pre>
              </ModalBody>
              <ModalFooter>
                <HowToWriteButton />
                <Button color="primary" onPress={onClose}>
                  글쓰기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
