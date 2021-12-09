import React from 'react';

interface TodoProps {
    checkBox: any;
    todoText: string;
    delete: any;
    completed: any;
}

const Todo = (props: TodoProps) => {
    const {
        todoText
    } = props

    return (
        <text>{todoText}</text>
    );
}

export default Todo;