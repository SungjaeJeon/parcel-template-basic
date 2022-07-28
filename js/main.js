console.log("HELLO Parcel!")

async function tetst() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
tetst()