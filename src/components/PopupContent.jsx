import {createPortal} from "react-dom";

const PopupContent = ({copied}) => {

  return createPortal(<section>
    {copied && (
      <div style={{position: "absolute", bottom: "3rem"}}>Copied to clipboard</div>
    )}
  </section>,
  document.getElementById("popupContent")
    );
};

export default PopupContent;
