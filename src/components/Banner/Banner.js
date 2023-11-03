import React from "react";

function Banner({ action, actionText, children, status }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      {action && (
        <button type="button" onClick={action}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
