import { useState } from 'react';

function NewRecruit() {
  const [offName, setOffName] = useState('');
  const date = new Date().toISOString().slice(5, 10).replace('-', '/');

  return (
    <div>
        <h3>New Recruit</h3>
        <div>
          Officer Name: 
          <input value={offName} onChange={e => setOffName(e.target.value)} />
        </div>
        <div>
            {`GI~${date}~(${offName})`}
        </div>
    </div>
  );
}

export default NewRecruit;