"use client";

import { ChatSubmitButtonFunc } from "@/actions/HomeAction";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";

interface ChatDataType {
  username: string;
  like: number;
  content: string;
}

interface ChatProps {
  chatArr: ChatDataType[] | [];
  setChatState: React.Dispatch<React.SetStateAction<boolean>>;
  updateState: boolean;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
  dataId: string;
}

const ChatPage: React.FC<ChatProps> = ({ chatArr, setChatState, updateState, setUpdateState, dataId }) => {
  const [chatValue, setChatValue] = useState<string>("");
  const [chatData, setChatData] = useState(chatArr);

  const UploadChatButton = async () => {
    const notUpdatedItem = chatData;
    try {
      setUpdateState(true);
      // 부모에서 받아오는 chatArr을 변경시키기 위한 상태값
      setChatData((prev) => {
        return(
          [...prev,
            {
              username: '이예의집',
              like: 0,
              content: chatValue,
            }
          ]
        )
      });
      // 사용자가 로딩 없이 화면을 볼 수 있게 하는 즉각적 상태변화화
      const updateFunc = await ChatSubmitButtonFunc(dataId, chatValue);
      toast.success("좋아요가 업데이트 되었습니다!");
      console.log('success');
    } catch (error) {
      setChatData(notUpdatedItem);
      // 오류가 발생하거나 api 데이터를 업데이트 할 수 없다면 기존 값으로 되돌림.
      console.error("Error", error);
      toast.error("Error");
    } finally {
      setUpdateState(false);
      // 비동기적 업데이트가 완료되면, update 상태를 바꿈
      console.log("updated");
    }
  };

  const ChangeChatValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatValue(e.target.value);
  }

  if (chatData.length === 0) {
    return (
      <>
     <div className="fixed bg-white z-[1000] w-screen h-screen top-0 flex flex-col left-0 space-y-10">
        <div className="h-[6vh] border-b w-full fixed bg-white flex items-center justify-center text-[18px] z-50">
          댓글
        </div>

        <div className="h-[8vh] fixed bottom-0 border-t flex items-center justify-center z-50 w-full bg-white">
          <input type="text" value={chatValue} className="w-[80%] h-[70%] pl-5 outline-blue-100" placeholder="댓글을 입력해주세요" onChange={ChangeChatValue} />
          <button type="submit" className="w-[15%] h-[50%] bg-black text-white flex items-center justify-center" onClick={UploadChatButton}>
            제출
          </button>
        </div>

        <div className="overflow-y-auto w-full h-[92vh] pt-[6vh]">
          <div className="w-full h-auto text-[18px] flex items-center justify-center">
            첫번째 댓글을 남겨주세요!
          </div>
        </div>
      </div>
      </>
    );

  } else {
    return(
      <div className="fixed bg-white z-[1000] w-screen h-screen top-0 flex flex-col left-0 space-y-10">
        <div className="h-[6vh] border-b w-full fixed bg-white flex items-center justify-center text-[18px] z-50">
          댓글
        </div>

        <div className="h-[8vh] fixed bottom-0 border-t flex items-center justify-center z-50 w-full bg-white">
          <input type="text" value={chatValue} className="w-[80%] h-[70%] pl-5 outline-blue-100" placeholder="댓글을 입력해주세요" onChange={ChangeChatValue} />
          <button type="submit" className="w-[15%] h-[50%] bg-black text-white flex items-center justify-center" onClick={UploadChatButton}>
            제출
          </button>
        </div>

        <div className="overflow-y-auto w-full h-[92vh] pt-[6vh]">
          <div className="h-auto flex flex-col pt-[2vh] space-y-8 w-full">
            {chatData?.map((data, idx) => (
              <Fragment key={idx}>
                <div className="w-full h-auto flex space-x-5 pl-5 pr-5">
                  <div className="w-10 h-10 overflow-hidden rounded-full bg-red-600 shrink-0">

                  </div>

                  <div className="w-auto flex flex-col">
                    <span>{data.username}</span>
                    <div>{data.content}</div>
                  </div>
                </div>
              </Fragment>
            ))}
            <div className="bg-white h-[100px] w-full" />
          </div>
        </div>
      </div>
    )
  }


};

export default ChatPage;
