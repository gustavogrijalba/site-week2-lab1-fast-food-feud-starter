import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.instructions.start}</p>
    </aside>
  )
}

export default Instructions
