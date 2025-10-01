import { Badge } from "../../components/badge/Badge"
import { Button } from "../../components/button/Button"

export const TestComponent = () => {
  return (
    <>
      {/* For Testing */}
      <div className="flex">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline" size="lg">Outline</Button>
        <Button variant="destructive" size="sm">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div>
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </>
  )
}