import React from 'react';

const QRCodeButton = () => {
  return (
    <button>
      <span className="
        box
        w-[140px]
        h-auto
        float-left
        transition-transform
        transition-colors
        duration-500
        relative
        inline-block
        overflow-hidden
        text-center
        rounded-md
        bg-transparent
        text-uppercase
        font-bold
        text-gray-900
        hover:bg-gray-100
        focus:bg-gray-100
        focus:outline-none
      ">
        Hover!
        <span className="
          box-before
          absolute
          inset-x-0
          bottom-0
          h-4
          border-b-4
          border-b-transparent
          border-l-4
          border-l-transparent
          transform
          translate-x-full
        "></span>
        <span className="
          box-after
          absolute
          inset-x-0
          top-0
          h-4
          border-t-4
          border-t-transparent
          border-r-4
          border-r-transparent
          transform
          translate-x-[-100%]
        "></span>
        <span className="
          box-before-updated
          absolute
          inset-x-0
          bottom-0
          h-full
          border-b-4
          border-b-transparent
          border-l-4
          border-l-transparent
          transition-colors
          duration-300
          transform
          translate-x-full
          translate-y-[100%]
        " style={{ transform: 'translateX(0)', transitionTimingFunction: 'linear' }}></span>
        <span className="
          box-after-updated
          absolute
          inset-x-0
          top-0
          h-full
          border-t-4
          border-t-transparent
          border-r-4
          border-r-transparent
          transition-colors
          duration-300
          transform
          translate-x-[-100%]
          translate-y-100%
        " style={{ transform: 'translateX(0)', transitionTimingFunction: 'linear' }}></span>
      </span>
    </button>
  );
};

export default QRCodeButton;
