import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {

  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((props,index) => (
        <NutritionalLabelFact key = {index} id = {props.id} label = {props.label} attribute = {props.attribute} item = {props.item} />
      ))}</ul>
    </div>
  )
}


export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item}</span>
    </li>
  )
}


export default NutritionalLabel
