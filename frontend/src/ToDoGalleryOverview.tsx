import {ToDo} from "./ToDo";
import ToDoGallery from "./ToDoGallery";
import './ToDoGalleryOverwie.css';


type BoardOverviewProps = {
    todos: ToDo[],
    advance: (todo: ToDo) => void,
    deleteTodo: (id: string) => void
}

export default function BoardOverview(props: BoardOverviewProps) {

    const openTodos: ToDo[] = props.todos.filter((currentTodo) => currentTodo.status === "OPEN")
    const inProgressTodos: ToDo[] = props.todos.filter((currentTodo) => currentTodo.status === "IN_PROGRESS")
    const doneTodos: ToDo[] = props.todos.filter((currentTodo) => currentTodo.status === "DONE")

    return (
        <div className="layout">
            <h1 className="ueberschrift1">OPEN
                <ToDoGallery title={"Open"} toDoList={openTodos} advance={props.advance} deleteTodo={props.deleteTodo}/>
            </h1>
            <h1 className="ueberschrift2">DOING
                <ToDoGallery title={"In Progress"} toDoList={inProgressTodos} advance={props.advance}
                             deleteTodo={props.deleteTodo}/>
            </h1>
            <h1 className="ueberschrift3">DONE
                <ToDoGallery title={"Done"} toDoList={doneTodos} advance={props.advance} deleteTodo={props.deleteTodo}/>
            </h1>
            </div>
)
}