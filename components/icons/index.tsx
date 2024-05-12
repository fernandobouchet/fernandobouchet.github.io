interface Props {
  className?: string;
}

const IconDarkMode = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
  </svg>
);

const IconLightMode = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
  </svg>
);

const IconMail = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
  </svg>
);

const IconGithub = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
  </svg>
);

const IconLinkedin = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const IconArrowRight = ({ className }: Props) => (
  <svg
    viewBox="0 0 15 15"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const IconExternLink = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    className={className}
  >
    <path d="M206.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85H480v106H206.78v546.44h546.44V-480h106v273.22q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78ZM405.52-332 332-405.52l347.69-347.7H560v-106h299.22V-560h-106v-119.69L405.52-332Z" />
  </svg>
);

const IconPrev = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 532 532">
    <path
      fill="currentColor"
      d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
    />
  </svg>
);

const IconNext = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 532 532">
    <path
      fill="currentColor"
      d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
    />
  </svg>
);

const IconReact = ({ className }: Props) => (
  <svg
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z" />
  </svg>
);

const IconExpress = ({ className }: Props) => (
  <svg
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45-7.16 9.66-14.31 18.86-21.02 28.43-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13-25.06-32.63c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19 8.36 10.99 16.62 22.09 25.13 33.43z" />
    <path d="m1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06 9.9 7.79 12.36 18.77 11.87 31.15h-55.8c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89-5.32-5.6-7.58-12.57-8.58-20.1-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
  </svg>
);

const IconNextjs = ({ className }: Props) => (
  <svg
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z" />
  </svg>
);

const IconCss = ({ className }: Props) => (
  <svg
    viewBox="0 0 384 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m0 32 34.9 395.8 157.1 52.2 157.1-52.2 34.9-395.8zm313.1 80-4.8 47.3-115.3 49.3-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3 112.1-46.7 6.5-2.7h-122.9l-5.8-47.3z" />
  </svg>
);

const IconHtml = ({ className }: Props) => (
  <svg
    viewBox="0 0 384 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m0 32 34.9 395.8 156.6 52.2 157.6-52.2 34.9-395.8zm308.2 127.9h-183.8l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7l3.5 38.1 53.5 14.5 53.7-14.5 6-62.2h-166.9l-12.8-145.6h241.1z" />
  </svg>
);

const IconTs = ({ className }: Props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m0 12v12h24v-24h-24zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925a1.58 1.58 0 0 1 .22-.141c.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1 -.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002.008.983h-3.125v8.876h-2.21v-8.876h-3.122v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
  </svg>
);

const IconJs = ({ className }: Props) => (
  <svg
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m0 32v448h448v-448zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5v-143.1h42.1zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7l-32.8 21c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
  </svg>
);

const IconNode = ({ className }: Props) => (
  <svg
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      clipRule="evenodd"
      d="m14 4.21281-6.5-3.791667-6.5 3.791667v6.57439l1.00634.587 2.0563-.832c.56657-.2292.9374-.7793.9374-1.39049v-5.15171h1v5.15171c0 1.01869-.61804 1.93539-1.56232 2.31749l-1.33946.542 4.40174 2.5676 6.5-3.7916zm-7 1.78719c0-1.10457.89543-2 2-2h1.1667c1.0125 0 1.8333.82081 1.8333 1.83333v.16667h-1v-.16667c0-.46023-.3731-.83333-.8333-.83333h-1.1667c-.55228 0-1 .44772-1 1s.44772 1 1 1h1c1.1046 0 2 .89543 2 2 0 1.1046-.8954 2-2 2h-1c-1.10457 0-2-.8954-2-2h1c0 .55228.44772 1 1 1h1c.5523 0 1-.44772 1-1s-.4477-1-1-1h-1c-1.10457 0-2-.89543-2-2z"
      fillRule="evenodd"
    />
  </svg>
);

const IconMongodb = ({ className }: Props) => (
  <svg
    viewBox="0 0 1024 1176.463"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M506.282 741.934s0-331.545 10.996-331.505c8.518 0 19.595 427.676 19.595 427.676-15.236-1.8-30.59-70.38-30.59-96.172zm213.376-327.706C690.254 285.704 625.82 175.22 537.01 89.928l-.217-.207c-10.823-16.51-20.696-35.47-28.63-55.412l-.762-2.17c.027.65.04 1.414.04 2.182 0 18.068-8.1 34.244-20.87 45.094l-.084.07c-114.356 97.092-187.13 240.154-189.54 400.272l-.005.413c-.028 1.977-.045 4.31-.045 6.65 0 158.628 76.32 299.43 194.246 387.69l1.264.905 2.8 2q7.72 57.088 13.195 114.447h19.234c5.32-47.713 12.492-89.487 21.87-130.42l-1.476 7.656c12.662-8.813 23.758-17.916 34.092-27.81l-.102.098c89.635-83.103 145.552-201.488 145.552-332.933 0-1.944-.012-3.886-.037-5.824l.003.294c-.093-31.405-2.956-62.077-8.355-91.866l.478 3.172z" />
  </svg>
);

const IconPostgresql = ({ className }: Props) => (
  <svg
    height="32"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="m22.839 0c-1.245.011-2.479.188-3.677.536l-.083.027c-.751-.131-1.516-.203-2.276-.219-1.573-.027-2.923.353-4.011.989-1.073-.369-3.297-1.016-5.641-.885-1.629.088-3.411.583-4.735 1.979-1.312 1.391-2.009 3.547-1.864 6.485.041.807.271 2.124.656 3.837.38 1.709.917 3.709 1.589 5.537.672 1.823 1.405 3.463 2.552 4.577.572.557 1.364 1.032 2.296.991.652-.027 1.24-.313 1.751-.735.249.328.516.468.755.599.308.167.599.281.907.355.552.14 1.495.323 2.599.135.375-.063.771-.187 1.167-.359.016.437.032.869.047 1.307.057 1.38.095 2.656.505 3.776.068.183.251 1.12.969 1.953.724.833 2.129 1.349 3.739 1.005 1.131-.24 2.573-.677 3.532-2.041.948-1.344 1.375-3.276 1.459-6.412.02-.172.047-.312.072-.448l.224.021h.027c1.208.052 2.521-.12 3.62-.631.968-.448 1.703-.901 2.239-1.708.131-.199.281-.443.319-.86.041-.411-.199-1.063-.595-1.364-.791-.604-1.291-.375-1.828-.26-.525.115-1.063.176-1.599.192 1.541-2.593 2.645-5.353 3.276-7.792.375-1.443.584-2.771.599-3.932.021-1.161-.077-2.187-.771-3.077-2.177-2.776-5.235-3.548-7.599-3.573-.073 0-.145 0-.219 0zm-.063.855c2.235-.021 5.093.604 7.145 3.228.464.589.6 1.448.584 2.511s-.213 2.328-.573 3.719c-.692 2.699-2.011 5.833-3.859 8.652.063.047.135.088.208.115.385.161 1.265.296 3.025-.063.443-.095.767-.156 1.105.099.167.14.255.349.244.568-.02.161-.077.317-.177.448-.339.509-1.009.995-1.869 1.396-.76.353-1.855.536-2.817.547-.489.005-.937-.032-1.319-.152l-.02-.004c-.147 1.411-.484 4.203-.704 5.473-.176 1.025-.484 1.844-1.072 2.453-.589.615-1.417.979-2.537 1.219-1.385.297-2.391-.021-3.041-.568s-.948-1.276-1.125-1.719c-.124-.307-.187-.703-.249-1.235-.063-.531-.104-1.177-.136-1.911-.041-1.12-.057-2.24-.041-3.365-.577.532-1.296.88-2.068 1.016-.921.156-1.739 0-2.228-.12-.24-.063-.475-.151-.693-.271-.229-.12-.443-.255-.588-.527-.084-.156-.109-.337-.073-.509.041-.177.145-.328.287-.443.265-.215.615-.333 1.14-.443.959-.199 1.297-.333 1.5-.496.172-.135.371-.416.713-.828 0-.015 0-.036-.005-.052-.619-.02-1.224-.181-1.771-.479-.197.208-1.224 1.292-2.468 2.792-.521.624-1.099.984-1.713 1.011-.609.025-1.163-.281-1.631-.735-.937-.912-1.688-2.48-2.339-4.251s-1.177-3.744-1.557-5.421c-.375-1.683-.599-3.037-.631-3.688-.14-2.776.511-4.645 1.625-5.828s2.641-1.625 4.131-1.713c2.672-.151 5.213.781 5.724.979.989-.672 2.265-1.088 3.859-1.063.756.011 1.505.109 2.24.292l.027-.016c.323-.109.651-.208.984-.28.907-.215 1.833-.324 2.76-.339zm.203.89h-.197c-.76.009-1.527.099-2.271.26 1.661.735 2.916 1.864 3.801 3 .615.781 1.12 1.64 1.505 2.557.152.355.251.651.303.88.031.115.047.213.057.312 0 .052.005.105-.021.193 0 .005-.005.016-.005.021.043 1.167-.249 1.957-.287 3.072-.025.808.183 1.756.235 2.792.047.973-.072 2.041-.703 3.093.052.063.099.125.151.193 1.672-2.636 2.88-5.547 3.521-8.032.344-1.339.525-2.552.541-3.509.016-.959-.161-1.657-.391-1.948-1.792-2.287-4.213-2.871-6.24-2.885zm-6.391.343c-1.572.005-2.703.48-3.561 1.193-.887.74-1.48 1.745-1.865 2.781-.464 1.224-.625 2.411-.688 3.219l.021-.011c.475-.265 1.099-.536 1.771-.687.667-.157 1.391-.204 2.041.052.657.249 1.193.848 1.391 1.749.939 4.344-.291 5.959-.744 7.177-.172.443-.323.891-.443 1.349.057-.011.115-.027.172-.032.323-.025.572.079.719.141.459.192.771.588.943 1.041.041.12.072.244.093.38.016.052.027.109.027.167-.052 1.661-.048 3.323.015 4.984.032.719.079 1.349.136 1.849.057.495.135.875.188 1.005.171.427.421.984.875 1.364.448.381 1.093.631 2.276.381 1.025-.224 1.656-.527 2.077-.964.423-.443.672-1.052.833-1.984.245-1.401.729-5.464.787-6.224-.025-.579.057-1.021.245-1.36.187-.344.479-.557.735-.672.124-.057.244-.093.343-.125-.104-.145-.213-.291-.323-.432-.364-.443-.667-.937-.891-1.463-.104-.22-.219-.439-.344-.647-.176-.317-.4-.719-.635-1.172-.469-.896-.979-1.989-1.245-3.052-.265-1.063-.301-2.161.376-2.932.599-.688 1.656-.973 3.233-.812-.047-.141-.072-.261-.151-.443-.359-.844-.828-1.636-1.391-2.355-1.339-1.713-3.511-3.412-6.859-3.469zm-8.853.068c-.167 0-.339.005-.505.016-1.349.079-2.62.468-3.532 1.432-.911.969-1.509 2.547-1.38 5.167.027.5.24 1.885.609 3.536.371 1.652.896 3.595 1.527 5.313.629 1.713 1.391 3.208 2.12 3.916.364.349.681.495.968.485.287-.016.636-.183 1.063-.693.776-.937 1.579-1.844 2.412-2.729-1.199-1.047-1.787-2.629-1.552-4.203.135-.984.156-1.907.135-2.636-.015-.708-.063-1.176-.063-1.473 0-.011 0-.016 0-.027v-.005l-.005-.009c0-1.537.272-3.057.792-4.5.375-.996.928-2 1.76-2.819-.817-.271-2.271-.676-3.843-.755-.167-.011-.339-.016-.505-.016zm16.53 7.041c-.905.016-1.411.251-1.681.552-.376.433-.412 1.193-.177 2.131.233.937.719 1.984 1.172 2.855.224.437.443.828.619 1.145.183.323.313.547.391.745.073.177.157.333.24.479.349-.74.412-1.464.375-2.224-.047-.937-.265-1.896-.229-2.864.037-1.136.261-1.876.277-2.751-.324-.041-.657-.068-.985-.068zm-10.978.158c-.276 0-.552.036-.823.099-.537.131-1.052.328-1.537.599-.161.088-.317.188-.463.303l-.032.025c.011.199.047.667.063 1.365.016.76 0 1.728-.145 2.776-.323 2.281 1.333 4.167 3.276 4.172.115-.469.301-.944.489-1.443.541-1.459 1.604-2.521.708-6.677-.145-.677-.437-.953-.839-1.109-.224-.079-.457-.115-.697-.109zm10.557.27h.068c.083.005.167.011.239.031.068.016.131.037.183.073.052.031.088.083.099.145v.011c0 .063-.016.125-.047.183-.041.072-.088.14-.145.197-.136.151-.319.251-.516.281-.193.027-.385-.025-.547-.135-.063-.048-.125-.1-.172-.157-.047-.047-.073-.109-.084-.172-.004-.061.011-.124.052-.171.048-.048.1-.089.157-.12.129-.073.301-.125.5-.152.072-.009.145-.015.213-.02zm-10.428.224c.068 0 .147.005.22.015.208.032.385.084.525.167.068.032.131.084.177.141.052.063.077.14.073.224-.016.077-.048.151-.1.208-.057.068-.119.125-.192.172-.172.125-.385.177-.599.151-.215-.036-.412-.14-.557-.301-.063-.068-.115-.141-.157-.219-.047-.073-.067-.156-.057-.24.021-.14.141-.219.256-.26.131-.043.271-.057.411-.052zm12.079 9.791h-.005c-.192.073-.353.1-.489.163-.14.052-.251.156-.317.285-.089.152-.156.423-.136.885.057.043.125.073.199.095.224.068.609.115 1.036.109.849-.011 1.896-.208 2.453-.469.453-.208.88-.489 1.255-.817-1.859.38-2.905.281-3.552.016-.156-.068-.307-.157-.443-.267zm-10.708.125h-.027c-.072.005-.172.032-.375.251-.464.52-.625.848-1.005 1.151-.385.307-.88.469-1.875.672-.312.063-.495.135-.615.192.036.032.036.043.093.068.147.084.333.152.485.193.427.104 1.124.229 1.859.104.729-.125 1.489-.475 2.141-1.385.115-.156.124-.391.031-.641-.093-.244-.297-.463-.437-.52-.089-.043-.183-.068-.276-.084z" />
  </svg>
);

const IconMysql = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    role="img"
    width="1.01em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1025 1024"
    style={{ transform: "rotate(360deg)" }}
    className={className}
  >
    <path d="M256.06 224q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5zm768 800q-5-2-14.5-5.5t-36-15.5t-51.5-25.5t-55.5-36t-53.5-47.5q-20-14-59-56q21-14 64.5-23.5t76.5-12.5l33-2q0-16-28.5-33.5t-66.5-32t-82.5-40.5t-69.5-55q-19-22-35-48.5t-37-69t-24-48.5q-20-31-57.5-84t-47.5-69q-31-48-108.5-120t-115.5-72q-25 0-46 10q-102-74-114-74q-13 0-22.5 9.5T64.06 96q0 8 31 56t66 96q2 17 5 34t5.5 29t9 28.5t9.5 24t12.5 24.5t11.5 20.5t13 21.5t12 19q-9-1-15-1q-14 0-23 44.5t-9 115.5q0 16 26 62q31 54 37 18q1-6 1-16q0-82 50-94q59 117 101 191t83 125q-83-64-177-211q-9 34-24.5 59.5t-32.5 25.5q-30 0-61-35t-49-79.5t-18-77.5q0-31 8-74.5t21-74.5q-24-34-37.5-67.5t-19.5-89.5q-5-9-14-26q-86-157-86-180q0-26 19-45t45-19q21 0 78 22t89 44q14-2 25-2q48 0 132.5 69t123.5 123q1 1 23 31.5t27.5 38.5t24.5 35t27 41t21.5 36t22 40t14.5 34q18 44 61 82t91 64t94 51.5t76 56.5t30 66q-14 1-36.5 3t-70 11.5t-68.5 23.5q20 25 64.5 59.5t77.5 59.5t33 35z"></path>
  </svg>
);

export {
  IconDarkMode,
  IconLightMode,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconArrowRight,
  IconExternLink,
  IconNext,
  IconPrev,
  IconReact,
  IconExpress,
  IconNextjs,
  IconCss,
  IconHtml,
  IconTs,
  IconJs,
  IconNode,
  IconMongodb,
  IconPostgresql,
  IconMysql,
};
