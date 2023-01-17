import { memo } from 'react';

interface LogoProps {
    width: string;
    height: string;
    fill: string;
}

const PersonalLogo: React.FC<LogoProps> = ({ width, height, fill }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 103 57" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M103 17.1922V1.5001C97.0003 1.5001 84.9707 1.80563 84.9707 1.80563L81.8824 2.15283C72.6456 3.64715 64.7354 7.60618 57.745 13.7433C55.0644 16.0966 52.8149 18.8387 50.6874 21.6718C48.7369 24.2694 46.6632 26.7861 44.7394 29.4071C40.9538 34.5646 36.7217 39.9265 30.0482 41.0211C21.6461 42.3993 14.4045 33.9341 15.9211 25.873C16.7059 21.7017 19.8724 18.6254 23.5377 16.8607C27.3358 15.0319 31.6709 15.8229 35.2168 17.8777C36.3997 18.5633 38.729 20.531 38.729 20.531L40.8 18.1231L46.8305 11.5165L49.2461 8.9138L47.5767 7.41437C46.6013 6.49359 44.8042 4.99077 42.9024 3.96797C35.875 0.188605 27.6302 -1.24345 19.865 1.22908C15.7585 2.53665 11.6714 4.92992 8.51345 7.85341C6.95325 9.29759 5.72292 11.2666 4.5368 13.0188C-1.27821 21.6087 -1.38081 33.3555 3.52692 42.3998C6.27038 47.4557 10.7766 51.3777 15.8302 53.9594C18.8679 55.5114 22.2943 56.5077 25.7079 56.7414C29.3551 56.9913 33.0204 56.6852 36.5588 55.8231C40.3001 54.9116 43.3555 52.966 46.4081 50.7066C51.5249 46.9195 55.5411 41.8299 59.245 36.7214C60.6519 34.781 61.9295 32.7356 63.479 30.8811C65.9871 27.8796 68.8123 25.0366 71.9489 22.6775C80.8863 15.9554 92.4753 17.1922 103 17.1922ZM63.6027 55.5879H79.2949C79.2949 50.3537 78.4011 43.9664 82.8154 40.1195C83.3484 39.6549 84.0133 39.1973 84.6369 38.8791C85.4659 38.4561 86.2254 38.2094 87.1409 37.9917C89.633 37.3992 94.987 37.7256 94.987 37.7256H97.9919C97.9919 37.7256 97.991 36.5964 97.9919 36.2231V33.3852V21.8515C94.2793 21.8515 90.499 21.6612 86.807 22.0625C81.1176 22.6806 75.7963 25.0131 71.6099 28.9086C70.0826 30.3297 68.8177 31.9896 67.6648 33.7191C66.3291 35.7228 65.3652 37.9095 64.7254 40.2296C63.3348 45.2707 63.6027 50.4021 63.6027 55.5879Z"
                fill={fill}
            />
            <ellipse cx="28.3788" cy="28.362" rx="5.42547" ry="5.17507" fill={fill} />
        </svg>
    );
};

export default memo(PersonalLogo);
