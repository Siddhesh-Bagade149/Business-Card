export function BusinessCard (props) {
  return (
    <div className='Grandparent' style={styles.card}>
      <div className='parent' style={styles.parent}>
        <div className='child1' style={styles.child1}>
          <h2 style={styles.name}>{props.name}</h2>
          <p style={styles.description}>{props.description}</p>
        </div>
        <div className='child2' style={styles.child2}>
          <ul style={styles.interestsList}>
            <li>{props.phone}</li>
            <li>{props.email}</li>
            <li>
              <a
                href={props.linkedIn}
                target='_blank'
                rel='noopener noreferrer'
                style={{ ...styles.link, marginLeft: '0px' }}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    color: '#FFD700',
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px',
    // maxWidth: '800px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'black'
  },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    border: '2px solid #FFD700',
    borderRadius: '20px',
    backgroundColor: '#0F0F0F',
    padding: '25px'
  },
  child1: {
    padding: '10px',
    textAlign: 'center',
    // minWidth: '200px',
    margin: '20px'
  },
  child2: {
    // minWidth: '200px',
    padding: '10px',
    textAlign: 'left',
    margin: '20px'
  },
  name: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  description: {
    fontSize: '10px',
    marginBottom: '15px'
  },

  link: {
    textDecoration: 'none',
    color: 'white', // Text color
    padding: '10px 15px', // Padding for the button
    borderRadius: '5px', // Border radius for rounded corners
    backgroundColor: '#007BFF', // Background color for the button
    display: 'inline-block', // Display as inline-block to be side by side
    margin: '10px', // Margin between buttons
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Box shadow for a subtle lift
  }
}

// .card {
//     background-color: black;
//     color: gold;
//     border-radius: 8px;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     width: 300px; // Adjust as needed
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   }

//   .card-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .card-body {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }

//   .card-holder-name {
//     font-size: 18px;
//     font-weight: bold;
//   }

//   .card-number {
//     font-size: 16px;
//     font-family: monospace;
//   }

//   .expiry-date {
//     font-size: 12px;
//   }

//   .chip {
//     width: 40px;
//     height: 20px;
//     background-color: gold;
//     border-radius: 50%;
//   }

//   .logo {
//     width: 50px;
//     height: 50px;
//   }
