'use client';

/* Core */
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

/* Instruments */
import { reduxStore } from '@/lib/redux/store';

/* UI */
import { Puff } from 'react-loader-spinner';

export const ReduxProviders = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate
        loading={
          <div className="w-full h-dvh flex justify-center items-center">
            <Puff
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
        persistor={persistStore(reduxStore)}
      >
        {props.children}
      </PersistGate>
    </Provider>
  );
};

