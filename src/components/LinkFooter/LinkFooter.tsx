import { Flex, Image } from '@chakra-ui/react';

type LinkFooterProps = {
    image?: string
}
  
export const LinkFooter: React.FC<LinkFooterProps> = ({ image = 'by-songkick-wordmark'} : LinkFooterProps) => (
<Flex justifyContent={'center'} py={4}>
    <Image src={`./assets/icons/${image}.svg`} />
</Flex>
);