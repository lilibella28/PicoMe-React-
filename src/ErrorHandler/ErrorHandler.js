import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function handleCatch(error, errorInfo) {
    console.error(error, errorInfo);
    setHasError(true);
  }

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment className="test">
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { onError: handleCatch })
      )}
    </React.Fragment>
  );
}
export default ErrorBoundary;