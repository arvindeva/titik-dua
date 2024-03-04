interface LogoMobileProps {
  color: string;
}

export default function LogoMobile({ color }: LogoMobileProps) {
  return (
    <svg
      width="30"
      height="27"
      viewBox="0 0 30 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="23.625"
        cy="5.74997"
        rx="5.75003"
        ry="5.75003"
        transform="rotate(-180 23.625 5.74997)"
        fill={color}
      />
      <ellipse
        cx="23.625"
        cy="21.25"
        rx="5.75003"
        ry="5.75003"
        transform="rotate(-180 23.625 21.25)"
        fill={color}
      />
      <path
        d="M9.11931 11.5298V19.0217C9.11931 21.0001 9.96914 21.9893 11.6688 21.9893H13.8751V27.0001H10.4921C8.62902 27.0001 7.0928 26.4326 5.88343 25.2974C4.67405 24.1299 4.06937 22.6704 4.06937 20.919V11.5298H0V6.51895C3.62811 6.51895 5.78537 4.34597 6.47177 0H11.5707C11.1458 2.8865 10.1979 5.05948 8.72708 6.51895H13.8751V11.5298H9.11931Z"
        fill={color}
      />
    </svg>
  );
}
