import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Global } from './Global';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(

<Global>
 <QueryClientProvider client={queryClient}>

<App />
<ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>   
</Global>


);
