import './cards.css'
function Cards(props){
    const cardss= "cards " + props.className
return (

    <div className={cardss}>{props.children}</div>
)
}
export default Cards;