import { React, useState } from "react";

import {BiLeftArrowAlt} from "react-icons/bi"
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    Link
  } from "react-router-dom";


function Color() {

    const colors = [
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#f0f8ff", name: "aliceblue" },
        { colorsd: "#f0ffff", name: "azure" },
        { colorsd: "#f5f5dc", name: "beige" },
        { colorsd: "#000000", name: "black" },
        { colorsd: "#FF0000", name: "red" },
        { colorsd: "#000080", name: "navy" },
        { colorsd: "#FF0000", name: "red" },
        { colorsd: "#00FF00", name: "lime" },
        { colorsd: "#808000", name: "olive" },
        { colorsd: "#000080", name: "navy" },
        { colorsd: "#ec015a", name: "red" },
        { colorsd: "#008000", name: "green" },
        { colorsd: "#70327e", name: "viloet" },
        { colorsd: "#0000FF", name: "blue" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#008080", name: "teal" },
        { colorsd: "#00FFFF", name: "aqua" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#00FF00", name: "lime" },
        { colorsd: "#808000", name: "olive" },
        { colorsd: "#000080", name: "navy" },
        { colorsd: "#ec015a", name: "red" },
        { colorsd: "#008000", name: "green" },
        { colorsd: "#70327e", name: "viloet" },
        { colorsd: "#0000FF", name: "blue" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#008080", name: "teal" },
        { colorsd: "#00FFFF", name: "aqua" },
        { colorsd: "#f0f8ff", name: "aliceblue" },
        { colorsd: "#f0ffff", name: "azure" },
        { colorsd: "#f5f5dc", name: "beige" },
        { colorsd: "#00FFFF", name: "aqua" },
        { colorsd: "#f0f8ff", name: "aliceblue" },
        { colorsd: "#f0ffff", name: "azure" },
        { colorsd: "#f5f5dc", name: "beige" },
        { colorsd: "#000000", name: "black" },
        { colorsd: "#FF0000", name: "red" },
        { colorsd: "#000000", name: "black" },
        { colorsd: "#FF0000", name: "red" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#00FF00", name: "lime" },
        { colorsd: "#808000", name: "olive" },
        { colorsd: "#ec015a", name: "red" },
        { colorsd: "#008000", name: "green" },
        { colorsd: "#70327e", name: "viloet" },
        { colorsd: "#0000FF", name: "blue" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#008080", name: "teal" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#00FF00", name: "lime" },
        { colorsd: "#808000", name: "olive" },
        { colorsd: "#000080", name: "navy" },
        { colorsd: "#ec015a", name: "red" },
        { colorsd: "#008000", name: "green" },
        { colorsd: "#70327e", name: "viloet" },
        { colorsd: "#0000FF", name: "blue" },
        { colorsd: "#ffff00", name: "yellow" },
        { colorsd: "#008080", name: "teal" },
        { colorsd: "#00FFFF", name: "aqua" },
        { colorsd: "#f0f8ff", name: "aliceblue" },
        { colorsd: "#f0ffff", name: "azure" },
        { colorsd: "#f5f5dc", name: "beige" },
        { colorsd: "#000000", name: "black" },
    
      ];
      const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState();
  const [users, setUsers] = useState(colors);
  console.log(users, "users");
  const searchData = (searchWord) => {
    console.log("searchWord", searchWord);
    if (searchWord !== "") {
      const newData = users.filter((item) => {
        const name = item.name ? item.name.toUpperCase() : "".toUpperCase();
console.log(item.name,"colorsname")
        const searchWordData = searchWord.toUpperCase();
        if (name.indexOf(searchWordData) > -1) {
          return name.indexOf(searchWordData) > -1;
        }
      });
      setUsers(newData);
    } else {
      setUsers(colors);
      // console.log(users, "hello");
    }
  };

//   const colorData = () => {
//     return users.map((user, index) => {
//       return (
          
       
//           <div className="card">
//             <div className="colorcode">{user.colorcode} {user.name}</div>
//           </div>
       
//       );
//     });
//   };
  return users && users !== null && users.length > 0 ? (
    <div className="color">
        <div className="App">
      <div className="">
        {current !== null && <h1>Copied{current}</h1>}
        <div className="container">
          {colors.map((color, index) => (
            <div key={index} className="card">
              <div
                style={{
                  background: color.colorsd,
                  filter: "brightness(85%)",
                  boxShadow: color.colorsd === background ? "0 0 5px #000" : "",
                }}
                className="box"
                onClick={() => setBackground(color.colorsd)}
              />
              <CopyToClipboard text={`color:${color.colorsd};`}>
                <p>{color.colorsd}</p>
              </CopyToClipboard>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  ) : (
    <div>no data</div>
  );
}

export default Color;