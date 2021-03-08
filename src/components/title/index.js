import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const fillStroke = {
  hidden: {
    opacity: 0,
    pathOffset: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathOffset: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, .8)"
  }
};

const fadeIn = {
  hidden: {
    opacity: 0,
    fill: "rgba(96, 0, 120, 0)",
    stroke: "rgba(96, 0, 120, 0)",
  },
  visible: {
    opacity: 1,
    fill: "rgba(96, 0, 120, 1)",
    stroke: "rgba(96, 0, 120, 0)",
  }
};

const fillGradient = {
  d: {
    hidden: {
      pathOffset: 1,
      pathLength: 1,
      fill: "rgba(210, 51, 223, 0)",
      stroke: "rgba(255, 255, 255, 1)",
    },
    visible: {
      pathOffset: 0,
      pathLength: 0,
      fill: "rgba(210, 51, 223, 1)",
      stroke: "rgba(255, 255, 255, 0)",
    }    
  },
  e: {
    hidden: {
      pathOffset: 1,
      pathLength: 1,
      fill: "rgba(223, 54, 178, 0)",
      stroke: "rgba(255, 255, 255, 1)",
    },
    visible: {
      pathOffset: 0,
      pathLength: 0,
      fill: "rgba(223, 54, 178, 1)",
      stroke: "rgba(255, 255, 255, 0)",
    }    
  },
  s: {
    hidden: {
      pathOffset: 1,
      pathLength: 1,
      fill: "rgba(234, 57, 138, 0)",
      stroke: "rgba(255, 255, 255, 1)",
    },
    visible: {
      pathOffset: 0,
      pathLength: 0,
      fill: "rgba(234, 57, 138, 1)",
      stroke: "rgba(255, 255, 255, 0)",
    }    
  },
  i: {
    hidden: {
      pathOffset: 1,
      pathLength: 1,
      fill: "rgba(242, 58, 108, 0)",
      stroke: "rgba(255, 255, 255, 1)",
    },
    visible: {
      pathOffset: 0,
      pathLength: 0,
      fill: "rgba(242, 58, 108, 1)",
      stroke: "rgba(255, 255, 255, 0)",
    }    
  },
  g: {
    hidden: {
      pathOffset: 1,
      pathLength: 1,
      fill: "rgba(250, 60, 79, 0)",
      stroke: "rgba(255, 255, 255, 1)",
    },
    visible: {
      pathOffset: 0,
      pathLength: 0,
      fill: "rgba(250, 60, 79, 1)",
      stroke: "rgba(255, 255, 255, 0)",
    }    
  },
  n: {
    hidden: {
      pathOffset: 1,
      pathLength: 1,
      fill: "rgba(255, 61, 61, 0)",
      stroke: "rgba(255, 255, 255, 1)",
    },
    visible: {
      pathOffset: 0,
      pathLength: 0,
      fill: "rgba(255, 61, 61, 1)",
      stroke: "rgba(255, 255, 255, 0)",
    }    
  },  
};


const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Atkinson Hyperlegible', sans-serif;
  margin-top: 5rem;
  text-align: center;
  
  .paths {
    display: block;
    overflow: visible;
    margin: 0 auto;
    max-width: 600px;
    stroke: #fff;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
    width: 80%;
  }
  
  @media screen and (max-width: 600px) {
    margin-top: 25rem;  
  }
`
const SvgTitle = () => (
    <motion.svg
      viewBox="0 0 683 420"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className="paths"
    >
      <motion.path
        d="M31.7764 1.82554C35.181 1.82554 38.3334 2.07774 41.2336 2.58212C44.1969 3.02346 46.7503 3.87461 48.894 5.13558C51.0376 6.3335 52.7084 8.00428 53.9063 10.1479C55.1673 12.2285 55.7978 14.9396 55.7978 18.2812C55.7978 21.1814 55.1358 23.7349 53.8118 25.9415C52.5508 28.1482 50.7224 29.9766 48.3266 31.4268C51.2898 32.4355 53.6857 34.0748 55.5141 36.3445C57.4055 38.6143 58.3513 41.6721 58.3513 45.5181C58.3513 49.0488 57.7208 52.0751 56.4598 54.597C55.2619 57.0559 53.5281 59.0735 51.2583 60.6497C49.0516 62.1628 46.3721 63.2662 43.2196 63.9597C40.1303 64.6533 36.6626 65 32.8167 65H4.16117V1.82554H31.7764ZM19.1036 38.3306V52.611H32.9112C36.1267 52.611 38.5225 51.9805 40.0987 50.7196C41.738 49.3955 42.5576 47.6302 42.5576 45.4235C42.5576 43.2168 41.738 41.483 40.0987 40.222C38.5225 38.961 36.1267 38.3306 32.9112 38.3306H19.1036ZM19.1036 14.0254V26.7927H32.2492C34.7712 26.7927 36.7257 26.2253 38.1127 25.0904C39.5628 23.8925 40.2879 22.3163 40.2879 20.3618C40.2879 18.3442 39.5628 16.7995 38.1127 15.7277C36.7257 14.5928 34.7712 14.0254 32.2492 14.0254H19.1036Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M110.599 51.8544V65H65.3932V1.82554H80.3357V51.8544H110.599Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0.25 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M115.905 37.3848V1.82554H130.848V38.6143C130.848 40.9471 130.974 43.0592 131.226 44.9506C131.541 46.8421 132.14 48.4498 133.023 49.7738C133.906 51.0979 135.135 52.1381 136.711 52.8947C138.351 53.5883 140.494 53.935 143.142 53.935C145.727 53.935 147.808 53.5883 149.384 52.8947C151.023 52.1381 152.284 51.0979 153.167 49.7738C154.05 48.4498 154.617 46.8421 154.869 44.9506C155.184 43.0592 155.342 40.9471 155.342 38.6143V1.82554H170.285V37.3848C170.285 42.2396 169.78 46.4953 168.771 50.1521C167.826 53.7459 166.249 56.7407 164.043 59.1365C161.899 61.4693 159.093 63.2347 155.626 64.4326C152.221 65.5675 148.06 66.1349 143.142 66.1349C138.224 66.1349 134.032 65.5675 130.564 64.4326C127.096 63.2347 124.259 61.4693 122.053 59.1365C119.909 56.7407 118.333 53.7459 117.324 50.1521C116.378 46.4953 115.905 42.2396 115.905 37.3848Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0.5 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M202.65 1.82554C206.748 1.82554 210.531 2.10926 213.998 2.67669C217.529 3.24413 220.556 4.2529 223.077 5.70302C225.662 7.15313 227.68 9.17068 229.13 11.7557C230.58 14.2776 231.305 17.4931 231.305 21.4021C231.305 23.1674 231.053 24.9643 230.549 26.7927C230.107 28.6211 229.319 30.3549 228.184 31.9942C227.05 33.5704 225.505 35.0205 223.55 36.3445C221.596 37.6685 219.105 38.7404 216.079 39.56L234.426 65H217.119L200.002 41.1677H193.287V65H178.345V1.82554H202.65ZM193.287 28.6842H203.123C204.888 28.6842 206.527 28.5896 208.04 28.4004C209.554 28.2113 210.846 27.8645 211.918 27.3601C213.053 26.7927 213.935 26.0676 214.566 25.185C215.196 24.2392 215.512 23.0413 215.512 21.5912C215.512 20.1411 215.196 18.9432 214.566 17.9975C213.935 17.0517 213.053 16.3267 211.918 15.8223C210.846 15.2548 209.554 14.8766 208.04 14.6874C206.527 14.4983 204.888 14.4037 203.123 14.4037H193.287V28.6842Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0.75 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M264.528 1.82554C268.626 1.82554 272.409 2.10926 275.877 2.67669C279.408 3.24413 282.434 4.2529 284.956 5.70302C287.541 7.15313 289.559 9.17068 291.009 11.7557C292.459 14.2776 293.184 17.4931 293.184 21.4021C293.184 23.1674 292.932 24.9643 292.427 26.7927C291.986 28.6211 291.198 30.3549 290.063 31.9942C288.928 33.5704 287.383 35.0205 285.429 36.3445C283.474 37.6685 280.984 38.7404 277.958 39.56L296.305 65H278.998L261.88 41.1677H255.166V65H240.223V1.82554H264.528ZM255.166 28.6842H265.001C266.767 28.6842 268.406 28.5896 269.919 28.4004C271.432 28.2113 272.725 27.8645 273.796 27.3601C274.931 26.7927 275.814 26.0676 276.444 25.185C277.075 24.2392 277.39 23.0413 277.39 21.5912C277.39 20.1411 277.075 18.9432 276.444 17.9975C275.814 17.0517 274.931 16.3267 273.796 15.8223C272.725 15.2548 271.432 14.8766 269.919 14.6874C268.406 14.4983 266.767 14.4037 265.001 14.4037H255.166V28.6842Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M312.221 53.273V13.5525H303.331V1.82554H335.864V13.5525H327.163V53.273H335.864V65H303.331V53.273H312.221Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1.25 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M364.426 1.82554L388.825 46.8421V1.82554H403.295V65H384.191L359.792 19.9835V65H345.417V1.82554H364.426Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1.5 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M442.939 0.690674C448.488 0.690674 453.469 1.79402 457.882 4.00071C462.358 6.14436 465.858 9.39135 468.379 13.7417L455.518 19.0377C454.446 17.3985 452.87 15.9799 450.789 14.782C448.708 13.5841 446.029 12.9851 442.75 12.9851C440.481 12.9851 438.368 13.4264 436.414 14.3091C434.459 15.1288 432.757 16.3897 431.307 18.092C429.857 19.7943 428.691 21.9065 427.808 24.4284C426.988 26.9503 426.578 29.8821 426.578 33.2236C426.578 39.9068 428.092 45.0137 431.118 48.5444C434.144 52.0751 438.116 53.8405 443.034 53.8405C444.736 53.8405 446.439 53.6828 448.141 53.3676C449.843 52.9893 451.356 52.3903 452.68 51.5707C454.004 50.688 455.076 49.5847 455.896 48.2607C456.716 46.8736 457.125 45.1713 457.125 43.1538V41.3569H442.939V29.2516H472.068V65H462.232L460.152 58.0016C458.134 60.7758 455.518 62.8248 452.302 64.1489C449.15 65.4729 445.304 66.1349 440.764 66.1349C436.162 66.1349 432.001 65.3783 428.281 63.8651C424.561 62.2889 421.408 60.0822 418.823 57.2451C416.238 54.4079 414.252 50.9718 412.865 46.9367C411.478 42.8385 410.785 38.2675 410.785 33.2236C410.785 28.2428 411.541 23.7664 413.055 19.7943C414.631 15.7592 416.837 12.3231 419.675 9.48592C422.512 6.64874 425.885 4.47357 429.794 2.96041C433.766 1.44725 438.148 0.690674 442.939 0.690674Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1.75 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M507.16 1.82554H562.674V14.9711H542.341V65H527.493V14.9711H507.16V1.82554Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M568.272 1.82554H583.214V25.9415H609.222V1.82554H624.164V65H609.222V39.0871H583.214V65H568.272V1.82554Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.25 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M632.459 1.82554H681.069V14.9711H647.402V25.9415H667.924V39.0871H647.402V51.8544H681.069V65H632.459V1.82554Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.5 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M49.3669 150.854V164H4.16117V100.826H19.1036V150.854H49.3669Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M65.0762 152.273V112.553H56.1864V100.826H88.7194V112.553H80.0187V152.273H88.7194V164H56.1864V152.273H65.0762Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0.25 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M117.281 100.826L141.681 145.842V100.826H156.15V164H137.047L112.647 118.983V164H98.2719V100.826H117.281Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0.5 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M164.491 100.826H213.102V113.971H179.434V124.942H199.956V138.087H179.434V150.854H213.102V164H164.491V100.826Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 0.75 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M277.259 100.826C280.663 100.826 283.816 101.078 286.716 101.582C289.679 102.023 292.233 102.875 294.376 104.136C296.52 105.334 298.191 107.004 299.389 109.148C300.65 111.229 301.28 113.94 301.28 117.281C301.28 120.181 300.618 122.735 299.294 124.942C298.033 127.148 296.205 128.977 293.809 130.427C296.772 131.436 299.168 133.075 300.996 135.345C302.888 137.614 303.834 140.672 303.834 144.518C303.834 148.049 303.203 151.075 301.942 153.597C300.744 156.056 299.01 158.073 296.741 159.65C294.534 161.163 291.854 162.266 288.702 162.96C285.613 163.653 282.145 164 278.299 164H249.643V100.826H277.259ZM264.586 137.331V151.611H278.394C281.609 151.611 284.005 150.981 285.581 149.72C287.22 148.396 288.04 146.63 288.04 144.423C288.04 142.217 287.22 140.483 285.581 139.222C284.005 137.961 281.609 137.331 278.394 137.331H264.586ZM264.586 113.025V125.793H277.732C280.253 125.793 282.208 125.225 283.595 124.09C285.045 122.892 285.77 121.316 285.77 119.362C285.77 117.344 285.045 115.8 283.595 114.728C282.208 113.593 280.253 113.025 277.732 113.025H264.586Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M310.876 100.826H359.486V113.971H325.818V124.942H346.34V138.087H325.818V150.854H359.486V164H310.876V100.826Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1.25 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M362.992 100.826H418.507V113.971H398.173V164H383.326V113.971H362.992V100.826Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1.5 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M423.567 100.826H438.509L447.305 144.613L456.573 100.826H472.083L481.445 144.613L490.241 100.826H505.183L489.957 164H473.974L464.328 119.551L454.776 164H438.793L423.567 100.826Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 1.75 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M510.272 100.826H558.882V113.971H525.215V124.942H545.737V138.087H525.215V150.854H558.882V164H510.272V100.826Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M565.132 100.826H613.742V113.971H580.074V124.942H600.596V138.087H580.074V150.854H613.742V164H565.132V100.826Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.25 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M639 100.826L663.4 145.842V100.826H677.87V164H658.766L634.366 118.983V164H619.991V100.826H639Z"
        variants={fillStroke}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.5 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M48.3783 294.588C58.396 294.588 67.6807 295.627 76.2324 297.704C84.9063 299.658 92.4196 303.018 98.7723 307.782C105.125 312.547 110.134 318.839 113.799 326.657C117.464 334.476 119.296 344.188 119.296 355.794C119.296 367.522 117.464 377.296 113.799 385.114C110.134 392.933 105.125 399.225 98.7723 403.989C92.4196 408.632 84.9063 411.991 76.2324 414.068C67.6807 416.023 58.396 417 48.3783 417H8.06303V294.588H48.3783ZM37.0167 392.628H48.928C54.1812 392.628 59.2512 392.261 64.1379 391.528C69.0246 390.673 73.3004 388.963 76.9654 386.397C80.7526 383.709 83.7457 379.983 85.9447 375.219C88.2659 370.332 89.4265 363.857 89.4265 355.794C89.4265 347.731 88.2659 341.256 85.9447 336.37C83.7457 331.483 80.7526 327.757 76.9654 325.191C73.3004 322.504 69.0246 320.732 64.1379 319.877C59.2512 319.022 54.1812 318.594 48.928 318.594H37.0167V392.628Z"
        variants={fillGradient.d}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M132.974 294.588H227.165V320.06H161.928V341.317H201.694V366.789H161.928V391.528H227.165V417H132.974V294.588Z"
        variants={fillGradient.e}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M262.181 378.701C263.891 384.565 267.067 388.902 271.71 391.711C276.352 394.521 282.094 395.926 288.935 395.926C291.501 395.926 294.066 395.743 296.632 395.376C299.32 394.888 301.702 394.155 303.779 393.177C305.856 392.078 307.505 390.734 308.727 389.146C310.07 387.436 310.742 385.42 310.742 383.099C310.742 378.823 308.665 375.524 304.512 373.203C300.358 370.882 294.983 369.049 288.386 367.705L273.542 364.773C268.533 363.796 263.769 362.452 259.249 360.742C254.729 358.909 250.758 356.649 247.337 353.962C244.039 351.152 241.351 347.853 239.274 344.066C237.32 340.157 236.342 335.575 236.342 330.322C236.342 323.725 237.869 318.044 240.924 313.28C244.1 308.515 248.131 304.606 253.018 301.552C258.027 298.375 263.586 296.054 269.694 294.588C275.925 293.122 282.094 292.389 288.202 292.389C293.211 292.389 298.098 292.878 302.862 293.855C307.627 294.833 312.086 296.421 316.24 298.62C320.393 300.697 324.059 303.445 327.235 306.866C330.533 310.165 333.16 314.196 335.115 318.961L308.91 328.49C307.199 324.336 304.328 321.16 300.297 318.961C296.388 316.762 291.501 315.662 285.637 315.662C280.017 315.662 275.314 316.701 271.527 318.777C267.862 320.732 266.029 323.603 266.029 327.39C266.029 330.567 267.251 333.254 269.694 335.453C272.26 337.53 275.68 338.996 279.956 339.851L296.449 343.15C301.458 344.127 306.528 345.349 311.659 346.815C316.912 348.281 321.615 350.358 325.769 353.045C330.045 355.611 333.526 358.971 336.214 363.124C339.024 367.156 340.429 372.348 340.429 378.701C340.429 385.175 338.902 390.978 335.848 396.109C332.916 401.118 329.006 405.333 324.12 408.754C319.233 412.174 313.674 414.801 307.444 416.634C301.335 418.344 295.105 419.199 288.752 419.199C275.314 419.199 264.074 416.511 255.034 411.136C245.994 405.761 239.58 398.125 235.793 388.23L262.181 378.701Z"
        variants={fillGradient.s}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M372.34 394.277V317.311H355.115V294.588H418.153V317.311H401.294V394.277H418.153V417H355.115V394.277H372.34Z"
        variants={fillGradient.i}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M492.129 292.389C502.88 292.389 512.531 294.527 521.083 298.803C529.757 302.957 536.537 309.248 541.424 317.678L516.502 327.94C514.425 324.764 511.371 322.015 507.339 319.694C503.308 317.373 498.116 316.212 491.763 316.212C487.365 316.212 483.272 317.067 479.485 318.777C475.698 320.366 472.399 322.809 469.589 326.107C466.78 329.406 464.52 333.499 462.809 338.385C461.221 343.272 460.427 348.953 460.427 355.428C460.427 368.377 463.359 378.273 469.223 385.114C475.087 391.956 482.784 395.376 492.313 395.376C495.611 395.376 498.91 395.071 502.208 394.46C505.507 393.727 508.439 392.567 511.004 390.978C513.57 389.268 515.647 387.13 517.235 384.565C518.823 381.877 519.617 378.578 519.617 374.669V371.187H492.129V347.731H548.571V417H529.513L525.481 403.439C521.572 408.815 516.502 412.785 510.271 415.351C504.163 417.916 496.711 419.199 487.915 419.199C478.996 419.199 470.933 417.733 463.725 414.801C456.518 411.747 450.409 407.471 445.4 401.973C440.391 396.476 436.543 389.818 433.855 381.999C431.168 374.058 429.824 365.201 429.824 355.428C429.824 345.776 431.29 337.103 434.222 329.406C437.276 321.587 441.552 314.929 447.05 309.432C452.547 303.934 459.083 299.719 466.657 296.787C474.354 293.855 482.845 292.389 492.129 292.389Z"
        variants={fillGradient.g}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M600.018 294.588L647.297 381.816V294.588H675.335V417H638.318L591.039 329.772V417H563.185V294.588H600.018Z"
        variants={fillGradient.n}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M196.362 205.228C200.296 205.228 203.832 206.141 206.97 207.967C210.155 209.794 212.567 212.417 214.206 215.836L208.375 217.943C207.298 215.836 205.729 214.126 203.668 212.815C201.654 211.457 199.101 210.778 196.01 210.778C193.95 210.778 192.006 211.176 190.179 211.972C188.399 212.768 186.83 213.962 185.472 215.555C184.161 217.1 183.13 219.044 182.381 221.386C181.632 223.728 181.257 226.421 181.257 229.465C181.257 232.416 181.608 235.062 182.311 237.404C183.06 239.699 184.067 241.666 185.332 243.305C186.643 244.897 188.212 246.139 190.039 247.028C191.865 247.872 193.856 248.293 196.01 248.293C197.556 248.293 199.148 248.106 200.788 247.731C202.427 247.356 203.902 246.701 205.214 245.764C206.572 244.827 207.672 243.586 208.515 242.04C209.405 240.448 209.85 238.434 209.85 235.999V234.453H196.151V228.763H216.103V253H212.309L210.553 247.099C209.054 249.487 206.993 251.22 204.37 252.297C201.795 253.328 198.914 253.843 195.729 253.843C192.357 253.843 189.36 253.258 186.737 252.087C184.114 250.869 181.889 249.183 180.063 247.028C178.236 244.874 176.854 242.298 175.918 239.301C174.981 236.303 174.513 233.025 174.513 229.465C174.513 225.812 175.028 222.51 176.058 219.559C177.089 216.562 178.541 214.009 180.414 211.902C182.334 209.747 184.629 208.108 187.299 206.984C190.015 205.813 193.036 205.228 196.362 205.228Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M241.11 206.071C243.967 206.071 246.59 206.258 248.979 206.633C251.367 206.96 253.428 207.616 255.161 208.6C256.894 209.583 258.229 210.965 259.166 212.745C260.149 214.478 260.641 216.749 260.641 219.559C260.641 221.152 260.477 222.674 260.149 224.126C259.821 225.531 259.166 226.819 258.182 227.99C257.245 229.161 255.934 230.168 254.248 231.011C252.562 231.807 250.36 232.392 247.644 232.767L262.186 253H254.107L239.846 233.259H232.82V253H226.217V206.071H241.11ZM232.82 227.709H241.602C243.335 227.709 244.951 227.638 246.45 227.498C247.948 227.311 249.236 226.959 250.314 226.444C251.438 225.882 252.304 225.086 252.913 224.056C253.569 222.978 253.897 221.526 253.897 219.7C253.897 217.873 253.569 216.445 252.913 215.414C252.304 214.337 251.438 213.517 250.314 212.955C249.236 212.393 247.948 212.042 246.45 211.902C244.951 211.714 243.335 211.621 241.602 211.621H232.82V227.709Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M283.877 206H291.253L308.817 253H301.791L298.208 242.743H276.851L273.268 253H266.243L283.877 206ZM278.889 237.052H296.171L287.53 212.674L278.889 237.052Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M314.857 206.071H329.54C332.397 206.071 335.02 206.281 337.408 206.703C339.797 207.078 341.858 207.803 343.591 208.881C345.324 209.911 346.658 211.34 347.595 213.166C348.579 214.993 349.07 217.358 349.07 220.262C349.07 223.166 348.579 225.531 347.595 227.357C346.658 229.184 345.324 230.613 343.591 231.643C341.858 232.673 339.797 233.376 337.408 233.751C335.02 234.125 332.397 234.313 329.54 234.313H321.461V252.93H314.857V206.071ZM321.461 211.621V228.622H330.102C331.788 228.622 333.38 228.552 334.879 228.411C336.378 228.224 337.666 227.849 338.743 227.287C339.867 226.725 340.734 225.906 341.343 224.828C341.998 223.704 342.326 222.182 342.326 220.262C342.326 218.342 341.998 216.819 341.343 215.695C340.734 214.524 339.867 213.658 338.743 213.096C337.666 212.487 336.378 212.089 334.879 211.902C333.38 211.714 331.788 211.621 330.102 211.621H321.461Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M357.05 253V206.071H363.654V226.023H388.243V206.071H394.847V253H388.243V231.713H363.654V253H357.05Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M404.853 211.269V206.071H424.664V211.269H418.061V247.801H424.664V253H404.853V247.801H411.457V211.269H404.853Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M452.678 205.228C456.659 205.228 460.195 206.141 463.286 207.967C466.424 209.794 468.813 212.417 470.452 215.836L464.691 217.943C463.614 215.836 462.045 214.126 459.984 212.815C457.97 211.457 455.417 210.778 452.326 210.778C450.266 210.778 448.322 211.176 446.495 211.972C444.716 212.768 443.147 213.962 441.788 215.555C440.477 217.1 439.446 219.044 438.697 221.386C437.948 223.728 437.573 226.421 437.573 229.465C437.573 232.416 437.924 235.062 438.627 237.404C439.376 239.699 440.407 241.666 441.718 243.305C443.076 244.897 444.669 246.139 446.495 247.028C448.322 247.872 450.336 248.293 452.537 248.293C455.628 248.293 458.204 247.637 460.265 246.326C462.326 245.015 463.895 243.282 464.972 241.127L470.733 243.235C469.047 246.747 466.564 249.394 463.286 251.173C460.007 252.953 456.284 253.843 452.116 253.843C448.743 253.843 445.746 253.258 443.123 252.087C440.5 250.869 438.276 249.183 436.449 247.028C434.622 244.874 433.217 242.298 432.234 239.301C431.297 236.303 430.829 233.025 430.829 229.465C430.829 225.812 431.344 222.51 432.374 219.559C433.405 216.562 434.857 214.009 436.73 211.902C438.65 209.747 440.945 208.108 443.615 206.984C446.331 205.813 449.352 205.228 452.678 205.228Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M519.362 205.228C523.296 205.228 526.832 206.141 529.97 207.967C533.155 209.794 535.567 212.417 537.206 215.836L531.375 217.943C530.298 215.836 528.729 214.126 526.668 212.815C524.654 211.457 522.101 210.778 519.01 210.778C516.949 210.778 515.006 211.176 513.179 211.972C511.399 212.768 509.83 213.962 508.472 215.555C507.161 217.1 506.13 219.044 505.381 221.386C504.632 223.728 504.257 226.421 504.257 229.465C504.257 232.416 504.608 235.062 505.311 237.404C506.06 239.699 507.067 241.666 508.332 243.305C509.643 244.897 511.212 246.139 513.039 247.028C514.865 247.872 516.856 248.293 519.01 248.293C520.556 248.293 522.148 248.106 523.788 247.731C525.427 247.356 526.902 246.701 528.214 245.764C529.572 244.827 530.672 243.586 531.515 242.04C532.405 240.448 532.85 238.434 532.85 235.999V234.453H519.151V228.763H539.103V253H535.309L533.553 247.099C532.054 249.487 529.993 251.22 527.37 252.297C524.795 253.328 521.914 253.843 518.729 253.843C515.357 253.843 512.36 253.258 509.737 252.087C507.114 250.869 504.889 249.183 503.063 247.028C501.236 244.874 499.854 242.298 498.918 239.301C497.981 236.303 497.513 233.025 497.513 229.465C497.513 225.812 498.028 222.51 499.058 219.559C500.089 216.562 501.541 214.009 503.414 211.902C505.334 209.747 507.629 208.108 510.299 206.984C513.015 205.813 516.036 205.228 519.362 205.228Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3.3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M562.214 206H569.59L587.154 253H580.128L576.545 242.743H555.188L551.605 253H544.58L562.214 206ZM557.226 237.052H574.508L565.867 212.674L557.226 237.052Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3.3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M593.194 253V206.071H604.153L616.658 244.429L629.164 206.071H640.123V253H633.519V212.955L619.96 253H613.427L599.798 212.955V253H593.194Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3.3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M650.824 253V206.071H682.649V211.761H657.427V226.023H676.045V231.713H657.427V247.309H682.649V253H650.824Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 3.3 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M0.702515 206.071H7.93864L17.0716 244.851L25.6426 206.071H33.3705L41.9414 244.851L51.0744 206.071H58.3105L46.5781 253H38.5692L29.5065 214.22L20.4438 253H12.5051L0.702515 206.071Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.7 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M64.3413 253V206.071H96.1662V211.761H70.9452V226.023H89.5624V231.713H70.9452V247.309H96.1662V253H64.3413Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.7 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
      <motion.path
        d="M104.202 206.071H123.1C125.629 206.071 127.807 206.398 129.634 207.054C131.507 207.71 133.029 208.576 134.2 209.654C135.371 210.731 136.238 211.972 136.8 213.377C137.362 214.782 137.643 216.234 137.643 217.733C137.643 219.606 137.221 221.456 136.378 223.283C135.535 225.109 134.317 226.702 132.725 228.06C135.067 229.278 136.8 230.94 137.924 233.048C139.095 235.109 139.68 237.263 139.68 239.511C139.68 241.197 139.352 242.86 138.697 244.499C138.041 246.092 137.057 247.52 135.746 248.785C134.481 250.049 132.889 251.08 130.969 251.876C129.048 252.625 126.8 253 124.224 253H104.202V206.071ZM110.806 231.362V247.45H124.927C126.238 247.45 127.386 247.216 128.369 246.747C129.353 246.279 130.172 245.67 130.828 244.921C131.531 244.125 132.046 243.258 132.374 242.321C132.702 241.338 132.866 240.331 132.866 239.301C132.866 238.317 132.702 237.357 132.374 236.42C132.046 235.437 131.531 234.57 130.828 233.821C130.172 233.071 129.353 232.486 128.369 232.064C127.386 231.596 126.215 231.362 124.857 231.362H110.806ZM110.806 211.621V226.163H123.803C125.021 226.163 126.074 225.952 126.964 225.531C127.854 225.109 128.58 224.571 129.142 223.915C129.751 223.259 130.196 222.51 130.477 221.667C130.805 220.777 130.969 219.887 130.969 218.997C130.969 218.061 130.805 217.171 130.477 216.328C130.196 215.438 129.751 214.642 129.142 213.939C128.533 213.236 127.784 212.674 126.894 212.253C126.004 211.831 124.974 211.621 123.803 211.621H110.806Z"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut", delay: 2.7 },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
);

Title.Path = () => <SvgTitle />

export default Title;