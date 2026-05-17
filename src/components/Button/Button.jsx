import './Button.scss'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Button({
  content,
  icon,
  variant = 'primary',
  href,
  target,
  rel,
  download,
  className,
  onClick
}) {
  const Element = href ? 'a' : 'button'
  return (
    <Element
      className={`button ${variant} ${className || ''}`}
      href={href}
      target={target}
      rel={rel}
      download={href ? download : undefined}
      onClick={onClick}
      type={href ? undefined : 'button'}
    >
      {icon && <Icon icon={icon} width="18" height="18" />}
      <span className='content'>{content}</span>
    </Element>
  )
}
