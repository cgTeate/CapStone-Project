import React from 'react';
import { Link } from '@chakra-ui/react';

export default function DropdownLink(props) {
    let { href, children, ...rest } = props;
    return (
        <div>
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        </div>
    )
}
