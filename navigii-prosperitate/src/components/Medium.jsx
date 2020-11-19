import React from "react";

function Medium({ start, arrive, weatherStatus }) {
  return (
    <div className="Medium">
      {weatherStatus ? (
        <p>Weather's good fella, you won't be troubled by any rain or snow</p>
      ) : (
        <p>Weather's not that great, expect some rain</p>
      )}
      <p>This is a test</p>
    </div>
  );
}

export default Medium;
