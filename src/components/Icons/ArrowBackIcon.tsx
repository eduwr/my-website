interface Props {
  size?: number;
}

export const ArrowBackIcon = ({size = 48}: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height={size} width={size} fill="#fff">
      <path
        d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"
      />
    </svg>
  )
}