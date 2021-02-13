import { Component } from 'react';
import './App.css';

import Guidelines from './components/guidelines/Guidelines'

class App extends Component {

  state = {
    guidelines: [
      {
        id: 1,
        object_id: 333, 
        description: 'Colocar mais cores',
        createdAt: new Date(2021, 2, 1),
        authorEmail: 'jonathas.silvasantos@gmail.com',
        likes: '3',
        unlikes: '0'
      },
      {
        id: 2,
        object_id: 333,
        description: 'Colocar mais cores',
        createdAt: new Date(2021, 2, 1),
        authorEmail: 'jonathas.silvasantos@gmail.com',
        likes: '3',
        unlikes: '0'
      },
      {
        id: 3,
        object_id: 333,
        description: 'Colocar mais cores',
        createdAt: new Date(2021, 2, 1),
        authorEmail: 'jonathas.silvasantos@gmail.com',
        likes: '3',
        unlikes: '0'
      }
    ],
  }

  addGuideline = () => {

    const newGuideline = {
      id: Math.floor((Math.random() * 100) + 1),
      object_id: 333,
      description: 'Use preferencialmente cores leves, sem tons muito fortes',
      createdAt: Date.now().toString(),
      authorEmail: 'aureah.melo@gmail.com',
      likes: '0',
      unlikes: '0'
    }

    this.setState({ guidelines: [...this.state.guidelines, newGuideline] })

  }

  render() {
    return (
      <div className="App">
        <h1>Recomendações de interface para autistas</h1>

        {this.state.guidelines.map(guideline => (
          <Guidelines
            key={guideline.id}
            object={guideline.object_id}
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
