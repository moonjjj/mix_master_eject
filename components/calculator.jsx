"use client";

import { useEffect, useRef, useState } from "react";
import {
  Input,
  Button,
  ScrollShadow,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  Divider,
} from "@nextui-org/react";
import { CheckIcon, Logo, ReportIcon, SearchIcon } from "@/components/icons";
import ReportModal from "./modal/reportModal";
import { attach } from "@/redux/slice/calculateSlice";
import { useSelector, useDispatch } from "react-redux";

export const Calculator = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [resultArray, setResultArray] = useState([]);
  const [reportPop, setReportPop] = useState(false);
  const [reportValue, setReportValue] = useState([]);
  const [bottom, setBottom] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = () => {
    setIsButtonClicked(true);
  };

  const result = useSelector((state) => state.calculate.value);
  const dispatch = useDispatch();
  // useSelector

  const errorSendFnc = () => {
    setReportPop(false);
    alert("good");
    // toast("전송되었습니다. 소중한 의견 감사합니다.");
  };

  // 순회하며 초기화
  const inputRefs = {
    input1: useRef(null),
    input2: useRef(null),
    input3: useRef(null),
    input4: useRef(null),
  };
  // const a =
  // {value:0,{mainCurrent:"",mainMax:"",subCurrent:"",subMax:"",result:"",time:""},mainCurrent:20,mainMax:20,subCurrent:20,subMax:20}

  const initialLevel = {
    mainCurrent: "",
    mainMax: "",
    subCurrent: "",
    subMax: "",
    result: "",
    time: "",
    name: "",
  };

  const [level, setLevel] = useState(initialLevel);

  const getResultFnc = () => {
    console.log(level);

    if (
      level.mainCurrent === "" ||
      level.mainCurrent === undefined ||
      level.mainCurrent <= 0 ||
      level.mainCurrent >= 300
    ) {
      return alert("코어1의 현재레벨을 확인해주세요.");
    }
    if (
      level.mainMax === "" ||
      level.mainMax === undefined ||
      level.mainMax <= 0 ||
      level.mainMax >= 300
    ) {
      return alert("코어1의 최대레벨을 확인해주세요.");
    }
    if (
      level.subCurrent === "" ||
      level.subCurrent === undefined ||
      level.subCurrent <= 0 ||
      level.subCurrent >= 300
    ) {
      return alert("코어2의 현재레벨을 확인해주세요.");
    }
    if (
      level.subMax === "" ||
      level.subMax === undefined ||
      level.subMax <= 0 ||
      level.subMax >= 300
    ) {
      return alert("코어2의 최대레벨을 확인해주세요.");
    }
    if (level.mainCurrent > level.mainMax) {
      //같으면 통과시켜줘야함.
      return alert("코어1의 현재레벨이 최대래벨보다 높습니다.");
    }
    if (level.subCurrent > level.subMax) {
      //같으면 통과시켜줘야함.
      return alert("코어2의 현재레벨이 최대래벨보다 높습니다.");
    }

    setResultFnc();
  };

  const handleReset = () => {
    console.log("--");
    for (const inputName in inputRefs) {
      if (inputRefs[inputName].current) {
        inputRefs[inputName].current.value = "";
      }
    }
  };

  const setResultFnc = async () => {
    //계산식 후 결과를 resultArray에 담아줘야함
    const formular1 = (100 * level.mainCurrent) / level.mainMax;
    const formular2 = (100 * level.subCurrent) / level.subMax;

    const result = parseInt(
      (parseInt(formular1) + parseInt(formular2)) * (5 / 100) +
        parseInt((level.mainCurrent + level.subCurrent) / 2)
    );

    // setLevel({ ...level, result: result });
    setResultArray((prevArray) => [...prevArray, { ...level, result: result }]); // 여기에 원하는 항목 추가
    handleReset(); //reset
    // setBottom(true);
    setIsButtonClicked(true);
    attachResultFnc(level, result); //dispatch
  };
  const attachResultFnc = (level, result) => {
    dispatch(attach({ ...level, result: result }));
  };

  // 클릭할 때 마다 아래로
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    console.log("------");
    useEffect(() => {
      if (bottom) {
        elementRef.current.scrollIntoView();
        window.scrollTo({ top: 200 });
      }
    }, [bottom]);
    return <div ref={elementRef} />;
  };

  // const [goingUp, setGoingUp] = useState(false);
  // const [currentScroll, setCurrentScroll] = useState(-1);
  // const onScroll = (e) => {
  //   setBottom(false);
  //   const currentScrollY = e.target.scrollTop;
  //   if (prevScrollY.current < currentScrollY && goingUp) {
  //     setGoingUp(false);
  //   }
  //   if (prevScrollY.current > currentScrollY && !goingUp) {
  //     setGoingUp(true);
  //   }
  //   prevScrollY.current = currentScrollY;
  //   setCurrentScroll(currentScrollY);
  // };

  // 포커스 되었을 때 아무 동작도 하지 않도록 합니다.
  const handleFocus = (event) => {
    setIsButtonClicked(false);
    event.preventDefault();
  };

  return (
    <>
      <ScrollShadow className="w-full h-[400px] my-10 py-5 mt-0 pt-0">
        <div>
          {/* 계산 결과 */}

          {result.length === 0 || result === undefined ? (
            <div className="text-medium font-medium mt-5">
              아직 믹스 레벨 계산한 내역이 없습니다. <br />
              아래의 계산기를 사용하여 믹스해보세요.
            </div>
          ) : (
            result.map((item, index) => (
              <div
                key={index}
                className="overflow-scroll gap-5 flex w-full justify-between items-center	py-3 px-5 mt-5 rounded-xl border-2 border-stone-100"
              >
                <div className="w-full">
                  <div className="flex">
                    <span title="메인코어 현재값" className="flex items-end">
                      <span className="text-xl lg:text-2xl font-medium">
                        {item.mainCurrent}
                      </span>
                      <span
                        title="메인코어 최대값"
                        className="text-sm lg:text-small text-default-400 ml-1"
                      >
                        {item.mainMax}
                      </span>
                    </span>
                    <span className="text-sm flex items-end lg:text-3xl font-medium mx-2">
                      +
                    </span>
                    <span title="서브코어 현재값" className="flex items-end">
                      <span className="text-xl lg:text-2xl font-medium">
                        {item.subCurrent}
                      </span>
                      <span
                        title="메인코어 최대값"
                        className="text-sm lg:text-small text-default-400 ml-1"
                      >
                        {item.subMax}
                      </span>
                    </span>
                    <span className="text-sm flex items-end lg:text-3xl font-medium mx-2">
                      =
                    </span>
                    <span
                      title="결과값"
                      className="text-xl flex items-end lg:text-3xl font-bold"
                    >
                      {item.result}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {item?.name && (
                    <Button variant="bordered">{item?.name}</Button>
                  )}
                  <Button
                    isIconOnly
                    className="cursor-pointer"
                    onClick={() => {
                      setReportValue(item);
                      // setReportPop(true);
                    }}
                    onPress={onOpen}
                  >
                    <ReportIcon />
                  </Button>
                  {/* <p>{item?.time}</p> */}
                </div>
              </div>
            ))
          )}
          {isButtonClicked && (
            <AlwaysScrollToBottom style={{ display: "none" }} />
          )}
        </div>
      </ScrollShadow>
      <Divider className="mb-5" />
      <div>
        {/* <div className="flex w-full flex-wrap flex-col mb-6 md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="sm"
            type="number"
            label="메인코어 현재레벨"
            placeholder="현재레벨을 입력해주세요."
            ref={inputRefs.input1}
            onChange={(e) =>
              setLevel({ ...level, mainCurrent: Number(e.target.value) })
            }
          />
        </div> */}
        <div className="flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-4 gap-4">
          <Input
            size="md"
            type="text"
            label="결과 코어 이름"
            placeholder="저장용 이름입니다. (선택입력)"
            maxLength={10}
            ref={inputRefs.input1}
            onFocus={handleFocus}
            onChange={(e) => setLevel({ ...level, name: e.target.value })}
          />
        </div>
        <div className="flex gap-5">
          <div className="flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              size="sm"
              type="number"
              label="메인코어 현재레벨"
              placeholder="현재레벨을 입력해주세요."
              ref={inputRefs.input1}
              onFocus={handleFocus}
              onChange={(e) =>
                setLevel({ ...level, mainCurrent: Number(e.target.value) })
              }
            />
            <Input
              size="sm"
              type="number"
              label="메인코어 최대레벨"
              placeholder="최대레벨을 입력해주세요."
              ref={inputRefs.input2}
              onFocus={handleFocus}
              onChange={(e) =>
                setLevel({ ...level, mainMax: Number(e.target.value) })
              }
            />
          </div>
          <div className="flex w-full flex-wrap flex-col md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              size="sm"
              type="number"
              label="서브코어 현재레벨"
              placeholder="현재레벨을 입력해주세요."
              ref={inputRefs.input3}
              onFocus={handleFocus}
              onChange={(e) =>
                setLevel({ ...level, subCurrent: Number(e.target.value) })
              }
            />
            <Input
              size="sm"
              type="number"
              label="서브코어 최대레벨"
              placeholder="최대레벨을 입력해주세요."
              ref={inputRefs.input4}
              onFocus={handleFocus}
              onChange={(e) =>
                setLevel({ ...level, subMax: Number(e.target.value) })
              }
            />
          </div>
        </div>
        <div className="w-full my-5">
          <Button
            startContent={<SearchIcon />}
            className="w-full text-large text-default-900 bg-blue-400"
            onClick={getResultFnc}
          >
            믹스
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                📌 오류신고
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-center flex w-full items-center bg-zinc-800 py-3 px-5 rounded-xl ">
                  <span title="메인코어 현재값" className="flex items-end">
                    <span className="text-2xl font-medium">
                      {reportValue?.mainCurrent}
                    </span>
                    <span
                      title="메인코어 최대값"
                      className="text-small text-default-400 ml-1"
                    >
                      {reportValue?.mainMax}
                    </span>
                  </span>
                  <span className="text-3xl font-medium mx-2">+</span>
                  <span title="서브코어 현재값" className="flex items-end">
                    <span className="text-2xl font-medium">
                      {reportValue?.subCurrent}
                    </span>
                    <span
                      title="메인코어 최대값"
                      className="text-small text-default-400 ml-1"
                    >
                      {reportValue?.subMax}
                    </span>
                  </span>
                  <span className="text-3xl font-medium mx-2">=</span>
                  <span title="결과값" className="text-3xl font-bold">
                    {reportValue?.result}
                  </span>
                </div>
                <div>
                  <span className="text-small text-default-400">
                    잘못된 정보를 드려 죄송합니다.
                    <br />더 정확한 정보를 드리기 위해 노력하겠습니다.
                  </span>
                </div>
                <Textarea
                  label="다르게 나온 결과값"
                  placeholder={`✔️ 메인현재(메인최대) + 서브현재(서브최대) = 다르게나온결과값 \n형식으로 작성해주세요.`}
                  className="w-full"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  닫기
                </Button>
                <Button color="primary" onPress={onClose}>
                  전송
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>{" "}
    </>
  );
};
