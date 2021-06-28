import { Image, Link } from '@chakra-ui/react';

export const Footer: React.FC = () => (
    <Link
      display={'flex'}
      justifyContent={'center'}
      href="https://linktr.ee/"
      isExternal>
        <Image src="./assets/logo.svg" alt="Linktree logo"  />
    </Link>
);