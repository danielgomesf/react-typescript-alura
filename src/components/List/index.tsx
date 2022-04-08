import React from "react";

function List() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Javascprit',
        tempo: '01:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }

    ]
    return(
        <aside>
            <h2>Estudos do dia
                <ul>
                    {tarefas.map((item, index) => (
                        <li key={index}>
                            <h3> {item.tarefa} </h3>
                            <span> {item.tempo} </span>
                        </li>
                    ))}
                </ul>
            </h2>
        </aside>
    )

}

export default List;