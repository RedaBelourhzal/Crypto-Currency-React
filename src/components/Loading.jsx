import React from "react";

const Loading = () => {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-light" role="status">
          <span class="sr-only">LOADING ...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
