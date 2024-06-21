import React, { lazy, Suspense, useState, useEffect } from 'react';



// docs: https://reactjs.org/docs/code-splitting.html#reactlazy
//const MarketingLazy = lazy(() => import('./components/MarketingApp')); // this will make sure that we only load the MarketingApp code when we want to show it
//const AuthLazy = lazy(() => import('./components/AuthApp')); // this will make sure that we only load the AuthApp code when we want to show it
import DashboardLazy  from './components/DashboardApp'; // this will make sure that we only load the DashboardApp code when we want to show it




export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [someData, setsomeData] = useState('');
  const [someOtherData, setsomeOtherData] = useState('');
  const [someBool, setsomeBool] = useState(false);
  const [myKey, setmyKey] = useState(1);
  useEffect(() => {
    if (isSignedIn) {
      //history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
<div>
<h1>hi</h1>
<button style={{width: '200px', height: '200px'}} onClick={() => {
  
  setmyKey(myKey+1)
}
}>Click force</button>

<button style={{width: '200px', height: '200px'}} onClick={() => {
  setsomeData('hi')

  setsomeOtherData('hello')
  
}
}>Click update</button>

<button style={{width: '200px', height: '200px'}} onClick={() => {
  setsomeData(null)

  setsomeOtherData(null)
  
}
}>Click set null state</button>

<button style={{width: '200px', height: '200px'}} onClick={() => {
  
  setsomeBool(true);
}
}>Click change button bool in Vue</button>

<div key={myKey}>
<DashboardLazy someData={someData}  someOtherData={someOtherData}  someBool={someBool}/>
</div>
</div>
  );
};
