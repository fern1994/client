import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'


import './assets/scss/main.scss'
import registerServiceWorker from './registerServiceWorker';
import RouteRoot from './routes/route.root'
import { AUTH_TOKEN } from './constants'

const httpLink = createHttpLink({
    uri: 'http://172.16.4.150:4000/'
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })
  
  const wsLink = new WebSocketLink({
    uri: `ws://172.16.4.150:4000/`,
    options: {
      reconnect: true,
      connectionParams: {
        authToken: localStorage.getItem(AUTH_TOKEN),
      }
    }
  })
  
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink)
  )
  
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  })

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <RouteRoot />
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();