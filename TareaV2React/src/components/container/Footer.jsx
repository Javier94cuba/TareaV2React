import React from 'react'
import Button from '../atomic/Button'
import github from "/src/assets/images/github.png"
function Footer() {
  return (
    <footer className="mt-20 mb-10 text-blue-500 flex items-center justify-center">
        <a target="_blank" href="https://github.com/Javier94cuba/TareaV2React/tree/main/TareaV2React">
        <Button  text={"Repositorio Github"} img_alt={github}/>
        </a>
      </footer>
  )
}

export default Footer