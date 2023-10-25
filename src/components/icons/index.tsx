interface Props {
  className?: string;
}

export const DarkMode = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className={className}
  >
    <path d="M481.154-140.001q-141.666 0-240.832-99.167Q141.155-338.334 141.155-480q0-135.768 92.115-232.883 92.114-97.115 225.575-105.192 8.615 0 16.922.615t16.307 1.846q-30.615 28.615-48.768 69.153-18.154 40.539-18.154 86.461 0 98.334 68.834 167.168 68.834 68.833 167.168 68.833 46.538 0 86.768-18.153 40.23-18.153 68.461-48.768 1.231 8 1.846 16.307.616 8.307.616 16.922-7.693 133.461-104.808 225.575-97.115 92.115-232.883 92.115Z" />
  </svg>
);

export const LightMode = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    className={className}
  >
    <path d="M480-300.001q-74.922 0-127.461-52.538Q300.001-405.078 300.001-480t52.538-127.461Q405.078-659.999 480-659.999t127.461 52.538Q659.999-554.922 659.999-480t-52.538 127.461Q554.922-300.001 480-300.001Zm-400-150q-12.75 0-21.374-8.628Q50-467.258 50-480.013q0-12.756 8.625-21.371 8.624-8.615 21.374-8.615h90.001q12.749 0 21.374 8.628Q200-492.742 200-479.987q0 12.756-8.625 21.371-8.625 8.615-21.374 8.615H80Zm709.999 0q-12.749 0-21.374-8.628Q760-467.258 760-480.013q0-12.756 8.625-21.371 8.625-8.615 21.374-8.615H880q12.75 0 21.375 8.628 8.624 8.629 8.624 21.384 0 12.756-8.624 21.371-8.625 8.615-21.375 8.615h-90.001ZM479.987-760q-12.756 0-21.371-8.625-8.615-8.625-8.615-21.374V-880q0-12.75 8.628-21.375 8.629-8.624 21.384-8.624 12.756 0 21.371 8.624 8.615 8.625 8.615 21.375v90.001q0 12.749-8.628 21.374Q492.742-760 479.987-760Zm0 710q-12.756 0-21.371-8.626-8.615-8.624-8.615-21.374v-90.001q0-12.749 8.628-21.374Q467.258-200 480.013-200q12.756 0 21.371 8.625 8.615 8.625 8.615 21.374V-80q0 12.75-8.628 21.374Q492.742-50 479.987-50ZM240.232-678.386l-50.308-48.923q-8.923-8.308-8.616-20.884.308-12.577 8.733-21.884 9.19-9.308 21.574-9.308 12.385 0 21.077 9.308L282-720.153q8.692 9.308 8.692 21.077 0 11.769-8.5 21.076-8.499 9.307-20.576 8.807t-21.384-9.192Zm487.076 488.461L678-239.847q-8.692-9.308-8.692-21.384 0-12.077 8.692-20.769 8.115-9.307 20.288-8.807t21.48 9.192l50.308 48.923q8.923 8.308 8.616 20.884-.308 12.577-8.733 21.884-9.19 9.308-21.574 9.308-12.385 0-21.077-9.308ZM678-677.808q-9.307-8.499-8.807-20.576t9.192-21.384l48.923-50.308q8.308-8.923 20.884-8.616 12.577.308 21.884 8.733 9.308 9.19 9.308 21.574 0 12.385-9.308 21.077L720.153-678q-9.308 8.692-21.077 8.692-11.769 0-21.076-8.5ZM189.924-189.84q-9.308-9.391-9.308-21.775 0-12.385 9.308-21.077L239.847-282q9.308-8.692 21.384-8.692 12.077 0 20.769 8.692 8.923 8.115 8.423 20.288t-8.808 21.48l-48.923 50.308q-8.692 9.308-21.077 9-12.384-.307-21.691-8.916Z" />
  </svg>
);

export const Telegram = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
  </svg>
);

export const Linkedin = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

export const Twitter = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
  </svg>
);

export const Email = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
  </svg>
);
export const Github = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);