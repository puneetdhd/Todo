"use client"

import React, { useState } from "react"
import { Bell, RotateCcw, Calendar, Star } from "lucide-react"
import { Button } from "./components/ui/button"
import { Checkbox } from "./components/ui/checkbox"

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, starred: false },
    { id: 2, text: "Finish project report", completed: false, starred: true },
    { id: 3, text: "Call the bank", completed: false, starred: false },
    { id: 4, text: "Schedule dentist appointment", completed: false, starred: false },
    { id: 5, text: "Plan weekend trip", completed: false, starred: false },
    { id: 6, text: "Read a book", completed: true, starred: false },
    { id: 7, text: "Clean the house", completed: true, starred: false },
  ])

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const toggleStar = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, starred: !task.starred } : task)))
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl mb-4">Add A Task</h2>
          <div className="flex items-center gap-4 mb-4">
            <Bell className="w-5 h-5 text-zinc-400" />
            <RotateCcw className="w-5 h-5 text-zinc-400" />
            <Calendar className="w-5 h-5 text-zinc-400" />
            <div className="ml-auto">
              <Button className="bg-green-600 hover:bg-green-700 text-white">ADD TASK</Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <div key={task.id} className="flex items-center gap-3">
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="border-zinc-600"
                />
                <span className="flex-1">{task.text}</span>
                <Star
                  className={`w-5 h-5 cursor-pointer ${task.starred ? "fill-current text-white" : "text-zinc-400"}`}
                  onClick={() => toggleStar(task.id)}
                />
              </div>
            ))}
        </div>

        {tasks.some((task) => task.completed) && (
          <div className="mt-8">
            <h3 className="text-sm text-zinc-500 mb-4">Completed</h3>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <div key={task.id} className="flex items-center gap-3">
                    <Checkbox
                      checked={task.completed}
                      onChange={() => toggleComplete(task.id)}
                      className="border-zinc-600 bg-green-600"
                    />
                    <span className="flex-1 text-zinc-500">{task.text}</span>
                    <Star
                      className={`w-5 h-5 cursor-pointer ${task.starred ? "fill-current text-white" : "text-zinc-400"}`}
                      onClick={() => toggleStar(task.id)}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList

