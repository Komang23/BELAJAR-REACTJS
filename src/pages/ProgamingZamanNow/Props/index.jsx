function Props() {
  const props = {
    text: "Code Spread Syntax",
    
  }

  return (
    <div>
      <Props1/>
      <Props2 text="Ini Contoh Mengirim Props"/>
      <Props3 {...props}/>
      
    </div>
  );
}

function Props1({text = "Ini Contoh Destructuring Props"}) {
  return (
    <div>
        <h1>{text.toUpperCase()}</h1>
    </div>
  );
}

function Props2({text = "kosong"}) {
  return (
    <div>
        <h1>{text.toUpperCase()}</h1>
    </div>
  );
}
function Props3({text = "kosong"}) {
  return (
    <div>
        <h1>{text.toUpperCase()}</h1>
    </div>
  );
}



export default Props;
 