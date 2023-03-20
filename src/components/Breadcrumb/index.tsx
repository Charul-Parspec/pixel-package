import { default as MUIBreadcrumb, BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { BodyXS } from '../Typography';

interface OptionTypes {
    displaytext: string;
    href: string;
}

export interface BreadcrumbsProps extends Omit<MUIBreadcrumbsProps, 'classes' | 'sx'> {
    options: OptionTypes[];
}

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({ options, ...rest }) => {
    return (
        <MUIBreadcrumb separator=">" {...rest}>
            {options.map((item, index) => {
                if (index === options.length - 1) {
                    return (
<<<<<<< HEAD
                        <BodyXS color={'secondary'} key={index}>
=======
                        <BodyXS key={index} color={'secondary'}>
>>>>>>> c9d772a (created build and resolved componets errors)
                            {item.displaytext}
                        </BodyXS>
                    );
                }
                return (
                    <Link fontWeight="400" fontFamily="Inter" fontSize={'12px'} key={index} color="secondary" underline={'hover'} href={item.href}>
                        {item.displaytext}
                    </Link>
                );
            })}
        </MUIBreadcrumb>
    );
};
