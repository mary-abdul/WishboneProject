import './stylesheet.css'

const preResponse = (props) => {
    return(
    <div>
    <h1>🌼 🌼 🌼 DAISY WISHES 🌼 🌼 🌼</h1>
    <p><span>What is your favorite sweet?</span></p>
    <div class="images">
      <figure>
        <img src="1.png" onClick={props.callback1}/>  {/* alex's code goes here */}
        <figcaption>chocolate</figcaption>
      </figure>
      <figure>
        <img src="2.png" onClick={props.callback2}/>  {/* alex's code goes here */}
        <figcaption>candy</figcaption>
      </figure>
    </div>
    </div>
    )
}
export default preResponse;