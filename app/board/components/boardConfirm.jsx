import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { connectDB } from "@/util/database";

export default async function BoardConfirm({ value }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const click = async () => {
    const client = await connectDB;
    const db = client.db("mixmaster");
    let result = await db.collection("forum").insertOne(writeValue);
    // return res.status(200).redirect("/board");
    console.log(result);
  };

  return (
    <div>
      sdfas
      <span>asdf</span>
      <Button onClick={click}>정말작성?</Button>
    </div>
  );
}
