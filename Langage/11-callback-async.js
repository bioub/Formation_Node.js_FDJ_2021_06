setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appel
// ^
// |
// |
// |                                 lg           lg   lg               lg
// |st - st - st - st - lg ..⟳..    cbB  ..⟳..   => - =>  ..⟳..        =>
// +---------------------------------------------------------------------------------> temps
//                      E            B            A    D                 C

// file d'attente (0ms) : cbB
// file d'attente (7ms) :

// In the loop (Jake Archibald)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0

