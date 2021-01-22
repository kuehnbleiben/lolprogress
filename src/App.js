import "./App.css"
import { fetchSummoner } from "./api/riot"
import { Dropdown, Input } from "antd"
import AccountSearch from "./components/AccountSearch"

function App() {
  return (
    <div className="App">
      <AccountSearch />
    </div>
  )
}

export default App
