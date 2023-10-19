const FunctionalProps = (props)=>{
    const {name,age,university,city,Children} = props;
    return(

        <div>
            <h3>{name}</h3>
            <div>My age is {age}</div>
            <div>Graduated from {university}</div>
            <div>And lives in {city}</div>
            {Children}
        </div>
    )

}

export default FunctionalProps;