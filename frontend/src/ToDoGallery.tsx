import React from 'react';
import ToDoCard from "./ToDoCard";
import {ToDo} from "./ToDo";
import './ToDoGallery.css';

type toDoGalleryProps = {toDoList:ToDo[]}

function ToDoGallery(props: toDoGalleryProps) {

    return (
        <div>
            <section className="galleryToDo">
                <h1>Open</h1>
            {props.toDoList.map((singleToDo)=> <ToDoCard key={singleToDo.id} singleToDo={singleToDo}/>)}
            </section>
            <section className="galleryInProgress">
                <h1>Doing</h1>
            </section>
            <section className="galleryDone">
                <h1>Done</h1>
            </section>
        </div>
    );
}

export default ToDoGallery;