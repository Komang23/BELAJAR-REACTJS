export default function NestedComponent() {
  return (
    <div>
      <Container>
        <Container2 />
      </Container>
    </div>
  );
}

function Container({ children }) {
  return (
    <div>
      <h1>Programing Zaman Now</h1>
      {children}
      <footer>
        <h1>2025 Programing Zaman Now</h1>
      </footer>
    </div>
  );
}

function Container2() {
  return (
    <div>
      <h1>Isi Children</h1>
    </div>
  );
}
