import { Icon, Link, LinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';

interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' alignContent='center' {...rest}>
      <Icon as={icon} fontSize='28' />
      <Text ml='4' fontWeight='medium'>
        {children}
      </Text>
    </Link>
  );
}