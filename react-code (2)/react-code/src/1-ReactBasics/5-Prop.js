function App() {
  return (
    <>
      <ChildComponent name="Happy" purpose="Interview" />
    </>
  );
}

function ChildComponent(props) {
  return (
    <div>
      {props.name}, {props.purpose}
    </div>
  );
}
