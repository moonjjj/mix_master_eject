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
      <Modal isOpen={isOpen} size="xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                글쓰는 방법
              </ModalHeader>
              <ModalBody>
                <pre>글쓰는 방법 알려주기</pre>
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
