import React, { useState } from "react"
import { Bell, RotateCcw, Calendar, Star } from "lucide-react"

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false, starred: false },
    { id: 2, text: "Finish project report", completed: false, starred: false },
    { id: 3, text: "Call the bank", completed: false, starred: false },
    { id: 4, text: "Schedule dentist appointment", completed: false, starred: false },
    { id: 5, text: "Plan weekend trip", completed: false, starred: false },
    { id: 6, text: "Read a book", completed: true, starred: false },
    { id: 7, text: "Clean the house", completed: true, starred: false },
    { id: 8, text: "Prepare presentation", completed: true, starred: false },
    { id: 9, text: "Update blog", completed: true, starred: false },
  ])
  const [newTask, setNewTask] = useState("")

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTask, completed: false, starred: false }])
      setNewTask("")
    }
  }

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const toggleStar = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, starred: !todo.starred } : todo)))
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#Ffffff",
        color: "#1c1c1c",
        padding: "1rem",
        maxWidth: "32rem",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>To Do</h1>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.125rem", marginBottom: "1rem" }}>Add A Task</h2>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Bell size={20} color="#9ca3af" />
          <RotateCcw size={20} color="#9ca3af" />
          <Calendar size={20} color="#9ca3af" />
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            style={{
              flex: 1,
              padding: "0.5rem",
              backgroundColor: "#Ffffff",
              border: "1px solid #3f3f46",
              borderRadius: "0.25rem",
              color: "white",
            }}
          />
          <button
            onClick={addTodo}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#22c55e",
              color: "#1c1c1c",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
          >
            ADD TASK
          </button>
        </div>
      </div>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                style={{ width: "1.25rem", height: "1.25rem" }}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#6b7280" : "#1c1c1c",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => toggleStar(todo.id)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <Star size={20} color={todo.starred ? "#fbbf24" : "#9ca3af"} fill={todo.starred ? "#fbbf24" : "none"} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
