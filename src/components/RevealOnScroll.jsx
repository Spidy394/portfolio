import { useEffect, useRef, useCallback } from 'react'

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null)

  const handleIntersect = useCallback(([entry]) => {
    if (entry.isIntersecting && ref.current) {
      ref.current.classList.add("visible")
    }
  }, [])

  useEffect(() => {
    const observer = new window.IntersectionObserver(handleIntersect, { 
      threshold: window.innerWidth < 640 ? 0.1 : 0.2,
      rootMargin: window.innerWidth < 640 ? "0px" : "0px 0px -50px 0px"
    })
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <div ref={ref} className='reveal'>
      {children}
    </div>
  )
}

export default RevealOnScroll
