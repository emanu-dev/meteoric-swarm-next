import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const LoadingIcon = () => {
	let interval = 0;
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		interval = window.setInterval(() => {
			window.scrollTo(0, 0);
			window.clearInterval(interval);
			setLoaded(true);
		}, 500);
	}, []);

	return (
		<LoadingIcon.Wrapper className='loading'>
			<svg width="288" height="310" viewBox="0 0 288 310" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					d="M74.1911 259.438C41.0624 237.381 38.9111 202.005 42.8456 176.288C45.7321 157.421 58.3822 141.792 74.2648 129.596L82.0174 123.643C83.3945 122.585 85.3724 123.664 85.2286 125.394L84.3433 136.051C83.6874 143.945 92.0327 149.432 99.0198 145.7L100.568 144.873C117.481 135.84 132.069 123.009 143.186 107.386L151.621 95.5319C151.966 95.048 152.3 94.8971 152.558 94.8412C152.868 94.774 153.268 94.8086 153.669 94.9991C154.07 95.1896 154.35 95.4774 154.494 95.7599C154.613 95.9952 154.708 96.3498 154.551 96.9225C151.85 106.756 164.266 113.508 171.053 105.897L199.858 73.5889L180.282 112.9C175.739 122.022 186.603 131.04 194.733 124.896C195.204 124.539 195.568 124.495 195.832 124.519C196.147 124.547 196.517 124.699 196.842 125C197.168 125.3 197.349 125.657 197.402 125.97C197.446 126.23 197.431 126.596 197.113 127.095L188.554 140.506C178.958 155.542 172.718 172.47 170.261 190.137L169.648 194.55C168.503 202.783 177.318 208.738 184.528 204.602L190.263 201.313C191.814 200.423 193.664 201.861 193.184 203.584L191.021 211.36C186.058 229.195 177.392 245.519 162.661 255.168C141.312 269.153 108.07 281.995 74.1911 259.438Z"
					stroke="url(#paint0_linear)"
					strokeWidth="5"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							opacity: 0,
							pathLength: 0,
							pathOffset: 0
						},
						visible: {
							opacity: [0, 1, 0],
							scale: [0, 1, 0.5, 1],
							pathLength: 1,
							pathOffset: 1
						}
					}}
					transition={{
						repeat: loaded ? Infinity : 0,
						repeatType: "reverse",
						duration: 2,
						ease: [.82, 0, .34, 1.08]
					}}
				/>
				<defs>
					<linearGradient id="paint0_linear" x1="69.0094" y1="260.712" x2="218.412" y2="49.79" gradientUnits="userSpaceOnUse">
						<stop stopColor="#430078" />
						<stop offset="0.572917" stopColor="#600078" />
						<stop offset="1" stopColor="#780073" />
					</linearGradient>
				</defs>
			</svg>
		</LoadingIcon.Wrapper>
	)
}

LoadingIcon.Wrapper = styled.div`
    align-items: center;
		background: #000000;
    color: ${props => props.theme.colors.textContrastShaded};
    display: flex;
    font-family: 'DejaVuSans', sans-serif;
    font-size: clamp(40px, 4rem, 70px);
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: fixed;
    transition: opacity 500ms ease-out 1s, visibility 500ms ease 1s, transform 500ms cubic-bezier(1,0,0,1) 1s;
    text-transform: uppercase;
    width: 100vw;
    z-index: 9999;

    &.--loaded {
      opacity: 0;
      visibility: hidden;
    }
`

export default LoadingIcon;