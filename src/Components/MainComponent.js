import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import Resume from './ResumeComponent';
import Testimonials from './TestimonialsComponent';
import Contact from './ContactComponent';



import { BrowserRouter , Route , Switch } from 'react-router-dom';

function Main() {
  return (
      <BrowserRouter >
    <div className="main">
   <Menu />
   <Switch >
   <Route path="/" exact component={Home} />
   <Route path="/about" exact component={About} />
   <Route path="/resume" exact component={Resume} />
   <Route path="/portfolio" exact component={Portfolio} />
   <Route path="/testimonials" exact component={Testimonials} />
   <Route path="/contact" exact component={Contact} />
  
   </Switch >
   
    </div>
     </BrowserRouter>
  );
}

export default Main;
