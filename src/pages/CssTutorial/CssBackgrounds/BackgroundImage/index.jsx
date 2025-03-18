import "./style.css";
function BackgroundImage() {
  return (
    <div className="BackgroundImage">
      <h1>CSS Background Image</h1>
      <br />
      <hr />
      <br />
      <p>
        Properti background-image menentukan gambar yang akan digunakan sebagai
        latar belakang suatu elemen. Secara default, gambar diulang sehingga
        menutupi seluruh elemen.
      </p>
      <br />
      <div className="a">
        <h1>Background 1</h1>

        <p>This page has an image as the background!</p>
      </div>
      <br />
      <div className="b">
        <h1>Background 3</h1>

        <p>This page has an image as the background!</p>
      </div>
      <br />
      <div className="c">
        <h1>Background 3</h1>

        <p>This page has an image as the background!</p>
      </div>
      <br />
    </div>
  );
}

export default BackgroundImage;
