import React from "react";
import "../styles/ClientLogo.scss";

const clients = [
  "https://assets.bizclikmedia.net/668/fe96681f8ce4c4c0ed133321773423aa:994eccc6207779e796c88574535b99e2/michael-dell-dell-technologies-world-2022.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNisde6Kyk-HbceL2vPV9dQD2VKZ-U7AhloBUMcf_c4mWBhM9HewUOcBi-y78El8S1dXc&usqp=CAU",
  "https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format",
  "https://ztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com/sundar_4e29dcb79b.jpg",
  "https://www.thebuckstopper.com/wp-content/uploads/2024/03/sudha.jpg",
  "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4235x2824+0+0/resize/4235x2824!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F03%2Fbb%2F4206cd074691824fdfd5e03f9b01%2Fgettyimages-2162466794.jpg"
];

const ClientLogoGrid = () => {
    return (
      <div className="client-logo-grid">
        <h1 className="client-logo-title">Client Logos</h1>
        <div className="grid-container">
          {clients.map((logo, index) => (
            <img key={index} src={logo} alt={`Client ${index + 1}`} className="client-logo animated-logo" />
          ))}
        </div>
      </div>
    );
  };
  
  export default ClientLogoGrid;
