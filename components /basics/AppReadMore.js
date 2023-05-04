import { useState } from 'react'

export default function AppReadMore({
  children,
  // length = 158,
  height = '142px',
}) {
  const text = children
  const [isReadMore, setIsReadMore] = useState(false)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <div
      className={`overflow-hidden leading-7 `}
      style={{
        height: isReadMore ? 'auto' : height,
        // minHeight: height,
      }}
    >
      {isReadMore ? (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <span dangerouslySetInnerHTML={{ __html: text?.slice(0, 172) }} />
      )}
      {text?.length > 172 ? (
        <span
          onClick={toggleReadMore}
          className="text-sm capitalize text-theme-primary-main hover:cursor-pointer"
        >
          {isReadMore ? '...show less' : '...read more'}
        </span>
      ) : null}
    </div>
  )
}
