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

  addGuideline = () => {
    console.log('Adicionando Comentario')

    const newGuideline = {
      id: Math.floor((Math.random() * 100) + 1),
      category: 'Usabilidade',
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
            category={guideline.category}
            description={guideline.description}
            createdAt={guideline.createdAt}
            authorEmail={guideline.authorEmail}
            likes={guideline.likes}
            unlikes={guideline.unlikes}
          >
          </Guidelines>
        ))}

        <button onClick={this.addGuideline}>Adicicionar guideline</button>
      </div>
    );
  }

}

export default App;
