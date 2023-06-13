// IMPORT ANY NEEDED COMPONENTS HERE
import { Dataset } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import { useState } from "react"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"
// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet()


  const [activeCategory, setCategory] = useState(null)
  const[activeRestaurant, setRestaurant] = useState(null)
  const [activeItem, setItem] = useState({
    "restaurant": "",
    "item_name" : "",
    "category" : ""
  })

  let currentMenuItems = data.filter(item => {
    return (activeCategory === item.food_category) && (activeRestaurant === item.restaurant)
  })

  console.log(currentMenuItems)
  console.log(activeCategory)
  console.log(activeRestaurant)

  const selectItem = (selectedItem) => {
    setItem(selectedItem)
  }

  const selectCategory = (selectedCategory) => {
    setCategory(selectedCategory)
  }

  const selectRestaurant = (selectedRestaurant) => {
    setRestaurant(selectedRestaurant)
  }



  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category,index) => (
            <Chip key = {index} label = {category} onClick = {() => selectCategory(category)} isActive = {activeCategory === category}>{category}</Chip>
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title = {appInfo.title}/>
        <Header tagline = {appInfo.tagline}/>
        <Header description = {appInfo.description}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant,index) => (
              <Chip key = {index} label = {restaurant} onClick = {() => selectRestaurant(restaurant)} isActive = {activeRestaurant === restaurant}>{restaurant}</Chip>
            ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item,index) => (
              <Chip key = {index} label = {item.item_name} onClick={() => selectItem(item)} isActive = {item === activeItem}>{item.item_name}</Chip>
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{activeItem.item_name == '' ? <div></div> : <NutritionalLabel item = {activeItem}/>}</div>
          </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
