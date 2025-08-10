import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { orpc } from "@/utils/orpc"

export default async function TodosPage() {
  const todos = await orpc.todo.getAll.call()

  return (
    <div className="mx-auto w-full max-w-md py-10">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Manage your tasks efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          {todos?.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded-md border p-2"
            >
              <div className="flex items-center space-x-2">
                <label
                  htmlFor={`todo-${todo.id}`}
                  className={`${todo.completed ? "text-muted-foreground line-through" : ""}`}
                >
                  {todo.text}
                </label>
              </div>
            </li>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
