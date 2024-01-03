import Component from "./index.component";
import { Menu } from "./index.props";

const Navigation = () => {
  const menus: Menu[] = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        icon: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M4 21.5V9.5L12 3.5L20 9.5V21.5H14V14.5H10V21.5H4Z" fill="#FF6666"/>
                </svg>
            );
        },
    },
    {
        id: 2,
        title: 'Agents List',
        path: '/agents',
        icon: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.72 14.8408C19.07 13.9908 19.26 13.0808 19.26 12.0808C19.26 11.3608 19.15 10.6708 18.96 10.0308C18.31 10.1808 17.63 10.2608 16.92 10.2608C15.466 10.2623 14.0329 9.91428 12.7415 9.24598C11.4502 8.57768 10.3384 7.60871 9.5 6.42076C8.6031 8.59093 6.91112 10.3366 4.77 11.3008C4.73 11.5508 4.73 11.8208 4.73 12.0808C4.73 13.0355 4.91804 13.9808 5.2834 14.8629C5.64875 15.7449 6.18425 16.5463 6.85933 17.2214C8.22272 18.5848 10.0719 19.3508 12 19.3508C13.05 19.3508 14.06 19.1208 14.97 18.7108C15.54 19.8008 15.8 20.3408 15.78 20.3408C14.14 20.8908 12.87 21.1608 12 21.1608C9.58 21.1608 7.27 20.2108 5.57 18.5008C4.536 17.4699 3.76737 16.2038 3.33 14.8108H2V10.2608H3.09C3.42024 8.65327 4.17949 7.16517 5.28719 5.95435C6.39489 4.74353 7.80971 3.85516 9.38153 3.38352C10.9534 2.91187 12.6235 2.87453 14.2149 3.27546C15.8062 3.6764 17.2593 4.50065 18.42 5.66076C19.6802 6.91601 20.5398 8.51686 20.89 10.2608H22V14.8108H21.94L18.38 18.0808L13.08 17.4808V15.8108H17.91L18.72 14.8408ZM9.27 11.8508C9.57 11.8508 9.86 11.9708 10.07 12.1908C10.281 12.4035 10.3995 12.6911 10.3995 12.9908C10.3995 13.2904 10.281 13.578 10.07 13.7908C9.86 14.0008 9.57 14.1208 9.27 14.1208C8.64 14.1208 8.13 13.6208 8.13 12.9908C8.13 12.3608 8.64 11.8508 9.27 11.8508ZM14.72 11.8508C15.35 11.8508 15.85 12.3608 15.85 12.9908C15.85 13.6208 15.35 14.1208 14.72 14.1208C14.09 14.1208 13.58 13.6208 13.58 12.9908C13.58 12.6884 13.7001 12.3984 13.9139 12.1847C14.1277 11.9709 14.4177 11.8508 14.72 11.8508Z" fill="#6B6B6B"/>
                </svg>
            );
        },
    },
    {
        id: 3,
        title: 'Merchants List',
        path: '/merchants',
        icon: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4.95161 5.3246C4.79644 5.61273 4.72015 5.96969 4.56755 6.68201L4.05491 9.07508C3.98226 9.40137 3.98169 9.73807 4.05326 10.0646C4.12482 10.3911 4.267 10.7005 4.4711 10.9739C4.6752 11.2473 4.93692 11.479 5.24024 11.6547C5.54355 11.8304 5.88209 11.9464 6.23512 11.9957C6.58814 12.045 6.94824 12.0265 7.29335 11.9414C7.63846 11.8563 7.96133 11.7063 8.24219 11.5006C8.52305 11.2949 8.756 11.0379 8.92677 10.7452C9.09754 10.4526 9.20254 10.1305 9.23533 9.79861L9.29534 9.24636C9.26286 9.59759 9.3092 9.95128 9.43141 10.2848C9.55363 10.6184 9.74902 10.9245 10.0051 11.1836C10.2612 11.4426 10.5724 11.649 10.9187 11.7894C11.2651 11.9298 11.639 12.0013 12.0166 11.9991C12.3942 11.997 12.7671 11.9214 13.1116 11.7771C13.4562 11.6327 13.7646 11.4229 14.0174 11.161C14.2701 10.8991 14.4615 10.5908 14.5794 10.2559C14.6973 9.92097 14.7391 9.56679 14.7021 9.21595L14.7647 9.79861C14.7975 10.1305 14.9025 10.4526 15.0732 10.7452C15.244 11.0379 15.4769 11.2949 15.7578 11.5006C16.0387 11.7063 16.3615 11.8563 16.7067 11.9414C17.0518 12.0265 17.4119 12.045 17.7649 11.9957C18.1179 11.9464 18.4564 11.8304 18.7598 11.6547C19.0631 11.479 19.3248 11.2473 19.5289 10.9739C19.733 10.7005 19.8752 10.3911 19.9467 10.0646C20.0183 9.73807 20.0177 9.40137 19.9451 9.07508L19.4324 6.68201C19.2799 5.96969 19.2036 5.61353 19.0484 5.3246C18.8867 5.02369 18.6591 4.75789 18.3802 4.54445C18.1014 4.331 17.7776 4.17468 17.4299 4.08564C17.0956 4 16.7064 4 15.928 4H8.07203C7.29364 4 6.90444 4 6.57011 4.08564C6.22238 4.17468 5.89859 4.331 5.61976 4.54445C5.34092 4.75789 5.11328 5.02369 4.95161 5.3246ZM17.3742 13.2041C18.044 13.2057 18.7028 13.0455 19.2867 12.7391V13.6043C19.2867 16.6225 19.2867 18.132 18.282 19.0692C17.4736 19.8247 16.2692 19.9712 14.1432 20V17.2059C14.1432 16.4576 14.1432 16.0838 13.9708 15.8053C13.858 15.6228 13.6957 15.4713 13.5002 15.3659C13.2019 15.205 12.8015 15.205 12 15.205C11.1985 15.205 10.7981 15.205 10.4998 15.3659C10.3043 15.4713 10.142 15.6228 10.0292 15.8053C9.85685 16.0838 9.85685 16.4576 9.85685 17.2059V20C7.73084 19.9712 6.52639 19.8239 5.718 19.0692C4.71329 18.132 4.71329 16.6225 4.71329 13.6043V12.7391C5.29743 13.0457 5.9566 13.2059 6.62669 13.2041C7.61739 13.2048 8.57122 12.8534 9.29449 12.2213C10.0316 12.8552 10.9978 13.2062 12 13.2041C13.0022 13.2061 13.9683 12.8552 14.7055 12.2213C15.4288 12.8534 16.3835 13.2048 17.3742 13.2041Z" fill="#6B6B6B"/>
                </svg>
            );
        },
    },
    {
        id: 4,
        title: 'Users List',
        path: '/users',
        icon: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" fill="#6B6B6B"/>
                </svg>
            );
        },
    },
    {
        id: 5,
        title: 'Transactions',
        path: '/transactions',
        icon: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                    <path d="M9.5 0L0 5V7H19V5M14 9V16H17V9M0 21H19V18H0M8 9V16H11V9M2 9V16H5V9H2Z" fill="#6B6B6B"/>
                </svg>
            );
        },
    },
    {
        id: 6,
        title: 'Settings',
        path: '/settings',
        icon: () => {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.25001 22L8.85001 18.8C8.63335 18.7167 8.42935 18.6167 8.23801 18.5C8.04668 18.3833 7.85901 18.2583 7.67501 18.125L4.70001 19.375L1.95001 14.625L4.52501 12.675C4.50835 12.5583 4.50001 12.446 4.50001 12.338V11.663C4.50001 11.5543 4.50835 11.4417 4.52501 11.325L1.95001 9.375L4.70001 4.625L7.67501 5.875C7.85835 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.25001 2H14.75L15.15 5.2C15.3667 5.28333 15.571 5.38333 15.763 5.5C15.955 5.61667 16.1423 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5543 19.5 11.663V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25001ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2373 8.84167 9.56201 9.525C8.88668 10.2083 8.54935 11.0333 8.55001 12C8.55001 12.9667 8.88768 13.7917 9.56301 14.475C10.2383 15.1583 11.0673 15.5 12.05 15.5Z" fill="#6B6B6B"/>
                </svg>
            );
        },
    },
  ];

  const props = {
    menus,
  }

  return (
    <Component />
  );
};

export default Navigation;
