import React from "react";
import '../App.css';

const About = () => {

    return (
      <div className={"background2"}>
        <div className={"indend3"}>
        <h1>For Pub Owners:</h1>
        <ol >
            <li>You can register your pub to ask for financial support from supporters.</li>
            <li>You will need to issue tickets to supporters in exchnage for £10 per ticket.</li>
            <li>You will need to offer food or drink when the supporters, who you issued tickets before, redeem the tickets.</li>
        </ol>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="indend2">
        <h1>For Supporters:</h1>
        <ol>
            <li>You can buy a ticket which costs £10</li>
            <li>A ticket you bought has expiry data: 3 months from your purchase date</li>
            <li>You can use your tickets to buy food and drink at the pubs you purchased your tickets from</li>
        </ol>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       
     </div>
    );
  };

  export { About }
