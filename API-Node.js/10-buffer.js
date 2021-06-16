const buffer = Buffer.alloc(3);

buffer.writeUInt8(82);
buffer.writeUInt8(111, 1);
buffer.writeUInt8(109, 2);

console.log(buffer.toString('utf-8')); // Rom

const buf1 = Buffer.from([82, 111, 109]);
const buf2 = Buffer.from([97, 105, 110]);

console.log(Buffer.concat([buf1, buf2]).toString('utf-8')); // Romain
