import Flashcard from './flashcard.js'
import vocabulary from './vocabulary.js';

const randomWord = () => {
    return vocabulary[Math.floor(Math.random() * vocabulary.length)];
  }
  
const createFlashcards = (num) => {
        const rows = [];
        for (let i = 0; i < num; i++) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push(<Flashcard key={i} flashcard={randomWord()}/>);
        }
      return rows;
}

export function FlashcardList(props) {
    return (
      <div>
        <div className='card-grid'>
        </div>
        {
          createFlashcards(5)

        }
        <button className="btn btn-primary" style={{marginLeft: "100px"}} onClick={() => window.location.reload()}>Shuffle</button>
      </div>
      
    );
  }