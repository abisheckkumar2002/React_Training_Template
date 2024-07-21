import React from "react";

const Content = () => {


  function handleClickEvent(e) {
    console.log( e["target"]["innerText"],"     using the square brackets");
    console.log( e.target.innerText,"     using the dot operator");
  }



  function handlemyage() {

    console.log(Math.random(),"Math.random()")
    console.log(Math.random()*3,"Math.random()*3")

    const agelist = ["1", "4", "6", "88"];
    const index = Math.floor(Math.random() * 3);
   
    return agelist[index];
  }


  function handleDoubleClick(){

    console.log("handleDoubleClick occur")
  }

  function mouseHoverEvent(){
    console.log("mouseHoverEvent occur")
  }

  return (
    <div>
      <p> let my agecc {handlemyage()}</p>
      <button onClick={(e)=>{
        handleClickEvent(e)// ananmous function
      }}>Clickccc</button>

      <h1 onDoubleClick={()=>{
        handleDoubleClick()
      }}> click double time to execute this event</h1>

  <h1 onMouseOver={()=>{
        mouseHoverEvent()
      }}> mouse hover to execute this event</h1>

      
    </div>



  );
};

export default Content;
