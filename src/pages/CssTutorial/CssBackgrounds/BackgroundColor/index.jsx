import "./style.css";
function BackgroundColor() {
  return (
    <div className="BackgroundColor">
      <h1>Background Color</h1>
      <br />
      <hr />
      <br />
      <h2>background-color: lightblue;</h2>
      <br />
      <hr />
      <h1>Opacity / Transparency</h1>
      <br />
      <p>
        Properti opacity menentukan opacity/transparansi suatu elemen. Nilainya
        dapat berkisar dari 0,0 - 1,0. Semakin rendah nilainya, semakin
        transparan:
      </p>
      <br />
      <div class="first">
        <h1>opacity 0.1</h1>
      </div>

      <div class="second">
        <h1>opacity 0.3</h1>
      </div>

      <div class="third">
        <h1>opacity 0.6</h1>
      </div>

      <div>
        <h1>opacity 1 (default)</h1>
      </div>
      <br />
      <hr />
      <h1>Transparency using RGBA</h1>
      <br />
      <p>
        Jika Anda tidak ingin menerapkan opasitas pada elemen anak, seperti pada
        contoh di atas, gunakan nilai warna RGBA. Contoh berikut menetapkan
        opasitas untuk warna latar belakang dan bukan teks:
      </p>
      <br />
      <div class="first1">
        <h1>10% opacity</h1>
      </div>

      <div class="second1">
        <h1>30% opacity</h1>
      </div>

      <div class="third1">
        <h1>60% opacity</h1>
      </div>

      <div>
        <h1>default</h1>
      </div>
    </div>
  );
}

export default BackgroundColor;
