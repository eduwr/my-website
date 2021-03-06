export const ProfilePicture = () => {
  return (
    <div>
      <svg
        width={"378"}
        height={"455"}
        viewBox="0 0 418 491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="svgmask">
            <path
              d="M398.282 380.314C368.992 467.508 320.76 503.13 253.587 487.18C186.414 471.23 119.631 427.633 53.2389 356.388C-13.1532 285.144 -17.4491 203.798 40.3511 112.35C98.1512 20.9024 161.419 -14.7198 230.154 5.48383C298.89 25.6874 351.417 71.4114 387.738 142.656C424.058 213.9 427.573 293.119 398.282 380.314Z"
              fill="white"
            />
          </mask>
          <filter
            id="filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="linearRGB"
          >
            <feColorMatrix
              type="saturate"
              values="-0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              result="colormatrix"
            />
          </filter>
          <radialGradient id="RadialGradient">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="blue" />
          </radialGradient>
        </defs>
        <image
          xmlns="http://www.w3.org/1999/xlink"
          href="/assets/images/profile.webp"
          mask="url(#svgmask)"
          height="491"
          filter="url(#filter)"
        />
      </svg>
    </div>
  );
};
