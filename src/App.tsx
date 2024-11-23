import React, {useState} from 'react';
import './App.css';
import {Modal} from "./components/modal/Modal";
import {SuperButton} from "./components/SuperButton";
import styles from './components/SuperButton.module.css'
import {SuperCrosses} from "./components/SuperCrosses";


function App() {

    const croses = [
        { id: 1, model: "ADIDAS", size: 'XXX' },
        { id: 2, model: "ABIBAS", size: 'YYY' },
        { id: 3, model: "PUMA", size: 'ZZZ' }
    ]

    return (
        <div>
            {/*<SuperButton onClick={()=>{}} className={styles.redForSuperButton} >*/}
            {/*    Red super button*/}
            {/*</SuperButton>*/}
            {/*<SuperButton onClick={()=>{}} className={styles.redForSuperButton} >*/}
            {/*    Red super button*/}
            {/*</SuperButton>*/}
            {/*<SuperButton  color={'red'}>Red SuperButton</SuperButton>*/}
            {/*<SuperButton color={'secondary'}>Secondary SuperButton</SuperButton>*/}
            {/*<SuperButton>Default SuperButton</SuperButton>*/}
            {/*<SuperButton  disabled>Disabled SuperButton</SuperButton>*/}

           {/*<Modal>*/}
           {/*    <input type="email" placeholder="email" />*/}
           {/*    <input type="password" placeholder="pass"/>*/}
           {/*    <button>send</button>*/}
           {/*</Modal>*/}
           <Modal>
               <h2>Confident Information</h2>
               <input type="email" placeholder="email" />
               <input type="password" placeholder="pass"/>
               <input type="password" placeholder="pass"/>
                   <label>
                       <input id={'check'} type="checkbox"/>
                       I agree
                   </label>

               <button>send</button>
           </Modal>
        </div>
    );
}


export default App;
