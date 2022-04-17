import './Card.css'
function Card(promps) {
    const classes = 'card ' + promps.className;
    return <div className={classes}>{promps.children}</div>
}
export default Card;