function Following() {
  return (
    <>
      <h2>
        Following Page: {new Date().getHours()}:{new Date().getMinutes()}:
        {new Date().getSeconds()}:{new Date().getMilliseconds()}
      </h2>
    </>
  );
}

export default Following;
