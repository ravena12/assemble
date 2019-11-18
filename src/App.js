import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import  Router from './components/Router';

function App() {
  return (
    <div className="App">
     <div className="demo-big-content">
      <Layout>
          <Header title="Assemble Store" scroll>
              <Navigation>
                  <Link  to="/reviewCart">Cart</Link>
              </Navigation>
          </Header>
          <Drawer title="Assemble Store">
              <Navigation>
                  <Link  to="/reviewCart">Cart</Link>  
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Router/>
          </Content>
      </Layout>
    </div>
    </div>
  );
}

export default App;
