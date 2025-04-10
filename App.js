import React, { useState } from 'react';

const topReperiai = [
  {
    vardas: 'OG Version',
    daina: 'Visur Gerai',
    youtube: 'https://www.youtube.com/watch?v=0blXe6EZChU',
    img: 'https://i.ytimg.com/vi/0blXe6EZChU/hqdefault.jpg',
  },
  {
    vardas: 'G & G Sindikatas',
    daina: 'Tiems, kurie nieko nebijo',
    youtube: 'https://www.youtube.com/watch?v=qLEK2V-vsAg',
    img: 'https://i.ytimg.com/vi/qLEK2V-vsAg/hqdefault.jpg',
  },
  {
    vardas: 'Mad Money',
    daina: 'Privilegija',
    youtube: 'https://www.youtube.com/watch?v=MT8qxAC4ZGs',
    img: 'https://i.ytimg.com/vi/MT8qxAC4ZGs/hqdefault.jpg',
  },
  {
    vardas: 'Ironvytas',
    daina: 'Nelik vienas',
    youtube: 'https://www.youtube.com/watch?v=95yU8bt2crI',
    img: 'https://i.ytimg.com/vi/95yU8bt2crI/hqdefault.jpg',
  },
  {
    vardas: 'Slefas',
    daina: 'Tik Tu',
    youtube: 'https://www.youtube.com/watch?v=bGG6V1eqZlA',
    img: 'https://i.ytimg.com/vi/bGG6V1eqZlA/hqdefault.jpg',
  },
  {
    vardas: 'Lilas ir Innomine',
    daina: 'Karina',
    youtube: 'https://www.youtube.com/watch?v=mzTlduv3SBI',
    img: 'https://i.ytimg.com/vi/mzTlduv3SBI/hqdefault.jpg',
  },
  {
    vardas: 'Tie Geresni',
    daina: 'Kažkur',
    youtube: 'https://www.youtube.com/watch?v=jnpTbRGQ7wI',
    img: 'https://i.ytimg.com/vi/jnpTbRGQ7wI/hqdefault.jpg',
  },
  {
    vardas: 'Despotin Fam',
    daina: 'Savam Stiliuj',
    youtube: 'https://www.youtube.com/watch?v=3U8XyYI6WZM',
    img: 'https://i.ytimg.com/vi/3U8XyYI6WZM/hqdefault.jpg',
  },
  {
    vardas: '8 Kambarys',
    daina: 'Pasaka',
    youtube: 'https://www.youtube.com/watch?v=YYx_OvQYFqg',
    img: 'https://i.ytimg.com/vi/YYx_OvQYFqg/hqdefault.jpg',
  },
  {
    vardas: 'Mesijus',
    daina: 'Noriu būt su tavim',
    youtube: 'https://www.youtube.com/watch?v=nIP9RxdHbSM',
    img: 'https://i.ytimg.com/vi/nIP9RxdHbSM/hqdefault.jpg',
  },
];

export default function App() {
  const [search, setSearch] = useState('');

  const filtruotiReperiai = topReperiai.filter((reperis) =>
    reperis.vardas.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Lietuvos Reperių Top 10</h1>
      <input
        placeholder="Ieškoti reperio..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, marginBottom: 20, width: '100%' }}
      />
      <div style={{ display: 'grid', gap: 20 }}>
        {filtruotiReperiai.map((reperis, index) => (
          <div key={index} style={{ display: 'flex', gap: 16, alignItems: 'center', border: '1px solid #ccc', padding: 10, borderRadius: 8 }}>
            <img src={reperis.img} alt={reperis.vardas} width={100} height={100} style={{ objectFit: 'cover', borderRadius: 8 }} />
            <div>
              <h2>{reperis.vardas}</h2>
              <p>Populiariausia daina: {reperis.daina}</p>
              <a href={reperis.youtube} target="_blank" rel="noreferrer">Klausyti</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
