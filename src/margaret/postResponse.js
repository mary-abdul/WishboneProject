import './stylesheet2.css'

const preResponse = (props) => {
    return(
    <div>
    <h1>🌼 🌼 🌼 DAISY WISHES 🌼 🌼 🌼</h1>
    <p><span>What is your favorite sweet?</span></p>
    <div class="images">
      <figure>
        <img src="1.png"/>
        <figcaption>chocolate</figcaption>
        <div class="centered">{props.percent1}%</div> {/* alex's code goes here */}
      </figure>
      <figure>
        <img src="2.png"/>
        <figcaption>candy</figcaption>
        <div class="centered">25%</div> {/* alex's code goes here */}
      </figure>
    </div>
    </div>
    )
}
export default preResponse;