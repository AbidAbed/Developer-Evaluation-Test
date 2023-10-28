import { AiFillCopy } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";

function useHandleCopyClick(setCopyClipBoardIcon, copyClipBoardIcon) {
  return async (todoText, index) => {
    try {
      await navigator.clipboard.writeText(todoText);

      setCopyClipBoardIcon({
        ...copyClipBoardIcon,
        [todoText.concat(index)]: <AiFillCopy />,
      });

      setTimeout(() => {
        setCopyClipBoardIcon({
          ...copyClipBoardIcon,
          [todoText.concat(index)]: <AiOutlineCopy />,
        });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
}
export default useHandleCopyClick;
