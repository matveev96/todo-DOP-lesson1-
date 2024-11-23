import React, {ButtonHTMLAttributes} from 'react';
import s from './SuperButton.module.css'

// type SuperButtonProps = {
//     onClick:()=>void
//     title: string
//     color:string
//     children?:React.ReactNode
// }

type ColorsProps={
    color1?:string
    color2?:string
    color3?:string
    color4?:string
    color5?:string
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    background?: string;
} & Omit<ColorsProps, 'color4' | 'color5'>

export const SuperButton = (props: SuperButtonProps) => {
    const {onClick, title, color, children, className, disabled, ...restProps} = props

    // const finalClassName = s.button + ' ' + s.red

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === "secondary" ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
    `

    return (
        <button
            className={finalClassName}
        >{children}</button>
    );
};
