import * as React from 'react';

type Props = {
    crosses: Cross[]
    children?:React.ReactNode
};

type Cross={
    id: number
    model:string
    size: string
}

export const SuperCrosses = ({crosses, children}: Props) => {
    return (
        <div>
            <ul>
                {crosses.map((crosse, index) => {
                    return(
                        <li key={index}>
                            <div>{crosse.id}</div>
                            <div>{crosse.size}</div>
                            <div>{crosse.model}</div>
                        </li>

                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};