https://ej2.syncfusion.com/react/documentation/installation/

the isActive props inside NavLink component of react-router-dom
 
    <NavLink
        className={({ isActive }) => isActive ? activeLink : normalLink}>
    </NavLink>

The useState hook returns a function to update the state. In our example, we know it as the setCounter(value) method. A specialty of this method is, you can get the previous(or old) state value to update the state. Please take a look into the code snippet below,

    const incrBy3 = () => {
    setCounter((prev) => prev + 3);
    };