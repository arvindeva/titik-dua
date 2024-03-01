import { Button } from './button';

export default function LogoDesktop() {
  return (
    <Button size="icon" variant="icon">
      <svg
        width="40"
        height="16"
        viewBox="0 0 40 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="4" fill="white" />
        <rect y="12" width="40" height="4" fill="white" />
      </svg>
    </Button>
  );
}
