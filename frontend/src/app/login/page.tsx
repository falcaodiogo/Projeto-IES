import "globals";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-full flex-1 grid-cols-2 justify-center">
      <div className="relative hidden h-full rounded-tr-2xl bg-background lg:block">
        <div className="relative max-h-full space-y-7 pt-12 text-center">
          <p className="w-full text-[6.5vw] font-extrabold">SmartHomes.</p>
          <p className="w-full text-[6.5vw] font-extrabold">SmartHomes.</p>
          <p className="w-full text-[6.5vw] font-extrabold">SmartHomes.</p>
          <p className="w-full text-[6.5vw] font-extrabold">SmartHomes.</p>
          <p className="w-full text-[6.5vw] font-extrabold">SmartHomes.</p>
        </div>

        <div className="absolute top-0 z-40 h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 549"
            className="h-full w-full fill-secondary"
          >
            <g style={{ mixBlendMode: "color" }}>
              <path d="M314.314 -120.5C258.783 10.5325 150.079 112.851 0 154.287V-120.5H314.314Z" />
              <path d="M576 367.283C377.83 234.069 217.588 191.906 0 208.444V695.5H576V367.283Z" />
            </g>
          </svg>
        </div>
      </div>

      <div className="row-auto grid content-center space-y-8 p-8">
        <div className="space-y-4">
          <p className="text-4xl font-extrabold">Hi!</p>
          <p className="text-200 text-200 text-2xl font-medium">
            Please login to get started.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center gap-2 rounded-full bg-background p-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
            >
              <path
                d="M5.72917 10.9896H7.27083C7.37708 10.9896 7.46962 10.944 7.54844 10.8529C7.62726 10.7617 7.65278 10.6615 7.625 10.5521L7.25 8.30208C7.48256 8.17789 7.66569 7.9978 7.79942 7.76181C7.93314 7.52584 8 7.26503 8 6.97938C8 6.56951 7.85269 6.21875 7.55808 5.92708C7.26346 5.63542 6.90929 5.48958 6.49558 5.48958C6.08186 5.48958 5.72917 5.63646 5.4375 5.93021C5.14583 6.22396 5 6.57708 5 6.98958C5 7.27303 5.06686 7.53183 5.20058 7.766C5.33431 8.00015 5.51744 8.17885 5.75 8.30208L5.375 10.5521C5.34722 10.6615 5.37274 10.7617 5.45156 10.8529C5.53038 10.944 5.62292 10.9896 5.72917 10.9896ZM6.5 16.4062C6.41667 16.4062 6.33333 16.4028 6.25 16.3958C6.16667 16.3889 6.09028 16.3715 6.02083 16.3438C4.20139 15.7465 2.74306 14.6424 1.64583 13.0312C0.548611 11.4201 0 9.66319 0 7.76042V4.01042C0 3.69525 0.0868056 3.4116 0.260417 3.15946C0.434028 2.90732 0.666667 2.72569 0.958333 2.61458L5.95833 0.697917C6.13889 0.628472 6.31944 0.59375 6.5 0.59375C6.68056 0.59375 6.86111 0.628472 7.04167 0.697917L12.0417 2.61458C12.3333 2.72569 12.566 2.90732 12.7396 3.15946C12.9132 3.4116 13 3.69525 13 4.01042V7.76042C13 9.66319 12.4514 11.4201 11.3542 13.0312C10.2569 14.6424 8.79861 15.7465 6.97917 16.3438C6.90972 16.3715 6.83333 16.3889 6.75 16.3958C6.66667 16.4028 6.58333 16.4062 6.5 16.4062ZM6.5 14.9271C7.94444 14.4792 9.13889 13.5833 10.0833 12.2396C11.0278 10.8958 11.5 9.40278 11.5 7.76042V4.01042L6.5 2.09375L1.5 4.01042V7.76042C1.5 9.40278 1.97222 10.8958 2.91667 12.2396C3.86111 13.5833 5.05556 14.4792 6.5 14.9271Z"
                fill="#1F1F1F"
              />
            </svg>
            <p className="text-lg font-medium">Passkey</p>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full bg-background p-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_68_1294)">
                <path
                  d="M16 8.69258C16 13.3908 12.823 16.7344 8.13115 16.7344C3.63279 16.7344 0 13.0555 0 8.5C0 3.94453 3.63279 0.265625 8.13115 0.265625C10.3213 0.265625 12.1639 1.0791 13.5836 2.42051L11.3705 4.57539C8.47541 1.74648 3.0918 3.87148 3.0918 8.5C3.0918 11.3721 5.35738 13.6996 8.13115 13.6996C11.3508 13.6996 12.5574 11.3621 12.7475 10.1502H8.13115V7.31797H15.8721C15.9475 7.73965 16 8.14473 16 8.69258Z"
                  fill="#1F1F1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_1294">
                  <rect width="16" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-lg font-medium">Google</p>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full bg-background p-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                d="M20 10.4344C20 13.2875 18.7688 15.075 16.5531 15.075C14.5969 15.075 13.5594 13.9938 11.65 10.8063L10.6687 9.1625C10.4094 8.77188 10.2156 8.40625 10.0063 8.06875C9.37813 9.125 8.53438 10.6625 8.53438 10.6625C6.44063 14.3063 5.26562 15.075 3.63125 15.075C1.35687 15.075 0 13.2844 0 10.5156C0 6.04688 2.49312 1.825 5.74687 1.825C7.31562 1.825 8.67813 2.59625 10.2719 4.62188C11.4313 3.05625 12.7125 1.825 14.3531 1.825C17.45 1.825 20 5.75313 20 10.4344ZM8.98125 6.50625C7.64062 4.56563 6.76562 3.99063 5.71875 3.99063C3.78437 3.99063 2.16313 7.30625 2.16313 10.5531C2.16313 12.0688 2.74063 12.9188 3.7125 12.9188C4.65625 12.9188 5.24375 12.325 6.9375 9.675C6.9375 9.675 7.70937 8.45313 8.98125 6.50625ZM16.6 12.9188C17.6063 12.9188 18.0656 12.0594 18.0656 10.5781C18.0656 6.69688 16.3687 3.53375 14.2156 3.53375C13.1781 3.53375 12.3062 4.34375 11.25 5.97188C11.5437 6.40313 11.8469 6.87813 12.1656 7.39063L13.3375 9.34063C15.1719 12.2813 15.6344 12.9188 16.6 12.9188Z"
                fill="#1F1F1F"
              />
            </svg>
            <p className="text-lg font-medium">Facebook</p>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-full bg-background p-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g clip-path="url(#clip0_68_1302)">
                <path
                  d="M5.35161 13.1949C5.35161 13.2613 5.27742 13.3145 5.18387 13.3145C5.07742 13.3244 5.00323 13.2713 5.00323 13.1949C5.00323 13.1285 5.07742 13.0754 5.17097 13.0754C5.26774 13.0654 5.35161 13.1186 5.35161 13.1949ZM4.34839 13.0455C4.32581 13.1119 4.39032 13.1883 4.4871 13.2082C4.57097 13.2414 4.66774 13.2082 4.6871 13.1418C4.70645 13.0754 4.64516 12.999 4.54839 12.9691C4.46452 12.9459 4.37097 12.9791 4.34839 13.0455ZM5.77419 12.9891C5.68064 13.0123 5.61613 13.0754 5.62581 13.1518C5.63548 13.2182 5.71935 13.2613 5.81613 13.2381C5.90968 13.2148 5.97419 13.1518 5.96452 13.0854C5.95484 13.0223 5.86774 12.9791 5.77419 12.9891ZM7.89677 0.265625C3.42258 0.265625 0 3.76191 0 8.36719C0 12.0494 2.25161 15.2004 5.46774 16.3094C5.88064 16.3857 6.02581 16.1234 6.02581 15.9076C6.02581 15.7018 6.01613 14.5662 6.01613 13.8689C6.01613 13.8689 3.75806 14.367 3.28387 12.8795C3.28387 12.8795 2.91613 11.9133 2.3871 11.6643C2.3871 11.6643 1.64839 11.143 2.43871 11.1529C2.43871 11.1529 3.24194 11.2193 3.68387 12.0096C4.39032 13.2912 5.57419 12.9227 6.03548 12.7035C6.10968 12.1723 6.31936 11.8037 6.55161 11.5846C4.74839 11.3787 2.92903 11.1098 2.92903 7.91562C2.92903 7.00254 3.17419 6.54434 3.69032 5.95996C3.60645 5.74414 3.33226 4.8543 3.77419 3.70547C4.44839 3.48965 6 4.60195 6 4.60195C6.64516 4.41602 7.33871 4.31973 8.02581 4.31973C8.7129 4.31973 9.40645 4.41602 10.0516 4.60195C10.0516 4.60195 11.6032 3.48633 12.2774 3.70547C12.7194 4.85762 12.4452 5.74414 12.3613 5.95996C12.8774 6.54766 13.1935 7.00586 13.1935 7.91562C13.1935 11.1197 11.2935 11.3754 9.49032 11.5846C9.7871 11.8469 10.0387 12.3449 10.0387 13.1252C10.0387 14.2441 10.029 15.6287 10.029 15.901C10.029 16.1168 10.1774 16.3791 10.5871 16.3027C13.8129 15.2004 16 12.0494 16 8.36719C16 3.76191 12.371 0.265625 7.89677 0.265625ZM3.13548 11.7174C3.09355 11.7506 3.10323 11.827 3.15806 11.89C3.20968 11.9432 3.28387 11.9664 3.32581 11.9232C3.36774 11.89 3.35806 11.8137 3.30323 11.7506C3.25161 11.6975 3.17742 11.6742 3.13548 11.7174ZM2.7871 11.4484C2.76452 11.4916 2.79677 11.5447 2.86129 11.5779C2.9129 11.6111 2.97742 11.6012 3 11.5547C3.02258 11.5115 2.99032 11.4584 2.92581 11.4252C2.86129 11.4053 2.80968 11.4152 2.7871 11.4484ZM3.83226 12.6305C3.78065 12.6736 3.8 12.7732 3.87419 12.8363C3.94839 12.9127 4.04194 12.9227 4.08387 12.8695C4.12581 12.8264 4.10645 12.7268 4.04194 12.6637C3.97097 12.5873 3.87419 12.5773 3.83226 12.6305ZM3.46452 12.1424C3.4129 12.1756 3.4129 12.2619 3.46452 12.3383C3.51613 12.4146 3.60323 12.4479 3.64516 12.4146C3.69677 12.3715 3.69677 12.2852 3.64516 12.2088C3.6 12.1324 3.51613 12.0992 3.46452 12.1424Z"
                  fill="#1F1F1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_68_1302">
                  <rect width="16" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-lg font-medium">GitHub</p>
          </button>
        </div>

        <div className="p4 space-y-4">
          <form className="row-auto grid">
            <label className="pb-1 text-lg font-medium">E-mail</label>
            <input
              className="mt-1 rounded-md bg-background px-3 py-2 sm:text-sm"
              type="email"
              name="email"
            />
            <label className="pb-2 pt-2 text-lg font-medium">Password</label>
            <input
              className="mt-1 rounded-md bg-background px-3 py-2 sm:text-sm"
              type="password"
              name="password"
            />
          </form>
          <div className="flex items-center gap-4">
            <Link href="/insight" className="rounded-lg bg-accent px-4 py-2 text-base font-bold">
              Login
            </Link>
            <Link href="/register" className="rounded-lg bg-secondary px-4 py-2 text-base font-medium">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
