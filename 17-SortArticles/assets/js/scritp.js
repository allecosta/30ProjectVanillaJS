const bands = [
        'Beatles', 
        'Led Zeppelin', 
        'The Purple', 
        'Pink Floyd', 
        'Ramones', 
        'The Strokes', 
        'Arctic Monkeys', 
        'The xx', 
        'The Killers', 
        'Franz Ferdinand', 
        'Jayley', 
        'Buckethead'
    ];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);
