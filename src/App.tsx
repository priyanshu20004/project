import React from 'react';
import { ListTodo } from 'lucide-react';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <ListTodo size={28} className="text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Todo List</h1>
          </div>

          <TodoInput onAdd={addTodo} />

          <div className="mt-8 space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                No todos yet. Add one above!
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>

          {todos.length > 0 && (
            <div className="mt-6 text-sm text-gray-500">
              {todos.filter((t) => t.completed).length} of {todos.length} tasks
              completed
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;