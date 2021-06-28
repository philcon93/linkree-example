import { Box } from '@chakra-ui/react';

type Props = {
    title: string,
    subtitle?: string,
    url?: number,
    image?: string,
    rightAlignContent?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg'
}

export const ListItem: React.FC<Props> = (props: Props) => {

  return (
    <Box>List Item</Box>
  );
};

ListItem.defaultProps = {
    size: 'sm'
}