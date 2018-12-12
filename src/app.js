
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';





ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));



















// const Layout =(props)=> {
//     return (
//         <div>
//         <p> HEADER</p>
//         {props.content}
//         <p> FOOTER</p>
//         </div>
//     )
// }



// const template = (
//     <div>
//     <h1> Page Title</h1>
//     <p> This is my page</p>
//     </div>
// )
  


// ReactDOM.render(<Layout content = {template}/>, document.getElementById('app'));


// ReactDOM.render((<Layout>
//      <div>
//     <h1> Page Title</h1>
//     <p> This is my page</p>
//     </div>
//      </Layout>), document.getElementById('app'));
  
























//Testing notes
//--------------------------------------------------
//using class properties plugin without using contructor
//without using the bind

// class OldSyntax {
//     constructor(){
//         this.name  = 'Kee',
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `hi ${this.name}!`
//     } 
// }
// let oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// Cannot read property 'name' of undefined
//becasue we need to bind it explicitly
//using arrow function instead of a method

// class NewSyntax {
//       name  = 'Weeeee';
//       getGreeting=()=>{
//         return `hi ${this.name}!`;
//       }
// }
// let newSyntax = new NewSyntax();
// let newGreeting = newSyntax.getGreeting;
// console.log(newGreeting());

//--------------------------------------------------
// //import './util.js'
// import subtract,{ add ,square} from './util.js'

// console.log('app.js is running');


// //  console.log(square(4));
// // console.log(add(400,69));
// // console.log(subtract(120,80));



// import isSenior, {isAdult, canDrink } from './util.js'
// console.log(isAdult(14));
// console.log(canDrink(67));
// console.log(isSenior(67));
//--------------------------------------------------

//using node modules
//instal
//import
//use

// import validator from 'validator';
// // import isEmail from 'validator/lib/isEmail';

// console.log("dfjsdfnsdkfnlsdnfkldsflsd")
// console.log(validator.isEmail('test@gmail.com'));