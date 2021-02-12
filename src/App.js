import { Component } from 'react';
import './App.css';

import Guidelines from './components/guidelines/Guidelines'

class App extends Component {

  state = {
    guidelines: [
      {
        id: 1,
        category: 'Interface',
        description: 'Colocar mais cores',
        createdAt: new Date(2021, 2, 1),
        authorEmail: 'jonathas.silvasantos@gmail.com',
        likes: '3',
        unlikes: '0'
      },
      {
        id: 2,
        category: 'Interface',
        description: 'Colocar mais cores',
        createdAt: new Date(2021, 2, 1),
        authorEmail: 'jonathas.silvasantos@gmail.com',
        likes: '3',
        unlikes: '0'
      },
      {
        id: 3,
        category: 'Interface',
        description: 'Colocar mais cores',
        createdAt: new Date(2021, 2, 1),
        authorEmail: 'jonathas.silvasantos@gmail.com',
        likes: '3',
        unlikes: '0'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Recomendações de interface para autistas</h1>

        {this.state.guidelines.map(guideline => (
          <Guidelines
            key={guideline.id}
            category={guideline.category}
            description={guideline.description}
            createdAt={guideline.createdAt}
            authorEmail={guideline.authorEmail}
            likes={guideline.likes}
            unlikes={guideline.unlikes}
          >
          </Guidelines>
        ))}
      </div>
    );
  }

}

export default App;
