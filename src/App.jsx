import { useEffect, useRef, useState } from 'react'
import './App.css'

const samplePerson = {
  name: 'Sasha Super !',
  role: 'React learner'
  // my FIRST comment 
  // another comment
}

const plainJavaScriptRowCode = `const row = document.createElement('div')
row.className = 'example-row'

const name = document.createElement('strong')
name.textContent = samplePerson.name

const role = document.createElement('span')
role.textContent = samplePerson.role

const button = document.createElement('button')
button.textContent = 'Say hi'

row.append(name, role, button)
plainJsRowRef.current.replaceChildren(row)`

const reactRowCode = `<div className="example-row">
  <strong>{samplePerson.name}</strong>
  <span>{samplePerson.role}</span>
  <button>Say hi</button>
</div>`

function Greeting({ name }) {
  return <h2>Hello, {name}</h2>
}

function Counter() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="card">
      <h3>Counter</h3>
      <p>
        Current value: <strong>{count}</strong>
      </p>
      <div className="button-row">
        <button onClick={addCount}>+2</button>
        <button onClick={() => setCount((count) => count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  )
}

function RowComparison() {
  const plainJsRowRef = useRef(null)

  useEffect(() => {
    const row = document.createElement('div')
    row.className = 'example-row'

    const name = document.createElement('strong')
    name.textContent = samplePerson.name

    const role = document.createElement('span')
    role.textContent = samplePerson.role

    const button = document.createElement('button')
    button.textContent = 'Say hi'

    row.append(name, role, button)
    plainJsRowRef.current.replaceChildren(row)

    return () => {
      plainJsRowRef.current.replaceChildren()
    }
  }, [])

  return (
    <div className="card">
      <h3>Same row: JavaScript and React</h3>
      <div className="comparison-grid">
        <div>
          <h4>Plain JavaScript</h4>
          <div ref={plainJsRowRef} />
          <pre className="code-example">
            <code>{plainJavaScriptRowCode}</code>
          </pre>
        </div>

        <div>
          <h4>React JSX</h4>
          <div className="example-row">
            <strong>{samplePerson.name}</strong>
            <span>{samplePerson.role}</span>
            <button>Say hi</button>
          </div>
          <pre className="code-example">
            <code>{reactRowCode}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

function NameInput() {
  const [name, setName] = useState('')

  return (
    <div className="card">
      <h3>Type your name</h3>
      <input
        type="text"
        value={name}
        placeholder="Your name..."
        onChange={(e) => setName(e.target.value)}
      />
      {name ? (
        <Greeting name={name} />
      ) : (
        <p>
          <em>start typing to see a greeting</em>
        </p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>React Playground</h1>
        <p>
          Edit <code>src/App.jsx</code> and the page will hot-reload.
        </p>
      </header>

      <main>
        <Counter />
        {/* <UseRefDemo /> */}
        <RowComparison />
        <NameInput />
        {/* <TodoList /> */}
      </main>

      <footer>
        <p>Try it: change text, add new components, break things on purpose 😊</p>
      </footer>
    </div>
  )
}

/*
function UseRefDemo() {
  const inputRef = useRef(null)

  function focusInput() {
    inputRef.current.focus()
  }

  return (
    <div className="card">
      <h3>useRef</h3>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  )
}

function TodoList() {
  const [todos, setTodos] = useState(['Learn JSX', 'Learn props', 'Learn state'])
  const [draft, setDraft] = useState('')

  function addTodo() {
    if (!draft.trim()) return
    setTodos([...todos, draft.trim()])
    setDraft('')
  }

  function removeTodo(index) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div className="card">
      <h3>Todo list</h3>
      <div className="row">
        <input
          value={draft}
          placeholder="Add a todo..."
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button className="link" onClick={() => removeTodo(i)}>
              X
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p><em>No todos yet — add one!</em></p>}
    </div>
  )
}
*/
