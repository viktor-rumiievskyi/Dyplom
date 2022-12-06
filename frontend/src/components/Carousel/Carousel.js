import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Accordion } from "react-bootstrap"

import './Carousel.css'

const PAGE_WIDTH = 450

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

      console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: '100%',
          },
        })
      })
    )
  }, [])

  return (
    <div className="main-container">
      <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
				<div className=''> 
				</div>
				<Accordion>
					<img
					width={150}
					height={150}
					className="m-3"
					src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fvse-dengy.ru%2Fwp-content%2Fuploads%2F2014%2F11%2Fzarabotok-na-napisanii-otzyivov.jpg&imgrefurl=https%3A%2F%2Fvse-dengy.ru%2Fotzovik-napisanie-otzyvov-za-dengi.html&tbnid=Aquk5v6Ubdk0AM&vet=12ahUKEwjXpMHqptv7AhWaAxAIHYE6DQ0QMyhNegQIARBg..i&docid=RU_-p_5FwsmGZM&w=600&h=600&q=%D1%84%D0%BE%D1%82%D0%BE%20%D0%B4%D0%BB%D1%8F%20%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D0%BE%D0%B2&ved=2ahUKEwjXpMHqptv7AhWaAxAIHYE6DQ0QMyhNegQIARBg'/>
				</Accordion>
      </div>
      <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
    </div>
  )
}