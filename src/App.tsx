import { StrictMode } from 'react';
import { Loader, ErrorBoundary, ErrorBoundaryFallback, Example } from 'components';

function App() {
  return (
    <StrictMode>
      <ErrorBoundary fallback={ErrorBoundaryFallback}>
        <Loader>
          <Example />
        </Loader>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;
