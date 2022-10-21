import React from 'react';
import ToDoCard from "./ToDoCard";
import {ToDo} from "./ToDo";
import './ToDoGallery.css';

type toDoGalleryProps = {
    toDoList: ToDo[],
    deleteTodo: (id: string) => void,
    advance: (todo: ToDo) => void,
    title: string,
}

function ToDoGallery(props: toDoGalleryProps) {

    return (
        <div className="galleryHuelle">
            <section className="galleryToDo">
                <h1></h1>
                {props.toDoList.map((singleToDo) => <ToDoCard singleToDo={singleToDo}
                                                              deleteTodo={props.deleteTodo}
                                                              advance={props.advance}/>)}
            </section>
            {/*<section className="galleryInProgress">*/}
            {/*    <h1></h1>*/}
            {/*    /!*{props.toDoList.filter((singleToDo) => (singleToDo.status === 'OPEN'))}*!/*/}
            {/*</section>*/}
        </div>
    );
}

export default ToDoGallery;