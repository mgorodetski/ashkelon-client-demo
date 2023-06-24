import React from "react";
import "./About.css";
import ashLogo from "../../assets/ashqelonLogo.svg"


export default function About() {
  return (
    <div className="about">
      <h1>Русский культурный центр в городе Ашкелон</h1>
      <div className="aboutDesc">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in felis vitae sem fermentum pharetra. Mauris sagittis lacus nec risus congue, quis malesuada tellus semper. In commodo turpis nec nulla consequat, vitae commodo nisl posuere. Donec accumsan augue ac justo facilisis, id volutpat dui volutpat. Cras faucibus elementum lacus, id tincidunt felis venenatis a. Fusce dignissim lorem ac mauris vestibulum, sit amet accumsan risus ullamcorper. Etiam accumsan ac lacus vel elementum. Quisque sed leo pellentesque, consectetur nisl non, gravida quam. Nulla viverra ligula a euismod aliquam. 
          <br />
          <br />
          <br />
          Donec sit amet tincidunt libero. Aenean urna nibh, luctus eu egestas vitae, feugiat quis neque. Phasellus id pellentesque nisl. Curabitur ullamcorper malesuada mauris in luctus. Nunc dignissim ipsum eget blandit tristique. Curabitur a massa ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet lectus nibh. Cras ut urna ac dolor porta finibus vitae eu justo. Morbi eu mollis nibh.
        </p>
        <img
        
          src={ashLogo}
          alt="aboutIMG"
        />
      </div>
    </div>
  );
}
