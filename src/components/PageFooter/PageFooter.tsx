import { Image, Link } from '@chakra-ui/react';

export const PageFooter: React.FC = () => (
    <Link
      display={'flex'}
      justifyContent={'center'}
      marginTop={4}
      py={10}
      href="https://linktr.ee/"
      isExternal>
        <Image src="./assets/logo.svg" alt="Linktree logo"  />
    </Link>
);