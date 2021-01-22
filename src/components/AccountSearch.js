import { Input } from "antd"
import { fetchSummoner } from "../api/riot"

export default function AccountSearch() {
  const handleAccountSearch = (e) => {
    fetchSummoner(e.target.value, "euw").then((val) => console.log(val))
  }
  return (
    <div>
      <Input
        placeholder="Username"
        value="ƒ ƒ"
        onPressEnter={handleAccountSearch}
      />
    </div>
  )
}
