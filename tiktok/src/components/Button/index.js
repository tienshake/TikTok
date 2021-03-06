import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    children,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    className,
    ...passProps
}) => {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        small,
        large,
        rounded,
    });
    return (
        <Component className={cx(classes)} {...props}>
            {leftIcon && <span className={cx('icon')}> {leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}> {rightIcon}</span>}
        </Component>
    );
};

export default Button;
