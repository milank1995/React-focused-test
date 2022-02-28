import React from "react";
import Style from "./index.module.css";
import Size from "../Size";

const Javascript = () => {

    return (
        <div className={Style.box}>
            <div>
                <p className={Style.question}>
                    1) What is your favourite new javascript feature and why?
                </p>
                <p className={Style.answer}>
                    My favourite new javascript feature is "structuredClone()".<br/><br/>
                    "structuredClone()" is one globe method which is use to create new deep clone of object or array.
                    Although we just copy object use equal operate that's just give new object with old references,
                    "structuredClone()" create new object with new references. For Inserted of, when we want to clone a
                    fileObject.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    3) Is there any difference between regular function syntax and the shorter arrow function syntax?
                </p>
                <p className={Style.answer}>
                    i) In Arrow Function, we can directly return the value without using "return" keyword<br/>
                    Example : <br/><br/>
                    <code className={Style.marginLeft}>
                        const getSquare = (number) => number * number;
                    </code>

                    <br/><br/>

                    ii) In Simple Function, we can use as constructor, while in arrow function, we can not use like that.<br/>
                    Example : <br/><br/>
                    <code className={Style.marginLeft} dangerouslySetInnerHTML={{
                        __html: "function Object(color) {\n" +
                            "  this.color = color;\n" +
                            "}"
                    }}>
                    </code>

                    <br/><br/>

                    iii) "this" value inside a regular function is dynamic and depends on the invocation. But "this" inside the arrow function is bound lexically and equals to "this" of the outer function.

                </p>
            </div>

            <div>
                <p className={Style.question}>
                    4) What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’?
                </p>
                <p className={Style.answer}>
                    There is simply different in argument value which is function received.<br/><br/>
                    For Example, If foo value is 10, And I called this "myFunctionCall" function as first given way, firstly foo value will increment and after than value passed to function, that time value will be 11. Whereas, In second way, first value will pass to function, so function will receive 10 and after that value will increment to 11.<br/><br/>
                    There are Arithmetic Operators. If we use before the variable it will increase value by 1 and than pass it, else we use after the variable it will pass value fist and after increase value by 1.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    5) In your own words, explain what a javascript ‘class’ is and how it differs from a function.
                </p>
                <p className={Style.answer}>
                    The same like in any other language - a function is a way to package up some code so that it can be reused, while a class is a “blueprint” for an object, an entity that contains related code and data (methods and state).<br/><br/>
                    A function can be a block of single or multiple lines of code, that perform a specific task. For instance, a function may eb used to add two numbers,<br/><br/>
                    Not just in Javascript but programming in general, Class is a concept that's part of Object-Oriented programming. It’s a way to bind together data and functions/methods that characterise and object. For instance, consider ‘Vehicle’ as a class. It has data such as top speed, acceleration, etc, as well as methods such as drive(). These are attributes shared by any vehicle - cars, buses, bikes. etc. Thus, Car, Bus, Bike are objects of the Vehicle class. Simply put, think of a class as a blueprint for an object.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    6) In your own words, explain css specificity.
                </p>
                <p className={Style.answer}>
                    That means that CSS specificity is a set of rules used by browsers in determining which of the developer-defined styles will be applied to a specific element. For a style to be applied to a particular element, the developer has to abide by the rules, so that the browser knows how to apply the style.<br/><br/>
                    When two or more styles target a particular element, the style with the highest specificity is the one that gets applied.<br/><br/>
                    The specificity of a style is dependent on where the selector ranks when compared to other conflicting selectors. Selectors define how you target the element you want to style in CSS. Let’s look at the selectors in the hierarchy of highest to lowest.<br/><br/>
                    i) Inline Styles <br/>
                    ii) ID Selectors <br/>
                    iii) Classes, Attributes, and Pseudo Classes <br/>
                    iv) Elements <br/>
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    7) In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
                </p>
                <p className={Style.answer}>
                    The !important rule in CSS is used to add more importance to a property/value than normal. In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!<br/><br/>
                    The only way to override an !important rule is to include another !important rule on a declaration with the same (or higher) specificity in the source code - and here the problem starts! This makes the CSS code confusing and the debugging will be hard, especially if you have a large style sheet!<br/><br/>
                    If I have selected one element with different two class that's time when first hierarchy class will override the second class. that time it’s behaviour might not be what me expect.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    8) What is your preferred layout system: inline-block, floating + clearing, flex, grid, other?  And why?
                </p>
                <p className={Style.answer}>
                    Mainly I preferred two layout system first flex and second grid.<br/><br/>
                    For one dimension layout system I preferred to use Flex, because of we can the all sibling of parent just by to give css to parent element. The container and it's children have flex properties but the container reserves the row, as it is taken out of the normal flow of the document. It responds like a block element, in terms of document flow. Two flexbox containers could not exist on the same row without excess styling.<br/><br/>
                    Whereas For two dimension layout system I preferred to use Grid, because of we can manage all the child by just as column and row property. Furthermore, it's is use full when we want to create the form and any multiple child element which is created by dynamic method. And lastly, it is also use full for at a responsive web development.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    9) Are negative margins legal and what do they do (margin: -20px)?
                </p>
                <p className={Style.answer}>
                    Mostly negative margins use is not legal. To Explain more, because it is generate some bug at responsive web development.<br/><br/>
                    It is legal, if it use proper way. For Example, we want to mange some element such as "close icon of modal" and so on. which we had given float style, at that time it is use full for manage absolute element.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    10) If a "div" has no margin or other styling and a "p" tag inside of it has a margin top of some kind, the margin from the "p" tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?
                </p>
                <p className={Style.answer}>
                    That's happened because of "P" tage already have some margin had given. That's way that happened. To prevent that, we can set all element default css using "*" select to give initial margin, padding and box-sizing.
                </p>
            </div>

            <div>
                <p className={Style.question}>
                    14) React test step1:<br/>
                    Create a react component that has a "div" with a border.
                    Inside this "div" should be a "span" that displays the ‘live’ width of the browser window at all times. Keep in mind that the size of the window could easily be changed by the user and you should reflect this.
                </p>
                <Size/>
            </div>

        </div>
    )
};

export default Javascript
