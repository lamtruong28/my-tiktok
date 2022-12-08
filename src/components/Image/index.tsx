import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

type ImagePropsType = {
    className?: string;
    src?: string;
    alt?: string;
    fallback?: string;
};

const cx = classNames.bind(styles);

const Image = forwardRef(
    (
        { className, src, alt, fallback: customFallback = images.noImage, ...props }: ImagePropsType,
        ref: React.LegacyRef<HTMLImageElement> | undefined,
    ) => {
        const [fallback, setFallback] = useState('');
        const handleError = () => {
            setFallback(customFallback);
        };
        return (
            <img
                className={cx('wrapper', className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
