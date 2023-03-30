import { useEffect } from "react"

function Menu() {

  useEffect(() => {
    document.title = 'Madame Pang - Menu'
  })

  return (
    <div>
      <h1>Menu </h1>
    </div>
  )
}

export default Menu
